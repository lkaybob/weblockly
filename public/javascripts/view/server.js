/**
 * Created by lkaybob on 17. 1. 4.
 */
var blocklyDiv = document.getElementById('blocklyDiv');
var serverToolbox;

$.ajax({
    async: false,
    url: 'xml/toolbox/serverToolbox.xml',
    dataType: 'xml',
    success: function (xml) {
        serverToolbox = (new XMLSerializer()).serializeToString(xml);
    }
});

var workspace = Blockly.inject(blocklyDiv,
    {toolbox: serverToolbox});
// TODO : Maybe Generated Code in CodeMirror??
var scriptEditor = document.getElementsByClassName('script-editor');
var editorColumn = document.getElementsByClassName('editor-column')[0];
var nodeEditor;

function onResizeListener() {
    var newHeight = editorColumn.clientHeight - 10;
    var newWidth = editorColumn.clientWidth - 20;

    for(var i = 0; i < 2; i++) {
        scriptEditor[i].style.width = newWidth + 'px';
        scriptEditor[i].style.height = newHeight + 'px';
    }

    workspace.resizeHandlerWrapper_[0][2]();
}

function codeMirrorInit() {
    nodeEditor = CodeMirror.fromTextArea(scriptEditor[1], {
        mode: 'javascript',
        lineNumbers: true,
        readOnly: true
    });
}

function renderJSCode() {
    var code = Blockly.JavaScript.workspaceToCode(workspace);
    nodeEditor.setValue(code);
}

window.addEventListener('resize', onResizeListener);
window.onload = function () {
    var borderStyle = '1px solid black';
    codeMirrorInit();
    onResizeListener();
    for(var i = 0; i < scriptEditor.length; i++)
        scriptEditor[i].style.border = borderStyle;
    workspace.addChangeListener(renderJSCode);
};
