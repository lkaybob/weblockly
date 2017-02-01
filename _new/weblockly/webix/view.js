/**
 * Created by credt on 2/1/2017.
 */

    // temporal tree view data
var smalltreedata = [
        {id:"root", value:"Films data", open:true, data:[
            { id:"1", open:true, value:"The Shawshank Redemption", data:[
                { id:"1.1", value:"Part 1" },
                { id:"1.2", value:"Part 2", data:[
                    { id:"1.2.1", value:"Page 1" },
                    { id:"1.2.2", value:"Page 2" },
                    { id:"1.2.3", value:"Page 3" },
                    { id:"1.2.4", value:"Page 4" },
                    { id:"1.2.5", value:"Page 5" }
                ]},
                { id:"1.3", value:"Part 3" }
            ]},
            { id:"2", open:true, value:"The Godfather", data:[
                { id:"2.1", value:"Part 1" },
                { id:"2.2", value:"Part 2" }
            ]}
        ]}
    ];

var toolbar = {
    view : "toolbar",
    autoheight : true,
    elements : [
        {
            view: "toolbar", id: "toolbar", elements: [
            {
                view: "icon", icon: "bars",
                click: function () {
                    if ($$("menu").config.hidden) {
                        $$("menu").show();
                    }
                    else
                        $$("menu").hide();
                }
            },
            {view: "label", template: "<span>Weblockly</span>", align: 'center'}
        ]
        }
    ]

};


var sidemenu= {
    view: "sidemenu",
    id: "menu",
    width: 200,
    position: "left",
    state: function (state) {
        var toolbarHeight = $$("toolbar").$height + 15;
        state.top = toolbarHeight;
        state.height -= toolbarHeight;
    },
    css: "my_menu",
    body: {

        view: "list",
        borderless: true,
        scroll: false,

        template: "<span class='webix_icon fa-#icon#'></span> #value#",
        data: [
            {id: 1, value: "Customers", icon: "user"},
            {id: 2, value: "Products", icon: "cube"},
            {id: 3, value: "Reports", icon: "line-chart"},
            {id: 4, value: "Archives", icon: "database"},
            {id: 5, value: "Settings", icon: "cog"}
        ],
        select: true,
        type: {
            height: 40
        }
    }
};

var left = {
    view : "tabview",
    autoheight : true,
    width : 220,
    cells : [
        {
            header : "<span>project</span>",
            body : {
                view:"tree",
                select:true,
                ready :function(){
                    this.select("1.2");
                },
                data: webix.copy(smalltreedata)
            }
        },
        {
            header : "favorite",
            body : {
            }
        }
    ]
};
var middle = {
    autoheight : true,
    rows : [
        {
            height : 160,
            template : 'Info area'
        },
        {view : 'resizer'},
        {
            template : 'blockly area'
        }
    ]
};

var right = {
    width : 420,
    rows : [
        {
            height : 350,
            template : 'rendering area'
        },
        {view : 'resizer'},
        {
            view: "scrollview",
            id: "verses",
            scroll: "y", //vertical scrolling
            body: {
                template : 'sprite area'
            }
        }
    ]
};

var ui = {
    rows : [
        toolbar,
        {
            cols : [
                left,
                {view : 'resizer'},
                middle,
                {view : 'resizer'},
                right
            ]
        }
    ]
};
webix.ui(ui);
webix.ui(sidemenu);
