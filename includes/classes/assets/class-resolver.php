<?php
/**
 * Asset Resolver for the Lucency Flexbox Grid System plugin.
 *
 * This file contains the `Resolver` class, which is responsible for resolving
 * asset paths based on a manifest file. The class reads from a JSON manifest
 * to determine the correct path for assets, allowing for versioning and cache-busting
 * of stylesheets and scripts used by the Lucency Flexbox Grid System plugin.
 *
 * @package Lucency\Assets
 */

namespace Lucency\Assets;

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

/**
 * Class Resolver
 *
 * Resolves asset paths based on a manifest file for the Lucency Flexbox Grid System plugin.
 *
 * This class reads asset paths from a JSON manifest file to provide the correct
 * paths for assets. It is designed to handle versioning and cache-busting by
 * ensuring that the most current versions of assets are used.
 */
class Resolver {
	/**
	 * The hash array for asset paths.
	 *
	 * @var array|null
	 */
	public $hash = null;

	/**
	 * Initializes the Resolver class and loads the asset manifest.
	 *
	 * Reads the asset manifest file located at `LUCENCY_ASSETS_PATH . 'assets-manifest.json'`
	 * to populate the asset paths. If the manifest file is not found, an empty array is used.
	 */
	public function __construct() {
		$manifest = LUCENCY_ASSETS_PATH . 'assets-manifest.json';

		$this->hash = file_exists( $manifest )
			? json_decode( file_get_contents( $manifest ), true )
			: array();
	}

	/**
	 * Retrieves the resolved path for a specified asset.
	 *
	 * Looks up the asset path in the loaded manifest file. If the asset is found,
	 * its path is returned. If not found, the original asset name is returned.
	 *
	 * @param string $asset The asset file name to resolve.
	 * @return string The resolved asset path if found, otherwise the original asset name.
	 */
	public function get( $asset ) {
		if ( array_key_exists( $asset, $this->hash ) ) {
			return $this->hash[ $asset ];
		}

		return $asset;
	}
}
