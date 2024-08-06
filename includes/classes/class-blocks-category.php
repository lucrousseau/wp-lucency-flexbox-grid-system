<?php
/**
 * Custom Block Category for the Lucency Flexbox Grid System plugin.
 *
 * This file contains the `Category` class, which is responsible for managing
 * and adding a custom block category in the WordPress block editor. The custom
 * category is used to group blocks related to the Lucency Flexbox Grid System,
 * making it easier for users to find and use the plugin's blocks in the block editor.
 *
 * @package Lucency\Blocks
 */

namespace Lucency\Blocks;

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

/**
 * Class Category
 *
 * Manages the custom block category for the Lucency Flexbox Grid System plugin.
 *
 * This class hooks into the `block_categories_all` filter to add a custom category
 * for the plugin's blocks. The custom category helps organize and display the
 * blocks in the WordPress block editor.
 */
class Category {

	/**
	 * Initializes the Category class.
	 *
	 * Registers the `add_custom_category` method to the `block_categories_all` filter,
	 * which is used to modify the list of block categories in the block editor.
	 */
	public function __construct() {
		add_filter( 'block_categories_all', array( $this, 'add_custom_category' ), 10, 2 );
	}

	/**
	 * Adds a custom block category to the list of block categories.
	 *
	 * This method creates a new block category with the slug `lucency` and the title
	 * `Lucency Flexbox Grid System`. It is added at the beginning of the categories array,
	 * making it the first category in the block editor.
	 *
	 * @param array $categories Existing block categories.
	 * @return array Modified array of block categories with the custom category added.
	 */
	public function add_custom_category( $categories ) {
		$custom_category = array(
			'slug'  => 'lucency',
			'title' => __( 'Lucency Flexbox Grid System', 'lucency' ),
			'icon'  => null,
		);

		array_unshift( $categories, $custom_category );
		return $categories;
	}
}
