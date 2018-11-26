<?php
// https://www.drupal.org/node/2486991
$function = new Twig_SimpleFunction('menu_replace', function ($string) {
  return str_replace('~', '<span class="menu__break">-<br></span>',
    str_replace('^', '<span class="menu__break"><br></span><span class="menu__space"> </span>', $string));
});
