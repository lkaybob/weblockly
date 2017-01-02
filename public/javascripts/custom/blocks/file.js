Blockly.Blocks['file_html'] = {
    "init" : function () {
        this.jsonInit({

            "type": "file_html",
            "message0": "%1 .html",
            "args0": [
            {
                "type": "field_input",
                "name": "file_name",
                "text": "index"

            }

            ],
            "inputsInline": true,
            "output": "String",
            "colour": 290,
            "tooltip": "",
            "helpUrl": "http://www.example.com/"


        });
    }
}
