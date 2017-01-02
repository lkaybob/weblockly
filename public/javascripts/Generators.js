/**
 * Created by credtiger96 on 17. 1. 2.
 */
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