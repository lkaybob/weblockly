/**
 * @overviewfile: tasks when coder click HTML code written by coder if code line is valid (open tag)*/
let selectTag = {}
// textarea for html code

$(document).ready(function() {

    $htmlCode = $('div.editor-row.row-top');

    function getHTMLTag() {
        /**
         * this function is onclick listener that parse tags if valid
         * */

        // editor control codeMirror HTML code pane
        editor = $('.CodeMirror')[0].CodeMirror;

        var currentCursorLine = editor.getCursor().line;
        var currentLine = editor.getLine(currentCursorLine);

        var rawStr, match;
        var classList;

        // refresh code pane every click event
        // this is for indicating line that coder clicked if valid
        editor.refresh();

        // validating the line whether it has opening tag
        match = /<[^/<]*>/.exec(currentLine);
        if (!match) {
            // trigger event that change document to global mode
            $(document).trigger({
                type : 'ModeChange'
            });
            return;
        }


        // codeMirror's line number doms
        var linenumberList = $('.column-left .row-top .CodeMirror-linenumber.CodeMirror-gutter-elt');
        linenumberList[currentCursorLine+1].classList.add('selected-line-number');

        rawStr = match[0] || null;
        selectTag.rawStr = rawStr;

        // this regular expression find tag name
        match = /<((\w|\d|-)*)/g.exec(rawStr);
        if (match)
            selectTag.tagName = match[1] || null;
        else
            selectTag.tagName = null;

        // this regular expression find valid id property
        match = /(id\s*=\s*"([^ "']+)")|(id\s*=\s*'([^ "']+)')/g.exec(rawStr);
        if (match){
            if (match[2]) { 
                selectTag.id = match[2] || null;
            }
            else if (match[4]) { 
                selectTag.id = match[4] || null;
            }
            else {
                alert(match)

            }
        }
        else
            selectTag.id = null;

        // this regular expression find valid class property
        match = /class\s*=\s*("([^"']*)")|('([^"']*)')/g.exec(rawStr);
        if (match) { 
            // reason of two kinds of match is quotation. it determines " or '
            if (match[2]) { 
                classListStr = match[2] || null;
            }
            else if (match[4]) { 
                classListStr = match[4] || null;
            }
            else {
                alert(match)

            }

            // split classes
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

        if (selectTag){
            // trigger event that change document to id specific mode
            if (selectTag.id)
                $(document).trigger({
                    type : 'ModeChange',
                    tagId : selectTag.id
                });
            else
                // alert('There is no id in tag you selected.');
        }
        else {
            //trigger event that change document to global mode
            $(document).trigger({
                type : 'ModeChange'
            });
        }
    }

    // add click event listener
    $htmlCode.click(getHTMLTag);
});

