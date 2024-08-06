<?php
/**
 * Asset Loader for the Lucency Flexbox Grid System plugin.
 *
 * This file contains the `Loader` class, which is responsible for managing the
 * enqueueing of stylesheets for the Lucency Flexbox Grid System plugin. The class
 * ensures that the necessary CSS files are properly loaded both on the front-end
 * and within the block editor. It utilizes the `Resolver` class to determine
 * the correct path to the stylesheet and integrates with WordPress's enqueueing system
 * to include these assets in the appropriate contexts.
 *
 * @package Lucency\Assets
 */

namespace Lucency\Assets;

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

/**
 * Class Loader
 *
 * Manages the enqueueing of styles and scripts for the Lucency Flexbox Grid System plugin.
 *
 * This class handles the registration and loading of plugin stylesheets into both
 * the front-end and block editor environments. It ensures that the necessary CSS files
 * are included in the WordPress pages where the plugin is active.
 */
class Loader {

	/**
	 * Initializes the Loader class.
	 *
	 * Sets up WordPress hooks to enqueue styles:
	 * - `wp_enqueue_scripts`: Enqueues styles for the front-end.
	 * - `enqueue_block_editor_assets`: Enqueues styles for the block editor.
	 */
	public function __construct() {
		add_action( 'wp_enqueue_scripts', array( $this, 'enqueue_styles' ) );
		add_action( 'enqueue_block_editor_assets', array( $this, 'enqueue_styles' ) );
	}

	/**
	 * Enqueues the plugin's stylesheets.
	 *
	 * Retrieves the path to the main stylesheet using the Resolver class and enqueues
	 * it for both the front-end and the block editor.
	 *
	 * @see Resolver::get() for resolving the path to the CSS file.
	 */
	public function enqueue_styles() {
		$resolver = new Resolver();
		$css_file = $resolver->get( 'main.css' );

		wp_enqueue_style(
			'wp-lucency-flexbox-grid-system-styles',
			LUCENCY_ASSETS_URL . $css_file,
			array(),
			LUCENCY_VERSION
		);
	}
}
