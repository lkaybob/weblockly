
// textarea for html code
$htmlCode = $('#html');


$htmlCode.click(function () {
    var selectPosition =  $htmlCode.prop('selectionStart');
    var rawHtmlCode = $htmlCode.val();

    var codeEndAtSelectPosition = rawHtmlCode.substring(0,selectPosition);

    var currentFocusLines = codeEndAtSelectPosition.split('\n');
    var selectLine = rawHtmlCode.split('\n')[currentFocusLines.length - 1];

    var selectTag = {}

    var rawStr, match;
    var classList;

    match = /<[^/<]*>/.exec(selectLine);
    if (!match) {
        return null;
    }
    rawStr = match[0] || null;
    selectTag.rawStr = rawStr;

    match = /<((\w|\d|-)*)/g.exec(rawStr);
    if (match)
        selectTag.tagName = match[1] || null;

    match = /id="([^ "]+)"/g.exec(rawStr);
    if (match)
        selectTag.id = match[1] || null;

    match = /class="([^"]*)"/g.exec(rawStr);
    if (match) { 
        classListStr = match[1] || null;
        if (classListStr) {
            classList = classListStr.split(' '); 
        }
        else {
            classList = null;
        }
    }
    selectTag.classes = classList;

    console.log(selectTag);

});
