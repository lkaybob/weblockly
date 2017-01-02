
// textarea for html code
$htmlCode = $('#html');


$htmlCode.click(function () {
    var selectPosition =  $htmlCode.prop('selectionStart');
    var rawHtmlCode = $htmlCode.val();

    var codeEndAtSelectPosition = rawHtmlCode.substring(0,selectPosition);

    var currentFocusLines = codeEndAtSelectPosition.split('\n');
    var selectLine = rawHtmlCode.split('\n')[currentFocusLines.length - 1];

    var selectTag = {}

    var rawStr = selectLine.match(/<[^/<]*>/)[0];
    selectTag.rawStr = rawStr;
    selectTag.tagName = /<((\w|\d|-)*)/g.exec(rawStr)[1] || null;
    selectTag.id = /id="([^ "]+)"/g.exec(rawStr)[1] || null;
    classListStr = /class="([^"]*)"/g.exec(rawStr)[1] || null;
    var classList;
    if (classListStr) {
       classList = classListStr.split(' '); 
    }
    selectTag.classes = classList;

   

    console.log(selectTag);

});
