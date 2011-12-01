<?php
/**
 *
 * @file
 * Adminstrative page callbacks for Autofill
 *
 * @ingroup Autofill
 *
 */

/*
 * Implementation of Autofill settings form.
 */
function autofill_form() {
  $path = drupal_get_path('module', 'autofill');
  drupal_add_css($path .'/autofill.css');

  $form = array();

  $form['autofill_colour_default'] = array(
    '#type' => 'textfield',
    '#title' => t('Default Text Color'),
    '#default_value' => variable_get('autofill_colour_default', '#ccc'),
    '#attributes' => array('class' => 'field_spacing'),
    '#description' => t('Helptip colour for empty fields.'),
  );

  $form['autofill_colour_active'] = array(
    '#type' => 'textfield',
    '#title' => t('Active Text Color'),
    '#default_value' => variable_get('autofill_colour_active', '#333'),
    '#attributes' => array('class' => 'field_spacing'),
    '#description' => t('Color of autofill fields when being edited'),
  );
  
  $form['fields'] = array(
    '#type' => 'fieldset',
    '#title' => t('Fill in autofill fields'),
    '#description' => t('Please note that you have to right click to view source and find the correct variables.'),
    '#collapsible' => FALSE,
    '#collapsed' => FALSE,
    '#prefix' => '<div class="autofill-row">',
    '#suffix' => '</div">',
  );
  // get fields
  $fields = variable_get('autofill_id_field_combos', array());
  $count = 0;
  foreach ($fields as $delta => $field) {
    $form['fields'][] = _autofill_textfield_combo($delta, $field['id'], $field['value'], $field['pre']);
    $count = $delta;
  }
  // default empty field as a last row
  $form['fields'][] = _autofill_textfield_combo($count+1, '', '', '');
  
  // use custom submit handler
  $form['buttons']['submit'] = array(
    '#type' => 'submit',
    '#value' => t('Save configuration'),
    '#submit' => array('autofill_settings_form_submit'),
  );
  // add form validation
  $form['#validate'] = array('autofill_settings_form_validate');
  return $form;
}

/**
 * Settings form validate handler to ensure a hexadecimal color value.
 */
function autofill_settings_form_validate($form, &$form_state) {
  // Validate default text color field
  if (!empty($form_state['values']['autofill_colour_default'])) {
    if (!preg_match('/^#[0-9a-fA-F]{3}([0-9a-fA-F]{3})?$/', $form_state['values']['autofill_colour_default'])) {
      form_error($form, t('Text color must be a hexadecimal color value like %color.', array('%color' => '#ccc')));
    }
  }
  // Validate text color field
  if (!empty($form_state['values']['autofill_colour_active'])) {
    if (!preg_match('/^#[0-9a-fA-F]{3}([0-9a-fA-F]{3})?$/', $form_state['values']['autofill_colour_active'])) {
      form_error($form, t('Text color must be a hexadecimal color value like %color.', array('%color' => '#333')));
    }
  }
  
  // Validate ID field
  $fields = $form_state['values']['fields'];
  //dpm(substr($fields[$delta]['id'],0,1));  
  if (!empty($fields))
  foreach ($fields as $delta => $field) {
    // check if ID field uses the correct CSS ID or class identifier
    if (!empty($fields[$delta]['id']) && $fields[$delta]['id'][0] != '#' && $fields[$delta]['id'][0] != '.') {
      form_error($form, t('%field-id doesn\'t contain a CSS class or ID identifier (e.g. <em>#specific</em> for <em>id="specific"</em> and <em>.general</em> for <em>class="general"</em>).', array('%field-id' => $fields[$delta]['id'])));
    }
    // check if either value or pre populate value is specified
    if (!empty($fields[$delta]['id']) && empty($fields[$delta]['value']) && empty($fields[$delta]['pre'])) {
      form_error($form, t('%field-id field must contain either a <em>Empty value</em> or <em>Pre-populate value</em>.', array('%field-id' => $fields[$delta]['id'])));
    }
  }
}

/**
 * Submit handler for settings form
 */
function autofill_settings_form_submit($form, &$form_state) {
  variable_set('autofill_colour_default', $form_state['values']['autofill_colour_default']);
  variable_set('autofill_colour_active', $form_state['values']['autofill_colour_active']);
  $fields = $form_state['values']['fields'];
  foreach ($fields as $key => $field) {
    if (empty($field['id'])) {
      unset($fields[$key]);
	}  
  }
  variable_set('autofill_id_field_combos', $fields);
  drupal_set_message(t('Your changes have been saved.'));
}

/**
 * Autofill combo boxes for admin settings form
 */
function _autofill_textfield_combo($delta, $id, $value, $pre) {
  $form = array(
    '#tree' => TRUE,
  );
  $form['markup1'] = array('#value' => '<div class="autofill-row">');
  $form['id'] = array(
    '#type' => 'textfield',
    '#title' => t('ID/class'),
    '#default_value' => $id,
    '#attributes' => array('class' => 'field_spacing'),
    '#parents' => array('fields', $delta, 'id'),
  );
  $form['value'] = array(
    '#type' => 'textfield',
    '#title' => t('Empty value'),
    '#default_value' => $value,
    '#attributes' => array('class' => 'field_spacing'),
    '#parents' => array('fields', $delta, 'value'),
  );
  $form['pre'] = array(
    '#type' => 'textfield',
    '#title' => t('Pre-populate value'),
    '#default_value' => $pre,
    '#attributes' => array('class' => 'field_spacing'),
    '#parents' => array('fields', $delta, 'pre'),
  );
  $form['markup2'] = array('#value' => '</div>');
  return $form;
}
