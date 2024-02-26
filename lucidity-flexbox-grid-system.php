<?php
/**
 * Plugin Name: Lucidity Flexbox & Grid System
 * Description: Example block scaffolded with Create Block tool.
 * Requires at least: 6.4
 * Requires PHP: 8.2
 * Version: 1.0.0
 * Author: Luc Rousseau
 * License: GPL-2.0-or-later
 * License URI: https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain: lucidity-flexbox-grid-system
*/

if ( ! defined( 'ABSPATH' ) ) {
    exit;
}

function lucidityFlexboxGridSystemIinit() {
    $blocks_dir = __DIR__ . '/build/';
    $block_folders = array_filter(glob($blocks_dir . '*'), 'is_dir');

    foreach ($block_folders as $folder) {
        register_block_type($folder);
    }
}

add_action( 'init', 'lucidityFlexboxGridSystemIinit' );
