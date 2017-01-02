
Blockly.JavaScript['file_html'] = function(block) {
    var text_file_name = block.getFieldValue('file_name');
    // TODO: Assemble JavaScript into code variable.
    var code = '\'' + text_file_name + '.html' + '\'';
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.JavaScript.ORDER_ATOMIC];

};
