<?php
/**
 * Autoloads PHP classes for the Lucency Flexbox Grid System plugin.
 *
 * This file sets up an autoloader for the Lucency Flexbox Grid System plugin to
 * automatically include class files based on the class name and namespace.
 * The autoloader follows the PSR-4 standard for class file organization.
 *
 * @package Lucency
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

/**
 * Registers an autoload function for the Lucency Flexbox Grid System plugin.
 *
 * The autoloader function is responsible for:
 * - Checking if the class name uses the Lucency namespace prefix.
 * - Removing the namespace prefix and converting the class name to a file path.
 * - Requiring the class file if it exists in the predefined classes directory.
 *
 * The class files are expected to be named using the format `class-{namespace}-{classname}.php`
 * and located in the directory specified by the `LUCENCY_CLASSES_PATH` constant.
 */
spl_autoload_register(
	function ( string $classname ) {
		// Define the namespace prefix and base directory.
		$prefix   = 'Lucency\\';
		$base_dir = LUCENCY_CLASSES_PATH;

		// Check if the class uses the namespace prefix.
		if ( ! str_starts_with( $classname, $prefix ) ) {
			return; // Skip loading if the class does not use the expected prefix.
		}

		// Remove the namespace prefix and convert the class name to a file path.
		$relative_class = substr( $classname, strlen( $prefix ) );
		$file_path      = $base_dir . strtolower(
			str_replace( array( '\\', '_' ), array( '/', '-' ), $relative_class )
		) . '.php';

		// Generate the final file path by extracting the last segment and appending it.
		$file_path = preg_replace(
			'/\/[^\/]+$/',
			'/class-' . basename( $file_path ),
			$file_path
		);

		// Require the file if it exists.
		if ( file_exists( $file_path ) ) {
			require $file_path;
		}
	}
);
