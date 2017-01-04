/**
 * Created by lkaybob on 17. 1. 4.
 * /public/javascripts/blocks/server.js
 * @fileOverview Scripts for defining blocks
 */
Blockly.Blocks['http_get'] = {
    /**
     * Defines app.get() method in Node.js server app
     * with Block's value and which argument this block gets
     * */
    'init' : function () {
        this.jsonInit({
            "type": "http_get",
            "message0": "GET Request at %1 %2",
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
    /**
     * Defines a block to render a file and send when request income
     * */
    'init' : function (){
        this.jsonInit({
            "type": "http_res_send",
            "message0": "Send File %1",
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