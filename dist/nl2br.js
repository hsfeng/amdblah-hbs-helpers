!function(a){"use strict";"undefined"!=typeof module&&"undefined"!=typeof module.exports?module.exports=a(require("handlebars")):"function"==typeof define&&define.amd?define(["Handlebars"],a):a(Handlebars)}(function(a){"use strict";var b=function(b){b=a.Utils.escapeExpression(b);var c=String(b).replace(/([^>\r\n]?)(\r\n|\n\r|\r|\n)/g,"$1<br>$2");return new a.SafeString(c)};return a.registerHelper("nl2br",b),b});