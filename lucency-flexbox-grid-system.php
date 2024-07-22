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

class Lucency_Flexbox_Grid_System {
    const VERSION = '0.1.0';
    const TEXT_DOMAIN = 'lucency';
    const BUILD_PATH = 'build/';
    const ASSETS_PATH = 'build/assets/';

    private static $instance = null;

    private function __construct() {
        $this->define_constants();
        $this->include_files();
        $this->init_hooks();
    }

    /**
     * Gets the singleton instance of the class.
     *
     * @return Lucency_Flexbox_Grid_System
     */
    public static function get_instance() {
        if (self::$instance === null) {
            self::$instance = new self();
        }
        return self::$instance;
    }

    /**
     * Defines plugin constants.
     */
    private function define_constants() {
        define('LUCENCY_PLUGIN_ROOT_PATH', plugin_dir_path(__FILE__));
        define('LUCENCY_PLUGIN_URL', plugin_dir_url(__FILE__));
        define('LUCENCY_ASSETS_PATH', LUCENCY_PLUGIN_ROOT_PATH . self::ASSETS_PATH);
        define('LUCENCY_ASSETS_URL', LUCENCY_PLUGIN_URL . self::ASSETS_PATH);
        define('LUCENCY_BLOCKS_PATH', LUCENCY_PLUGIN_ROOT_PATH . self::BUILD_PATH);
        
    }

    /**
     * Includes necessary files.
     */
    private function include_files() {
        require_once LUCENCY_PLUGIN_ROOT_PATH . 'includes/classes/class-lucency-assets-resolver.php';
    }

    /**
     * Initializes hooks.
     */
    private function init_hooks() {
        add_action('init', [$this, 'init']);
        add_filter('block_categories_all', [$this, 'block_category'], 10, 2);
        add_action('wp_enqueue_scripts', [$this, 'enqueue_styles']);
        add_action('enqueue_block_editor_assets', [$this, 'enqueue_styles']);
    }

    /**
     * Initializes the plugin by registering the Gutenberg blocks.
     */
    public function init() {
        $block_folders = array_filter(glob(LUCENCY_BLOCKS_PATH . '*'), 'is_dir');

        foreach ($block_folders as $folder) {
            register_block_type($folder);
        }
    }

    /**
     * Adds a custom block category for the Lucency Flexbox Grid System blocks.
     *
     * @param array $categories The existing block categories.
     * @return array The updated block categories.
     */
    public function block_category($categories) {
        $custom_category = [
            'slug'  => 'lucency',
            'title' => __('Lucency Flexbox Grid System', self::TEXT_DOMAIN),
            'icon'  => null,
        ];

        array_unshift($categories, $custom_category);
        return $categories;
    }

    /**
     * Enqueues the styles for the Lucency Flexbox Grid System.
     */
    public function enqueue_styles() {
        $resolver = new Lucency_AssetsResolver();
        $css_file = $resolver->get('main.css');

        wp_enqueue_style('lucency-flexbox-grid-system-styles', LUCENCY_ASSETS_URL . $css_file, [], self::VERSION);
    }
}

/**
 * Returns the singleton instance of the Lucency_Flexbox_Grid_System class.
 *
 * @return Lucency_Flexbox_Grid_System
 */
function lucency_flexbox_grid_system() {
    return Lucency_Flexbox_Grid_System::get_instance();
}

// Initialize the plugin
lucency_flexbox_grid_system();