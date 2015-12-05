<?php

// Plugin definition
$plugin = array(
  'title' => t('2 column stacked layout'),
  'category' => t('Dcap'),
  'icon' => 'twocol_stacked.png',
  'theme' => 'panels_twocol_stacked',
  'css' => 'twocol_stacked.css',
  'regions' => array(
    'top' => t('Top'),
    'left' => t('Left side'),
    'right' => t('Right side'),
    'bottom' => t('Bottom')
  ),
);
