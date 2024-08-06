<?php
/**
 * Autoload file for the Lucency Flexbox Grid System plugin.
 *
 * @package Lucency\FlexboxGridSystem
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

spl_autoload_register(
	function ( $classname ) {
		// Define the namespace prefix and base directory.
		$prefix = 'Lucency\\';

		// Check if the class uses the namespace prefix.
		if ( strpos( $classname, $prefix ) !== 0 ) {
			return;
		}

		// Remove the namespace prefix and convert class name to file path.
		$relative_class = substr( $classname, strlen( $prefix ) );
		$file           = LUCENCY_CLASSES_PATH . 'class-lucency-' . strtolower( str_replace( array( '\\', '_' ), '-', $relative_class ) ) . '.php';

		// Require the file if it exists.
		if ( file_exists( $file ) ) {
			require $file;
		}
	}
);
