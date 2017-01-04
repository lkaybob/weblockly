/**
 * Created by lkaybob on 17. 1. 4.
 */
Blockly.Blocks['http_get'] = {
    'init' : function () {
        this.jsonInit({
            "type": "http_get",
            "message0": "GET url :  %1 %2",
            "args0": [
                {
                    "type": "field_input",
                    "name": "get_url",
                    "text": "/"
                },
                {
                    "type": "input_statement",
                    "name": "get_method"
                }
            ],
            "colour": 20,
            "tooltip": "",
            "helpUrl": "http://www.example.com/"
        });
    }
};

Blockly.Blocks['http_res_send'] = {
    'init' : function (){
        this.jsonInit({
            "type": "http_res_send",
            "message0": "Send %1",
            "args0": [
                {
                    "type": "input_value",
                    "name": "file",
                    "check": [
                        "String",
                        ""
                    ]
                }
            ],
            "previousStatement": null,
            "nextStatement": null,
            "colour": 65,
            "tooltip": "",
            "helpUrl": "http://www.example.com/"
        });
    }
};