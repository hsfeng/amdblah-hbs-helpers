/*global Handlebars, moment */
(function (factory) {
	'use strict';
	if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
		module.exports = factory(require('handlebars'),require('moment'));
    } else {
		if (typeof define === 'function' && define.amd) {
			// AMD. Register as named module.
			define(['hbs/handlebars', 'moment'], factory);
		} else {
			// Browser globals.
			factory(Handlebars,moment);
		}
	}
}(function (Handlebars,moment) {
	'use strict';
	/* 
	 * format a datetime in milliseconds  using Moment.js
	 * http://momentjs.com/
	 * moment syntax example: moment(Date("2011-07-18T15:50:52")).format("MMMM YYYY")
	 * usage: 
	 *		display formatted datetime
	 *			{{dateFormat datetime format="MMMM YYYY" timezone=timezoneOffset}
	 *		display timetime from now 
	 *			{{dateFormat datetime fromNow=true timezone=timezoneOffset}}
	 *
	 *		pass local moment into helper in nodejs
	 *			{{dateFormat datetime format="MMMM YYYY" moment=momentObj timezone=timezoneOffset}
	 *			{{dateFormat datetime fromNow=true moment=momentObj timezone=timezoneOffset}}
	 *		reference the moment middleware.
	 * 
	 * timezoneOffset format: +00:00 +0000 -00:00 -0000
	 */
	var result = function(context, block) {
		var m,f = block.hash.format || 'MMM Do, YYYY';
		if(block.hash.moment !== undefined) {
			m = block.hash.moment.obj(context).locale(block.hash.moment.lang);
		}else{
			m = moment(context);
		}
		
		if(block.hash.timezone !== undefined){
			m.zone(block.hash.timezone);
		}
		
		if (m) {
			if(block.hash.fromNow){
				return m.fromNow();
			}
			return m.format(f);
		}
		return context;
		//  moment plugin not available. return data as is.
	};

	Handlebars.registerHelper('dateFormat', result);

	return result;

}));