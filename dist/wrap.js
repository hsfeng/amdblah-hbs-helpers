!function(a){"use strict";"undefined"!=typeof module&&"undefined"!=typeof module.exports?module.exports=a(require("handlebars")):"function"==typeof define&&define.amd?define(["Handlebars"],a):a(Handlebars)}(function(a){"use strict";var b=function(a,b){var c,d={};d[b.hash.name]=a;for(c in b.hash)b.hash.hasOwnProperty(c)&&"name"!==c&&(d[c]=b.hash[c]);return b.fn(d)};return a.registerHelper("wrap",b),b});