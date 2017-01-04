/**
 * Created by credtiger96 on 17. 1. 1.
 */

// Base template to be injected to iframe
var base_tpl =
    "<!doctype html>\n" +
    "<html>\n\t" +
    "<head>\n\t\t" +
    "<meta charset=\"utf-8\">\n\t\t" +
    "<title>Test</title>\n\n\t\t\n\t" +
    "</head>\n\t" +
    "<body>\n\t\n\t" +
    "</body>\n" +
    "</html>";
var jsCodeCache = '';

/*
if js is true, generate js code from workspace
else take jsCodeCache.
*/
var prepareSource = function(js) {
    var html = htmlEditor.getValue(),
        css = cssEditor.getValue(),
        javascript;
    if (js) {
        jsCodeCache = generateCode(); // Generator.js 
    }
    javascript = jsCodeCache;
    src = '';

    // HTML
    src = base_tpl.replace('</body>', html + '</body>');

    // CSS
    css = '<style>' + css + '</style>';
    src = src.replace('</head>', css + '</head>');

    // Javascript
    javascript = '<script>' + javascript + '</script>';
    src = src.replace('</body>', javascript + '</body>');

    return src;
};

// if js is false, does not generate(and not update ) js code
var render = function(js) {
    var source = prepareSource(js);
    var iframe = document.querySelector('#rendered'),
        iframe_doc = iframe.contentDocument;

    iframe_doc.open();
    iframe_doc.write(source);
    iframe_doc.close();
};
