/**
 * Just Write jQuery plugin
 *
 * @package Just Write
 * @version 0.1
 * @author Mikita Stankiewicz
 */

;( function( $, window, document, undefined ) {
	'use strict';
	
	/**
	 * Constructor
	 *
	 * @param object selector
	 */
	var JustWrite = function( selector ) {
		this.init( selector );
	};
	
	/**
	 * Prototype
	 */
	JustWrite.prototype = {
		area: null,
		selection: null,
		
		/**
		 * Initialize
		 */
		init: function() {},
	};
	
	/**
	 * jQuery wrapper
	 */
	$.fn.justWrite = function() {
		new JustWrite( this );
	};
	
} )( jQuery, window, document );