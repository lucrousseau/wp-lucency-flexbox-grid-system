<?php
/**
 * Initialization file for the Lucency plugin.
 *
 * This file is responsible for initializing core components of the Lucency plugin,
 * including blocks management, block categories, and asset loading and more.
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
 */
class Init {
	/**
	 * Init constructor.
	 *
	 * Constructs the Init class and initializes the core components:
	 * - Blocks Manager: Manages the custom Gutenberg blocks.
	 * - Blocks Category: Defines and registers custom block categories.
	 * - Assets Loader: Handles the loading of plugin assets such as scripts and styles.
	 */
	public function __construct() {
		new Manager();
		new Category();
		new Loader();
	}
}
