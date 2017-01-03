/**
 * Created by credtiger96 on 17. 1. 2.
 */
////////
//Event
////////
Blockly.Blocks['on_click'] = {
    init: function () {
        this.jsonInit({
            "type": "onclick",
            "message0": "When Clicked %1",
            "args0": [
                {
                    "type": "input_statement",
                    "name": "code"
                }
            ],
            "colour": 120,
            "tooltip": "",
            "helpUrl": "http://www.example.com/"
        })

    }
}
///////////
//TIME
///////////
Blockly.Blocks['set_time_out'] = {
    init : function () {
        this.jsonInit({
            "type": "set_time_out",
            "message0": "SetTimeOut :  %1 %2",
            "args0": [
                {
                    "type": "field_number",
                    "name": "time",
                    "value": 0,
                    "min": 0
                },
                {
                    "type": "input_statement",
                    "name": "statement"
                }
            ],
            "nextStatement": null,
            "colour": 290,
            "tooltip": "",
            "helpUrl": "http://www.example.com/"
        })
    }
}

////////
//OUTPUT
////////
Blockly.Blocks['alert'] = {
    init : function () {
        this.jsonInit({
            "type": "alert",
            "message0": "alert :  %1",
            "args0": [
                {
                    "type": "field_input",
                    "name": "alert_text",
                    "text": "text"
                }
            ],
            "previousStatement": null,
            "nextStatement": null,
            "colour": 230,
            "tooltip": "",
            "helpUrl": "http://www.example.com/"
        })
    }
};
