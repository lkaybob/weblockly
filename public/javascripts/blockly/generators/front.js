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

Blockly.JavaScript['on_load'] = function(block) {
    var statements_code = Blockly.JavaScript.statementToCode(block, 'code');
    // TODO: Assemble JavaScript into code variable.
    var code = 'window.onload = function () {\n' +
        statements_code + '\n' +
        '}\n';
    return code;
};
Blockly.JavaScript['on_mouse_over'] = function(block) {
    var statements_code = Blockly.JavaScript.statementToCode(block, 'code');
    // TODO: Assemble JavaScript into code variable.
    var code = 'document.getElementById("{{id}}").onmouseover = function () {\n' +
        statements_code + '\n' +
        '}\n';
    return code;
};

Blockly.JavaScript['on_mouse_out'] = function(block) {
    var statements_code = Blockly.JavaScript.statementToCode(block, 'code');
    // TODO: Assemble JavaScript into code variable.
    var code = 'document.getElementById("{{id}}").onmouseout = function () {\n' +
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

/////////
//GET DOM
/////////

Blockly.JavaScript['get_dom'] = function(block) {
    /**
     * code generating of get_dom block
     * get dom's id by filed input
     * get all statement codes and split code line by line
     *
     * save return value of getElementById into variable
     * ''concat' all statement's code to variable that has dom object by joining with dot (.)
     */
    var raw_id = block.getFieldValue('ID')
        var text_id = '$id_' + raw_id;
    var statements_listener = Blockly.JavaScript.statementToCode(block, 'LISTENER');
    var statements = statements_listener.split('\n');
    statements_listener = '';
    statements.forEach(function (line) {
        line = line.trim()
            if(line == '') return;
        statements_listener += text_id + '.' + line + '\n'; 
    });
    // TODO: Assemble JavaScript into code variable.
    var code = text_id + ' = document.getElementById(\'' +
            raw_id + '\');\n' +
        statements_listener;
    // console.log(code)
    return code;

};


////////////
//DOM MODIFY
////////////


Blockly.JavaScript['change_inner_text'] = function(block) {
    /**
     * code generating of change_inner_text block
     * 
     * change innerHTML to coder's input value
     *
     * */
    var value_name = Blockly.JavaScript.valueToCode(block, 'NAME', Blockly.JavaScript.ORDER_ATOMIC);
    // TODO: Assemble JavaScript into code variable.
    var code = 'innerHTML = ' + value_name  + ';\n';
    return code;

};

Blockly.JavaScript['change_style'] = function(block) {
    /**
     * code generating of change_style block
     *
     * get style property by dropdown value
     * get value of style property by coder's input value
     *
     * combination all value to make : dom.style.property = new value
     * */
    var dropdown_style = block.getFieldValue('STYLE');
    var value_style_value = Blockly.JavaScript.valueToCode(block, 'STYLE_VALUE', Blockly.JavaScript.ORDER_ATOMIC);
    // TODO: Assemble JavaScript into code variable.
    var code = 'style.' + dropdown_style + ' = '+ value_style_value + ';\n';
    return code;

};
