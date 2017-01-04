/**
 * Created by lkaybob on 17. 1. 4.
 */
Blockly.JavaScript['http_get'] = function(block){
    var text_get_url = block.getFieldValue('get_url');
    var statements_get_method = Blockly.JavaScript.statementToCode(block, 'get_method');
    // TODO: Assemble JavaScript into code variable.
    var code = 'app.get(\'' + text_get_url +'\', function(req, res) {\n';
    code += statements_get_method + '});\n';
    return code;
};
Blockly.JavaScript['http_res_send'] = function(block) {
    var value_file = Blockly.JavaScript.valueToCode(block, 'file', Blockly.JavaScript.ORDER_ATOMIC);
    // TODO: Assemble JavaScript into code variable.
    return 'res.send(' + value_file + ');\n';
};