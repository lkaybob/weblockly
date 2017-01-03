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

        alertModeChange('Global');
        //alert('global');
        this.currentMode = this.MODE_GLOBAL;
        workspace.clear();
        Blockly.Xml.domToWorkspace(this.globalWorkSpace,workspace);

    },
    changeToIdMode : function (id) {
        alertModeChange('ID : ' + id);

        //alert('id : ' + id );
        if (! this.idWorkspace[id])
            this.idWorkspace[id] = this.createNewWorkspace();
        this.currentMode = this.MODE_ID;
        this.currentID = id;

        workspace.clear();
        Blockly.Xml.domToWorkspace(this.idWorkspace[id],workspace);


    },
    createNewWorkspace : function () {
        //console.log('created');
        return Blockly.Xml.textToDom('<xml></xml>');

    }
    ,
    saveCurrnetState : function () {
        //console.log('current state :', this.currentMode);
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
    // Constants
    MODE_GLOBAL : 'global',
    MODE_ID : 'id',
    MODE_CLASS : 'class'
};
//
// changeMode event handler
$(document).on('ModeChange', function(event) {
    console.log(event);
    if (event.tagId){
        WorkspaceManager.saveCurrnetState();
        WorkspaceManager.changeToIdMode(event.tagId);
    }
    else {
        WorkspaceManager.saveCurrnetState();
        WorkspaceManager.changeToGlobalMode();
    }
});
