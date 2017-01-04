/**
 * Created by credtiger96 on 17. 1. 2.
 */
////////
//Event
////////
Blockly.Blocks['on_click'] = {
    init: function () {
        this.jsonInit({
            "type": "on_click",
            "message0": "When clicked %1",
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

Blockly.Blocks['on_mouse_over'] = {
    init: function () {
        this.jsonInit({
            "type": "on_mouse_over",
            "message0": "When mouse over %1",
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

Blockly.Blocks['on_mouse_out'] = {
    init: function () {
        this.jsonInit({
            "type": "on_mouse_out",
            "message0": "When mouse leave %1",
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

Blockly.Blocks['on_load'] = {
    init: function () {
        this.jsonInit({
            "type": "on_load",
            "message0": "When Page is loaded  %1",
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
    /**
     * get_dom block helps coder to make 'getElementById()' function
     * this block's inputs are statements that change DOM's css property or innerHTML
     */
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
                "name": "LISTENER",
                "check": [
                    "change_style",
                    "change_inner_text",
                    "text",
                    "colour_picker",
                    "colour_random",
                    "colour_rgb",
                    "colour_blend" 
                ]
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
    /**
     * change_inner_text block is statement block for get_dom block
     * this block helps coder to use 'innerHTML' property of dom object
     * coder can only modify innerHTML
     */
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
    /**
     *  change_style block is statement block for get_dom block
     *  this block helps coder to modify css property of dom object
     */
    init: function() {
        this.appendValueInput("STYLE_VALUE")
            .setCheck(null)
            .appendField("Change Style")
            .appendField(new Blockly.FieldDropdown([["color", "color"], ["background color", "backgroundColor"], ["width", "width"], ["height", "height"]]), "STYLE");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(300);
        this.setTooltip('');
        this.setHelpUrl('http://www.example.com/');

    }

};
