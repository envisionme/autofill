<?php
// $Id$

/**
*
*@file
*Adminstrative page callbacks for AutoFill
*
*@ingroup AutoFil
*
*/

/*
* Implementation of Autofil settings form
*/
function autofill_form() {
  $path = drupal_get_path('module', 'autofill');
  drupal_add_css($path .'/autofill.css');

  $form = array();

  $form['autofill_colour_default'] = array(
    '#type' => 'textfield',
    '#title' => t('Default Text Color'),
    '#default_value' => variable_get('autofill_colour_default', NULL),
    '#attributes' => array('class' => 'field_spacing'),
  );

  $form['autofill_colour_active'] = array(
    '#type' => 'textfield',
    '#title' => t('Active Text Color'),
    '#default_value' => variable_get('autofill_colour_active', NULL),
    '#attributes' => array('class' => 'field_spacing'),
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
  
  for ($delta = 0; $delta <= 2; $delta++) {
    $form['fields']['autofill_' . $delta . '_id'] = array(
    '#type' => 'textfield',
    '#title' => t('ID'),
    '#default_value' => variable_get('autofill_' . $delta . '_id', NULL),
    '#attributes' => array('class' => 'field_spacing'),
    );
    $form['fields']['autofill_' . $delta . '_value'] = array(
    '#type' => 'textfield',
    '#title' => t('Value'),
    '#attributes' => array('class' => 'field_spacing'),
    '#default_value' => variable_get('autofill_' . $delta . '_value', NULL),
    );
    $form['fields']['autofill_' . $delta . '_pre'] = array(
    '#type' => 'textfield',
    '#title' => t('Pre populate Value'),
    '#attributes' => array('class' => 'field_spacing'),
    '#default_value' => variable_get('autofill_' . $delta . '_pre', NULL),
    );
  }
  return system_settings_form($form);
}