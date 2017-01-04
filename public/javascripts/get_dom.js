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

        // 매 클릭 때 마다 리프레쉬 해준다
        editor.refresh();

        match = /<[^/<]*>/.exec(currentLine);
        if (!match) {
            //console.log(currentCursorLine + 'fail');
            $(document).trigger({
                type : 'ModeChange'
            });
            return;
        }


        var linenumberList = $('.column-left .row-top .CodeMirror-linenumber.CodeMirror-gutter-elt');
        linenumberList[currentCursorLine+1].classList.add('selected-line-number');

        rawStr = match[0] || null;
        selectTag.rawStr = rawStr;

        match = /<((\w|\d|-)*)/g.exec(rawStr);
        if (match)
            selectTag.tagName = match[1] || null;
        else
            selectTag.tagName = null;

        match = /(id="([^ "']+)")|(id='([^ "']+)')/g.exec(rawStr);
        if (match){
            if (match[2]) { 
                selectTag.id = match[2] || null;
            }
            else if (match[4]) { 
                selectTag.id = match[4] || null;
            }
            else {
                console.log(match);
                alert(match)

            }
        }
        else
            selectTag.id = null;

        match = /class=("([^"']*)")|('([^"']*)')/g.exec(rawStr);
        if (match) { 
            if (match[2]) { 
                classListStr = match[2] || null;
            }
            else if (match[4]) { 
                classListStr = match[4] || null;
            }
            else {
                console.log(match);
                alert(match)

            }

            if (classListStr) {
                classList = classListStr.split(' '); 
            }
            else {
                classList = null;
            }
        }
        else {
            classList = null;
        }
        selectTag.classes = classList;
        //console.log(selectTag);

        //alert(selectTag);
        if (selectTag){
            // trigger event that change document to id specific mode
            if (selectTag.id)
                $(document).trigger({
                type : 'ModeChange',
                tagId : selectTag.id
                });
            else
                alert('There is no id in tag you selected.');
        }
        else {
            //trigger event that change document to global mode
            $(document).trigger({
                type : 'ModeChange'
            });
        }
    }
    $htmlCode.click(getHTMLTag);
});

