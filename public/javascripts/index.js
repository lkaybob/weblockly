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
Blockly.svgResize(workspace);*/

var workspace = Blockly.inject('blocklyDiv',
    {toolbox: document.getElementById('toolbox')
    });
function getCode(){
    var code = 'var app = require(\'app\')\n' +
        'var express = require(\'express\')\n\n';
    code += Blockly.JavaScript.workspaceToCode(workspace);
    code += '\napp.listen(3000, function () {\n' +
        'console.log(\'App listening on port 3000!\')\n' +
        '})\n';
    return code;

}
window.onload = function (){
    document.getElementById('codeBox').value = getCode();
};

workspace.addChangeListener(function () {
    document.getElementById('codeBox').value = getCode();
});