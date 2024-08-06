<?php
/**
 * Handles the registration and management of Gutenberg blocks for the Lucency Flexbox Grid System plugin.
 *
 * This file defines the `Blocks_Manager` class, which is responsible for registering
 * and managing custom Gutenberg blocks provided by the Lucency Flexbox Grid System plugin.
 * The class hooks into the WordPress `init` action to register each block type found
 * in the plugin's block directory.
 *
 * @package Lucency\Blocks
 */

namespace Lucency\Blocks;

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

/**
 * Class Blocks_Manager
 *
 * Manages the registration and handling of Gutenberg blocks for the Lucency Flexbox Grid System plugin.
 *
 * This class is responsible for registering all custom Gutenberg blocks provided by the
 * Lucency Flexbox Grid System plugin. It initializes the blocks by hooking into the
 * WordPress `init` action and registering each block type found in the plugin's block directory.
 *
 * @package Lucency\Blocks
 */
class Manager {

	/**
	 * Constructs the Blocks_Manager class and hooks into the WordPress `init` action.
	 *
	 * Registers the `register_blocks` method to the `init` action hook. This method is called
	 * when WordPress initializes, allowing the class to register all custom Gutenberg blocks.
	 */
	public function __construct() {
		add_action( 'init', array( $this, 'register_blocks' ) );
	}

	/**
	 * Registers all custom Gutenberg blocks provided by the plugin.
	 *
	 * This method scans the block directories within the plugin, registers each block type
	 * using `register_block_type`, and makes them available in the block editor. The blocks
	 * are registered based on their folder structure and files.
	 *
	 * @return void
	 */
	public function register_blocks() {
		// Get all directories in the block directory path.
		$block_folders = array_filter( glob( LUCENCY_BLOCKS_PATH . '*' ), 'is_dir' );

		// Register each block type found in the block directories.
		foreach ( $block_folders as $folder ) {
			register_block_type( $folder );
		}
	}
}
