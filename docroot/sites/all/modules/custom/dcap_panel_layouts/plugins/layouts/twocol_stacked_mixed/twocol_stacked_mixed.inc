<?php

// Plugin definition
$plugin = array(
  'title' => t('Two column stacked mixed'),
  'category' => t('Dcap'),
  'icon' => 'twocol_stacked_mixed.png',
  'theme' => 'panels_twocol_stacked_mixed',
  'css' => 'twocol_stacked_mixed.css',
  'regions' => array(
    'top' => t('Top'),
    'prefaceleft' => t('Preface Left side'),
    'prefaceright' => t('Preface Right side'),
    'contentmid' => t('Content Mid'),
    'contentleft' => t('Content Left side'),
    'contentright' => t('Content Right side'),
    'bottom' => t('Bottom')
  ),
);
