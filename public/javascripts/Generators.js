/**
 * Created by credtiger96 on 17. 1. 2.
 */
var generateCode = function () {
    WorkspaceManager.saveCurrnetState();

    //save currnet workspace
    var tmp = Blockly.Xml.workspaceToDom(workspace);

    workspace.clear();
    Blockly.Xml.domToWorkspace(WorkspaceManager.globalWorkSpace,workspace);

    var code = Blockly.JavaScript.workspaceToCode(workspace);

    for (var id in WorkspaceManager.idWorkspace){

        code += '\n';
        workspace.clear();
        Blockly.Xml.domToWorkspace(WorkspaceManager.idWorkspace[id]
            ,workspace);
        code += Blockly.JavaScript.workspaceToCode(workspace).replace('{{id}}', id);
        code += '\n';
    }

    //restore current workspace
    workspace.clear();
    Blockly.Xml.domToWorkspace(tmp,workspace);

    console.log(code);

    if (code.includes('{{id}}')){ // if event block exist in global
        alert('Global Mode does not support event block yet.');
        return null;
    }
    return code;
}


/////////
//Event
////////
Blockly.JavaScript['on_click'] = function(block) {
    var statements_code = Blockly.JavaScript.statementToCode(block, 'code');
    // TODO: Assemble JavaScript into code variable.
    var code = 'document.getElementById("{{id}}").onclick = function () {\n' +
            statements_code + '\n' +
            '}\n';
    return code;
};

/////////
//time
/////
Blockly.JavaScript['set_time_out'] = function(block) {
    var time = block.getFieldValue('time');
    var statements_code = Blockly.JavaScript.statementToCode(block, 'statement');
    // TODO: Assemble JavaScript into code variable.
    var code = 'setTimeout(function () {\n'+
            statements_code +
            '}, '+ time +');\n';

    return code;
};
Blockly.JavaScript['alert'] = function(block) {
    var text_alert_text = block.getFieldValue('alert_text');
    // TODO: Assemble JavaScript into code variable.
    var code = 'alert(\"'+text_alert_text+'\")\n';
    return code;
};