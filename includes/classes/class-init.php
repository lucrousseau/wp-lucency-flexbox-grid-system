<?php
/**
 * Initialization file for the Lucency plugin.
 *
 * This file is responsible for initializing core components of the Lucency plugin,
 * including block management, block categories, and asset loading, among other features.
 *
 * @package Lucency
 */

namespace Lucency;

use Lucency\Blocks\Manager;
use Lucency\Blocks\Category;
use Lucency\Assets\Loader;

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

/**
 * Class Init
 *
 * Handles the initialization of essential components for the Lucency plugin.
 * This includes setting up the Blocks Manager, Blocks Category, and Assets Loader.
 *
 * @package Lucency
 */
class Init {
	/**
	 * Init constructor.
	 *
	 * Constructs the Init class and hooks the initialization method to the 'plugins_loaded' action.
	 * This ensures that core components of the plugin are properly initialized after plugins are loaded.
	 */
	public function __construct() {
		add_action( 'plugins_loaded', array( $this, 'initialize_plugin' ) );
	}

	/**
	 * Initializes core components of the Lucency plugin.
	 *
	 * This method is hooked to the 'plugins_loaded' action and is responsible for creating instances
	 * of the Blocks Manager, Blocks Category, and Assets Loader classes. These components manage
	 * custom Gutenberg blocks, register custom block categories, and handle the loading of plugin assets.
	 */
	public function initialize_plugin() {
		new Manager();
		new Category();
		new Loader();
	}
}
