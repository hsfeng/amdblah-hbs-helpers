!function(a){"use strict";"undefined"!=typeof module&&"undefined"!=typeof module.exports?module.exports=a(require("handlebars")):"function"==typeof define&&define.amd?define(["Handlebars"],a):a(Handlebars)}(function(a){"use strict";var b=function(a){return!!(a&&a.constructor&&a.call&&a.apply)},c=function(a,c){if(b(c)){var d,e,f="";for(d=1,e=a.length;e>d;d+=1)f+=c(a[d]);return f}return a.slice(1)};return a.registerHelper("tail",c),c});