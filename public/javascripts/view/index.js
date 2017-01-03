/////////////////////////
// resizeable
/////////////////////////
var blocklyDiv = document.getElementById('blocklyDiv');
var workspace = Blockly.inject(blocklyDiv,
    {toolbox: document.getElementById('toolbox')});
var editorRow = (document.getElementsByClassName("editor-row"))[0];
var scriptEditor = document.getElementsByClassName("script-editor");
var workspaceTab = document.getElementById('tabGroup');
var modeChangeReminder = document.getElementById('modeChangeReminder');
var htmlEditor;
var cssEditor;

function onResizeListener() {
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
    htmlEditor = CodeMirror.fromTextArea(scriptEditor[0], {
        mode: 'text/html',
        lineNumbers: true,
        matchBrackets: true
    });
    cssEditor = CodeMirror.fromTextArea(scriptEditor[2], {
        mode: 'text/css',
        lineNumbers: true
    });
}

var isReminderShow = false;
var reminderTimer;
function alertModeChange(a) {
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
    render(true);// render with js
});
/*
$('#btnGlobal').click(function (){
    WorkspaceManager.changeToGlobalMode();
});

$('#btnId').click(function (){
    WorkspaceManager.changeToIdMode();
});




*/