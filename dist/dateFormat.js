!function(a){"use strict";"undefined"!=typeof module&&"undefined"!=typeof module.exports?module.exports=a(require("handlebars"),require("moment")):"function"==typeof define&&define.amd?define(["hbs/handlebars","moment"],a):a(Handlebars,moment)}(function(a,b){"use strict";var c=function(a,c){var d,e=c.hash.format||"MMM Do, YYYY";return d=void 0!==c.hash.moment?c.hash.moment.obj(a).lang(c.hash.moment.lang):b(a),void 0!==c.hash.timezone&&d.zone(c.hash.timezone),d?c.hash.fromNow?d.fromNow():d.format(e):a};return a.registerHelper("dateFormat",c),c});