!function(a){"use strict";"undefined"!=typeof module&&"undefined"!=typeof module.exports?module.exports=a(require("handlebars")):"function"==typeof define&&define.amd?define(["hbs/handlebars"],a):a(Handlebars)}(function(a){"use strict";var b=function(a){return!!(a&&a.constructor&&a.call&&a.apply)},c=function(a,c){return b(c)?c(a[0]):a[0]};return a.registerHelper("head",c),c});