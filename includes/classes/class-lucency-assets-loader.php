<?php
namespace Lucency\Assets;

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * Class AssetsLoader
 *
 * Handles the enqueueing of plugin styles and scripts.
 */
class Loader {

	/**
	 * Initializes the AssetsLoader class.
	 */
	public function __construct() {
		add_action( 'wp_enqueue_scripts', array( $this, 'enqueue_styles' ) );
		add_action( 'enqueue_block_editor_assets', array( $this, 'enqueue_styles' ) );
	}

	/**
	 * Enqueues the plugin's styles.
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
