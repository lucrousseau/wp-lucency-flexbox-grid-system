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
 * @package lucency
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

// Define plugin constant.
define( 'WLFGS_VERSION', '0.1.0' );
define( 'WLFGS_URL', plugin_dir_url( __FILE__ ) );
define( 'WLFGS_PATH', plugin_dir_path( __FILE__ ) );
define( 'WLFGS_BASENAME', plugin_basename( __FILE__ ) );
define( 'WLFGS_ASSETS_URL', WLFGS_URL . 'build/assets/' );
define( 'WLFGS_ASSETS_PATH', WLFGS_PATH . 'build/assets/' );
define( 'WLFGS_BLOCKS_PATH', WLFGS_PATH . 'build/' );
define( 'WLFGS_CLASSES_PATH', WLFGS_PATH . 'includes/classes/' );

// Include the autoloader.
require_once WLFGS_PATH . 'includes/autoload.php';

// Include the initialization file.
require_once WLFGS_PATH . 'includes/init.php';
