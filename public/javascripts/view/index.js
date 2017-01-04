/**
* /public/javascrpts/view/index.js
* @fileoverview Scripts for frontend code generation demo @ http://localhost:3000
*/
var blocklyDiv = document.getElementById('blocklyDiv');                 // Defines #blocklyDiv DOM for blockly workspace injection
var globalToolbox, idToolbox;                                           // XML for blockly workspace toolbox for Global Mode & ID DOM Mode

/**
 * Synchronously calls XML File for toolbox definition
 * Each toolbox definition would be in seperate variable*/
$.ajax({
    async : false,
    url : 'xml/toolbox/globalToolbox.xml',
    dataType : 'xml',
    success : function (xml) {
        var toolbox = (new XMLSerializer()).serializeToString(xml);
        globalToolbox = toolbox;
    }
});
$.ajax({
    url : 'xml/toolbox/idToolbox.xml',
    dataType : 'xml',
    success : function (xml) {
        var toolbox = (new XMLSerializer()).serializeToString(xml);
        idToolbox = toolbox;
    }
});

var workspace = Blockly.inject(blocklyDiv,                                  // Blockly workspace object for Weblockly
    {toolbox: globalToolbox});                                              // First defines with global mode toolbox
var editorRow = (document.getElementsByClassName("editor-row"))[0];         // .editor-row DOM for resizing
var scriptEditor = document.getElementsByClassName("script-editor");        // .script-editor DOM for resizing
var modeChangeReminder = document.getElementById('modeChangeReminder');     // DOM for indicating switched mode
var htmlEditor;                                                             // CodeMirror instance for HTML Editing
var cssEditor;                                                              // CodeMirror instance for CSS Editing

function onResizeListener() {
    /**
     * Calculates .editor-row DOM's height and width and sets its child component
     * (since it automatically resized on browser resize event)
     * Resizes CodeMirror instances, Blockly workspace, iframe (for rendering) component
     * to its parent, .editor-row DOM
     */
    var newHeight = editorRow.clientHeight - 10;
    var newWidth = editorRow.clientWidth - 20;

    for (var i = 0; i < 5 && scriptEditor[i] != null; i++) {
        scriptEditor[i].style.width = newWidth + 'px';
        scriptEditor[i].style.height = newHeight + 'px';
    }

    htmlEditor.setSize(newWidth  + 'px', newHeight + 'px');
    cssEditor.setSize(newWidth + 'px', newHeight + 'px');

    modeChangeReminder.style.left = (newWidth / 2 - 75) + 'px';
    modeChangeReminder.style.bottom = (newHeight / 2 - 75) + 'px';

    workspace.resizeHandlerWrapper_[0][2]();
}

function codeMirrorInit() {
    /**
     * Creates CodeMirror instances for HTML & CSS Editor.
     * Depends on /codemirror scripts.
     *
     */
    htmlEditor = CodeMirror.fromTextArea(scriptEditor[0], {
        mode: 'text/html',
        lineNumbers: true,
        matchBrackets: true,
        extraKeys: {"Shift-Ctrl" : 'autocomplete'},
        autoCloseTags: true
    });
    cssEditor = CodeMirror.fromTextArea(scriptEditor[2], {
        mode: 'text/css',
        lineNumbers: true,
        extraKeys: {"Shift-Ctrl" : 'autocomplete'},
        autoCloseBrackets: false
    });

    htmlEditor.on('keyup', function (){
        render(false);
    });
    htmlEditor.on('keyup', function (){
        render(false);
    });
}

var isReminderShow = false;                         // Boolean varialbe that indicates where reminder is on
var reminderTimer;
function alertModeChange(a) {
    /**
     * Shows in whick mode Blockly workspace is in (Global, ID DOM, Class DOM).
     * Handles exception when reminder is already shown
     * (When shown, it only changes text of reminder and resets timer) */
    var reminder = $('#modeChangeReminder');
    if (isReminderShow){
        reminder.text(a);
        clearTimeout(reminderTimer);
        reminderTimer = setTimeout(function () {
            reminder.fadeOut();
            isReminderShow = false;
        }, 1000);
    }
    else
    {
        reminder.text(a);
        reminder.toggle();
        isReminderShow = true;
        reminderTimer = setTimeout(function () {
            reminder.fadeOut();
            isReminderShow = false;
        }, 1000);
    }
}

/**
 * Adds event listener for refreshed DOM size when browser resized*/
window.addEventListener('resize', onResizeListener, false);

window.onload = function() {
    /**
     * Intial settings when page is loaded.
     * First resizes with onResizeListener.
     * Then sets border for each editor component.
     * Also initiates Workspace Manager for multiple editing mode.
     * */
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

/**
 * Adds event listener to .play-button DOM (Play Button)
 * for rendering current state (HTML, CSS, JS generated from Blockly workspace) */
$('.play-button').click(function () {
    render(true);// render with js
});