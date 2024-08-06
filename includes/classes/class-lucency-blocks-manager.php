<?php
namespace Lucency\Blocks;

/**
 * Class BlocksManager
 *
 * Handles the registration and management of Gutenberg blocks for the Lucency Flexbox Grid System plugin.
 */
class Manager {

	/**
	 * Initializes the BlocksManager class.
	 */
	public function __construct() {
		add_action( 'init', array( $this, 'register_blocks' ) );
	}

	/**
	 * Registers Gutenberg blocks.
	 */
	public function register_blocks() {
		$block_folders = array_filter( glob( LUCENCY_BLOCKS_PATH . '*' ), 'is_dir' );

		foreach ( $block_folders as $folder ) {
			register_block_type( $folder );
		}
	}
}
