/**
 * Created by lkaybob on 17. 1. 4.
 * /public/views/server.js
 * @fileOverview Scripts for Backend code generation demo
 * (currently generates Node.js simple server script)
 * @ http://weblockly.lkaybob.pe.kr/server
 */

var blocklyDiv = document.getElementById('blocklyDiv');     // DOM Object for injecting Blockly workspace
var serverToolbox;                                          // XML for blockly workspace for server side conde generation

/**
 * Synchronously calls XML File for toolbox definition
 * Toolbox definition would be in serverToolbox variable*/
$.ajax({
    async: false,
    url: 'xml/toolbox/serverToolbox.xml',
    dataType: 'xml',
    success: function (xml) {
        serverToolbox = (new XMLSerializer()).serializeToString(xml);
    }
});

var workspace = Blockly.inject(blocklyDiv,                              // Block workspace object for Weblockly
    {toolbox: serverToolbox});                                          // Defines workspace with serverToolbox.xml
var scriptEditor = document.getElementsByClassName('script-editor');    // .script-editor DOMs for resizing
var editorColumn = document.getElementsByClassName('editor-column')[0]; // .editor-column DOM for resizing
var nodeEditor;                                                         // CodeMirror instance to show generated code

function onResizeListener() {
    /**
     * Calculates .editor-column DOM's height and width and sets its child component
     * (since it automatically resized on browser resize event)
     * Resizes CodeMirror instances, Blockly workspace
     * to its parent (.editor-row DOM)
     */
    var newHeight = editorColumn.clientHeight - 10;
    var newWidth = editorColumn.clientWidth - 30;

    nodeEditor.setSize(newWidth + 'px', newHeight + 'px');

    scriptEditor[0].style.width = newWidth + 'px';
    scriptEditor[0].style.height = newHeight + 'px';
    workspace.resizeHandlerWrapper_[0][2]();
}

function codeMirrorInit() {
    /**
     * Creates CodeMirror instance to show generated code
     * from Blockly workspace
     * */
    nodeEditor = CodeMirror.fromTextArea(scriptEditor[1], {
        mode: 'javascript',
        lineNumbers: true,
        readOnly: true
    });
}

function renderJSCode() {
    /**
     * Render Node.js code generated from Blockly workspce
     * Invoked by Blockly instance's event listener
     * */

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

/**
 * Adds event listener for refreshed DOM size when browser resized
 * */

window.addEventListener('resize', onResizeListener);
window.onload = function () {
    /**
     * Intial settings when page is loaded.
     * First resizes with onResizeListener.
     * Then sets border for each editor component.
     * Then attaches event listener to apply changes on Blockly workspace
     * to generated Node.js code.
     * */
    var borderStyle = '1px solid black';
    var editor = document.getElementsByClassName('CodeMirror');
    codeMirrorInit();
    onResizeListener();

    scriptEditor[0].style.border = borderStyle;
    editor[0].style.border = borderStyle;
    workspace.addChangeListener(renderJSCode);
    renderJSCode();
};
