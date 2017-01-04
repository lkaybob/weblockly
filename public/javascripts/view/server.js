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
    var newWidth = editorColumn.clientWidth - 30;

    nodeEditor.setSize(newWidth + 'px', newHeight + 'px');

    scriptEditor[0].style.width = newWidth + 'px';
    scriptEditor[0].style.height = newHeight + 'px';
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
    var headerCode
    = 'var app = require(\'app\');\n\n';
    var traierCode
    = '\napp.listen(3000, function () {\n'
    + 'console.log(\'App listening on port 3000!\\n\');\n'
    + '});\n'
    var code = Blockly.JavaScript.workspaceToCode(workspace);

    code = headerCode + code + traierCode;
    nodeEditor.setValue(code);
}

window.addEventListener('resize', onResizeListener);
window.onload = function () {
    var borderStyle = '1px solid black';
    var editor = document.getElementsByClassName('CodeMirror');
    codeMirrorInit();
    onResizeListener();

    scriptEditor[0].style.border = borderStyle;
    editor[0].style.border = borderStyle;
    workspace.addChangeListener(renderJSCode);
    renderJSCode();
};
