<?php
// https://www.drupal.org/node/2486991
$function = new Twig_SimpleFunction('wrap', function ($string, $tag, $class) {
  if (!empty($string)) {
    return '#';
  }

});
#'