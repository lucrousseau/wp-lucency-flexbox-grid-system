<?php
namespace Lucency;

use Lucency\Blocks\Manager;
use Lucency\Blocks\Category;
use Lucency\Assets\Loader;

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

class Init {

	/**
	 * Initializes the BlocksManager class.
	 */
	public function __construct() {
		new Manager();
		new Category();
		new Loader();
	}
}
