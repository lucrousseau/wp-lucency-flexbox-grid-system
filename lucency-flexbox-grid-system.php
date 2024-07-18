<?php
/**
 * Plugin Name: Lucency Flexbox Grid System
 * Description: A WordPress plugin that provides responsive functionality for Gutenberg blocks with flexbox and grid system layouts.
 * Requires at least: 6.5
 * Requires PHP: 8.2
 * Version: 0.1.0
 * Author: Luc Rousseau
 * Author URI: https://lucrousseau.com
 * License: GPL v2 or later
 * License URI: https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain: lucency
*/

if ( ! defined( 'ABSPATH' ) ) {
    exit; 
}

function lucencyFlexboxGridSystemInit() {
    $blocks_dir = __DIR__ . '/build/';
    $block_folders = array_filter(glob($blocks_dir . '*'), 'is_dir');

    foreach ($block_folders as $folder) {
        register_block_type($folder);
    }
}

add_action( 'init', 'lucencyFlexboxGridSystemInit' );

function lucencyFlexboxGridSystemBlockCategory($categories) {
    $custom_category = [
        'slug'  => 'lucency',
        'title' => __('Lucency Flexbox Grid System', 'lucency'),
        'icon'  => null,
    ];

    array_unshift($categories, $custom_category);
    return $categories;
}

add_filter('block_categories_all', 'lucencyFlexboxGridSystemBlockCategory', 10, 2);