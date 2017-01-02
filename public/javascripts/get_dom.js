let selectTag = {}
// textarea for html code

$(document).ready(function() {

    $htmlCode = $('div.editor-row.row-top');

    function getHTMLTag() {
        editor = $('.CodeMirror')[0].CodeMirror;

        var currentCursorLine = editor.getCursor().line;
        var currentLine = editor.getLine(currentCursorLine);

        var rawStr, match;
        var classList;

        match = /<[^/<]*>/.exec(currentLine);
        if (!match) {
            console.log(currentCursorLine + 'fail')
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


    }

    $htmlCode.click(getHTMLTag);
});
