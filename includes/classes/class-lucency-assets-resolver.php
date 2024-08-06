<?php
namespace Lucency\Assets;

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * Class AssetsResolver
 *
 * Resolves asset paths based on a manifest file for the Lucency Flexbox Grid System plugin.
 */
class Resolver {

	public $hash = null;

	/**
	 * Constructor to initialize asset paths.
	 *
	 * @param bool $child Set to true if using a child theme.
	 */
	public function __construct() {
		$manifest = LUCENCY_ASSETS_PATH . 'assets-manifest.json';

		$this->hash = file_exists( $manifest )
			? json_decode( file_get_contents( $manifest ), true )
			: array();
	}

	/**
	 * Get the resolved path for an asset.
	 *
	 * @param string $asset The asset file name.
	 * @return string The resolved asset path.
	 */
	public function get( $asset ) {
		if ( array_key_exists( $asset, $this->hash ) ) {
			return $this->hash[ $asset ];
		}

		return $asset;
	}
}
