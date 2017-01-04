/**
 * Created by credtiger96 on 17. 1. 2.
 */

/* 
WorkspaceManager is Namespace that manage mode. 
each mode has it's own workspace. 

* Global mode : Global (not on sepecific elements) Code   
* ID mode : Specific Element's Code. 
 
*/
var WorkspaceManager = {
    init : function () {
        this.globalWorkSpace = workspace;
        this.idWorkspace = [];
        //this.classWorkspace = [];
        this.currentMode = this.MODE_GLOBAL;
    },
    currentMode : null,
    currentID : null,
    //currentClass : null,
    
    /*change to Global mode */ 
    changeToGlobalMode : function () {

        alertModeChange('Global');

        workspace.updateToolbox(globalToolbox);
        
        this.currentMode = this.MODE_GLOBAL;
        workspace.clear();
        Blockly.Xml.domToWorkspace(this.globalWorkSpace,workspace);

    },
    /*Change to mode that treat element that has specific ID */ 
    changeToIdMode : function (id) {
        alertModeChange('ID : ' + id);

        workspace.updateToolbox(idToolbox);

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

    },
    
    /* Before Change mode, currente state must be saved. */ 
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
    
    // Constants
    MODE_GLOBAL : 'global',
    MODE_ID : 'id',
    MODE_CLASS : 'class'
};
/*
 ChangeMode event handler
 
 if tagId is not set, mode is set to Global. 
 else mode is set to specific id mode. 
 */
$(document).on('ModeChange', function(event) {
    //console.log(event);
    if (event.tagId){
        WorkspaceManager.saveCurrnetState();
        WorkspaceManager.changeToIdMode(event.tagId);
    }
    else {
        WorkspaceManager.saveCurrnetState();
        WorkspaceManager.changeToGlobalMode();
    }
});
