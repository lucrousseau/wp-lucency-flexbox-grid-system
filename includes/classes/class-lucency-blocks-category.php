<?php
namespace Lucency\Blocks;

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * Class BlockCategory
 *
 * Manages the custom block category for the Lucency Flexbox Grid System plugin.
 */
class Category {

	/**
	 * Initializes the BlockCategory class.
	 */
	public function __construct() {
		add_filter( 'block_categories_all', array( $this, 'add_custom_category' ), 10, 2 );
	}

	/**
	 * Adds a custom block category.
	 *
	 * @param array  $categories Existing categories.
	 * @param object $post Post object.
	 * @return array Modified categories.
	 */
	public function add_custom_category( $categories, $post ) {
		$custom_category = array(
			'slug'  => 'lucency',
			'title' => __( 'Lucency Flexbox Grid System', 'lucency' ),
			'icon'  => null,
		);

		array_unshift( $categories, $custom_category );
		return $categories;
	}
}
