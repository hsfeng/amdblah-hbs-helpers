!function(a){"use strict";"undefined"!=typeof module&&"undefined"!=typeof module.exports?module.exports=a(require("handlebars")):"function"==typeof define&&define.amd?define(["Handlebars"],a):a(Handlebars)}(function(a){"use strict";var b=function(a,b){return a>=b.hash.compare?b.inverse(this):b.fn(this)};return a.registerHelper("unless_gteq",b),b});