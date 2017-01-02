/**
 * Created by credtiger96 on 17. 1. 2.
 */
var WorkspaceManager = {
    init : function () {
        this.globalWorkSpace = workspace;
        this.idWorkspace = [];
        this.classWorkspace = [];
        this.currentMode = this.MODE_GLOBAL;
    },
    currentMode : null,
    currentID : null,
    currentClass : null,
    changeToGlobalMode : function () {
        alert('global');
        this.saveCurrnetState();
        this.currentMode = this.MODE_GLOBAL;
        workspace.clear();
        Blockly.Xml.domToWorkspace(this.globalWorkSpace,workspace);
    },
    changeToIdMode : function (id) {
        alert('id : ' + id );
        if (! this.idWorkspace[id])
            this.idWorkspace[id] = this.createNewWorkspace();
        workspace.clear();
        Blockly.Xml.domToWorkspace(this.idWorkspace[id],workspace);
        this.currentMode = this.MODE_ID;
        this.currentID = id;
    },
    createNewWorkspace : function () {
        //console.log('created');
        return Blockly.Xml.textToDom('<xml></xml>>');
    }
    ,
    saveCurrnetState : function () {
        switch (this.currentMode){
            case this.MODE_GLOBAL:
                this.globalWorkSpace = Blockly.Xml.workspaceToDom(workspace);
                break;
            case this.MODE_ID:
                this.idWorkspace[this.currentID] = Blockly.Xml.workspaceToDom(workspace);
                break;
        }
    },
    saveCurrentClassWorkspace: function (className) {

    },
    MODE_GLOBAL : 'global',
    MODE_ID : 'id',
    MODE_CLASS : 'class'
};

