!function(a){"use strict";"undefined"!=typeof module&&"undefined"!=typeof module.exports?module.exports=a(require("handlebars")):"function"==typeof define&&define.amd?define(["hbs/handlebars","i18next"],a):a(Handlebars,i18n)}(function(a,b){"use strict";var c=function(c,d){d.hash.i18next&&(b=d.hash.i18next);var e,f=b.functions.extend(d.hash,c);return d.fn&&(f.defaultValue=d.fn(c)),e=c?b.t(String(c),f):"[no key specified]",new a.SafeString(e)};return a.registerHelper("i18n_tr",c),c});