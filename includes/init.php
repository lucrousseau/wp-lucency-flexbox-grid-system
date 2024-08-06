<?php
/**
 * Initializes the Lucency Flexbox Grid System plugin.
 *
 * This file is responsible for bootstrapping the Lucency Flexbox Grid System plugin
 * by creating an instance of the main initialization class. It ensures that the plugin
 * is properly set up and ready to handle functionality such as custom blocks, assets,
 * and other core features.
 *
 * @package Lucency
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

// Instantiate the main initialization class for the plugin.
new \Lucency\Init();
