/////////////////////////
// resizeable
/////////////////////////
var blocklyDiv = document.getElementById('blocklyDiv');
var workspace = Blockly.inject(blocklyDiv,
    {toolbox: document.getElementById('toolbox')});
var editorRow = (document.getElementsByClassName("editor-row"))[0];
var scriptEditor = document.getElementsByClassName("script-editor");
var htmlEditor;
var cssEditor;

var onResizeListener = function() {
    var newHeight = editorRow.clientHeight - 10;
    var newWidth = editorRow.clientWidth - 20;

    for (var i = 0; i < 5 && scriptEditor[i] != null; i++) {
        scriptEditor[i].style.width = newWidth + 'px';
        scriptEditor[i].style.height = newHeight + 'px';
    }

    var workspaceTab = document.getElementById('tabGroup');

    workspaceTab.style.width = newWidth + 'px';
    blocklyDiv.style.height = (newHeight - 20) + 'px';

    htmlEditor.setSize(newWidth  + 'px', newHeight + 'px');
    cssEditor.setSize(newWidth + 'px', newHeight + 'px');

    workspace.resizeHandlerWrapper_[0][2]();
};

var codeMirrorInit = function() {
    htmlEditor = CodeMirror.fromTextArea(scriptEditor[0], {
        mode: 'text/html',
        lineNumbers: true,
        matchBrackets: true
    });
    cssEditor = CodeMirror.fromTextArea(scriptEditor[2], {
        mode: 'text/css',
        lineNumbers: true
    });
};

window.addEventListener('resize', onResizeListener, false);
window.onload = function() {
    var borderStyle = '1px solid black';
    codeMirrorInit();
    setTimeout(onResizeListener, 1);
    editors = document.getElementsByClassName('CodeMirror');
    editors[0].style.border = borderStyle;
    editors[1].style.border = borderStyle;
    scriptEditor[1].style.border = borderStyle;
    scriptEditor[3].style.border = borderStyle;
    WorkspaceManager.init();
};

$('.play-button').click(function () {
//    alert(Blockly.JavaScript.workspaceToCode(workspace));
    render();
});

$('#btnGlobal').click(function (){
    WorkspaceManager.changeToGlobalMode();
});

$('#btnId').click(function (){
    WorkspaceManager.changeToIdMode();
});




