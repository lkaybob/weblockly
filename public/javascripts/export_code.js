/**
 * Name: export_code.js
 *
 * Author: dogfooter219@gmail.com
 * Purpose: add export code button for user can deploy there code
 *
 */


// html button dom for emit event that sends code to server
var exportButton = $('button#export-button');

// [Variable] URL path that server get http request
var url = "/export"

// [Variable] CDN URL to get code 
var cdnPath = location.hostname + ':' + location.port + '/cdn';


// add onclick listner for send whole code to server
exportButton.click(function () {

    console.log('hello')

    // whole code that user made
    htmlCode = htmlEditor.getValue();
    cssCode = cssEditor.getValue();
    jsCode = generateCode();


    /**
     *
     * Ajax to send whole code that user made
     *
     * Method: POST
     * 
     * Parameter: Obejct { HTML code: htmlCode, CSS code: cssCode, Javascript code: jsCode }
     *
     * Return: Object { CDN ID URL: cdnIdUrl, ...  }
     *
     * Success-Callback: Show CDN URL
     *
     */
    // post ajax promise
    var postPromise = $.post(url, {html: htmlCode, css: cssCode, js: jsCode});

    postPromise.done(function (data) {

        $.each(data.cdnUrl, function (index, value) {
            console.log(cdnPath + value);
        })
    });


});

