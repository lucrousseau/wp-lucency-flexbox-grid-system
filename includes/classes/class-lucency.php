<?php
namespace Lucency;

class Init {

	/**
	 * Initializes the BlocksManager class.
	 */
	public function __construct() {
		new \Lucency\Blocks\Manager();
		new \Lucency\Blocks\Category();
		new \Lucency\Assets\Loader();
	}
}
