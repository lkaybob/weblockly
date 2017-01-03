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

/////////
//GET DOM
/////////
Blockly.Blocks['get_dom'] = {
    init: function () {
        this.jsonInit({
            "type": "get_dom_by_id",
            "message0": "get Element whose id is  %1 %2 Listener for this Dom %3",
            "args0": [
            {
                "type": "field_input",
                "name": "ID",
                "text": "custom_div"
            },
            {
                "type" : "input_dummy"
            },
            {
                "type": "input_statement",
                "name": "LISTENER"
            }
            ],
            "previousStatement": null,
            "nextStatement": null,
            "colour": 330,
            "tooltip": "",
            "helpUrl": "http://www.example.com/"
        })

    }
}

////////////
//DOM MODIFY
////////////

Blockly.Blocks['change_inner_text'] = {
    init: function() {
        this.appendValueInput("NAME")
            .setCheck("String")
            .appendField("change text to");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setTooltip('');
        this.setHelpUrl('http://www.example.com/');

    }

};

Blockly.Blocks['change_style'] = {
    init: function() {
        this.appendValueInput("STYLE_VALUE")
            .setCheck(null)
            .appendField("Change Style")
            .appendField(new Blockly.FieldDropdown([["color", "color"], ["width", "width"], ["height", "height"]]), "STYLE");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(300);
        this.setTooltip('');
        this.setHelpUrl('http://www.example.com/');

    }

};
