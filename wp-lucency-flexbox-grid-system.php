<?php
/**
 * Plugin Name: WP Lucency Flexbox Grid System
 * Description: A WordPress plugin that provides responsive functionality for Gutenberg blocks with flexbox and grid system layouts.
 * Requires at least: 6.5
 * Requires PHP: 8.2
 * Version: 0.1.0
 * Author: Luc Rousseau
 * Author URI: https://lucrousseau.com
 * License: GPL v2 or later
 * License URI: https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain: lucency
 *
 * @package Lucency
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

// Define plugin constants.
define( 'LUCENCY_VERSION', '0.1.0' ); // The current version of the plugin.
define( 'LUCENCY_URL', plugin_dir_url( __FILE__ ) ); // The URL to the plugin directory.
define( 'LUCENCY_PATH', plugin_dir_path( __FILE__ ) ); // The filesystem path to the plugin directory.
define( 'LUCENCY_BASENAME', plugin_basename( __FILE__ ) ); // The plugin's base file path.
define( 'LUCENCY_ASSETS_URL', LUCENCY_URL . 'build/assets/' ); // The URL to the plugin's asset directory.
define( 'LUCENCY_ASSETS_PATH', LUCENCY_PATH . 'build/assets/' ); // The filesystem path to the plugin's asset directory.
define( 'LUCENCY_BLOCKS_PATH', LUCENCY_PATH . 'build/' ); // The path to the plugin's block directory.
define( 'LUCENCY_CLASSES_PATH', LUCENCY_PATH . 'includes/classes/' ); // The path to the plugin's class files.

// Include the autoloader for the plugin.
require_once LUCENCY_PATH . 'includes/autoload.php';

// Include the initialization file for the plugin.
require_once LUCENCY_PATH . 'includes/init.php';

// test.
