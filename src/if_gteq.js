/*global Handlebars */
(function (factory) {
	'use strict';
	if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
		module.exports = factory(require('handlebars'));
    } else {
		if (typeof define === 'function' && define.amd) {
			// AMD. Register as named module.
			define(['Handlebars'], factory);
		} else {
			// Browser globals.
			factory(Handlebars);
		}
	}
}(function (Handlebars) {
	'use strict';
	/**
	 * If Greater Than or Equal To
	 * if_gteq this compare=that
	 */
	var result = function(context, options) {
		if (context >= options.hash.compare) {
			return options.fn(this);
		}
		return options.inverse(this);
	};

	Handlebars.registerHelper('if_gteq', result);

	return result;
}));