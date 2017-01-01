/*var blocklyArea = document.getElementById('blocklyArea');
var blocklyDiv = document.getElementById('blocklyDiv');
var workspace = Blockly.inject(blocklyDiv,
    {toolbox: document.getElementById('toolbox')});
var onresize = function(e) {
  // Compute the absolute coordinates and dimensions of blocklyArea.
  var element = blocklyArea;
  var x = 0;
  var y = 0;
  do {
    x += element.offsetLeft;
    y += element.offsetTop;
    element = element.offsetParent;
  } while (element);
  // Position blocklyDiv over blocklyArea.
  blocklyDiv.style.left = x + 'px';
  blocklyDiv.style.top = y + 'px';
  blocklyDiv.style.width = blocklyArea.offsetWidth + 'px';
  blocklyDiv.style.height = blocklyArea.offsetParent.offsetHeight + 'px';
};
window.addEventListener('resize', onresize, false);
onresize();
Blockly.svgResize(workspace);
*/
/////////////////////////
// resizeable
/////////////////////////
var blocklyDiv = document.getElementById('blocklyDiv');
var workspace = Blockly.inject(blocklyDiv,
    {toolbox: document.getElementById('toolbox')});
var editorRow = (document.getElementsByClassName("editor-row"))[0];
var scriptEditor = document.getElementsByClassName("script-editor");

var onResizeListener = function() {
    var newHeight = editorRow.clientHeight;
    var newWidth = editorRow.clientWidth;

    for (var i = 0; i < 5 && scriptEditor[i] != null; i++) {
        scriptEditor[i].style.width = (newWidth - 20) + 'px';
        scriptEditor[i].style.height = (newHeight - 20) + 'px';
    }

    workspace.resizeHandlerWrapper_[0][2]();
}

window.addEventListener('resize', onResizeListener, false);
window.onload = function() {
    setTimeout(onResizeListener, 1);
};




