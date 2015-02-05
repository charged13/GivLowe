<?php
function glowe_preprocess_page(&$variables){
  $search_form = drupal_get_form('search_form');
  $search_form_box = drupal_render($search_form);
  $variables['search_box'] = $search_form_box;
}
?>