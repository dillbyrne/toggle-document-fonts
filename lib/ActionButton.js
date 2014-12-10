var ui = require("sdk/ui"),
    Data = require("./Data"),
    PrefServ = require("./PrefServ"),
    button,
    on_tooltip =  "Document Fonts Enabled\nClick to disable",
	off_tooltip = "Document Fonts Disabled\nClick to enable";

exports.init = function(){
  
    button = ui.ActionButton({
        id: "toggle-document-fonts",
        label:"Toggle Document Fonts",
        icon:{
			"16": Data.get('images/icon_on16.png'),
			"32": Data.get('images/icon_on32.png'),
			"64": Data.get('images/icon_on64.png'),
		},
        onClick:toggleDocumentFonts
    });

    //set icon and label to reflect the initial state
    setupIconAndLabel();

};

function toggleDocumentFonts(){
  
	if(PrefServ.getter("browser.display.use_document_fonts") == 1)
		PrefServ.setter("browser.display.use_document_fonts",0);
  	else
    	PrefServ.setter("browser.display.use_document_fonts",1);
};



function setupIconAndLabel(){
	if(PrefServ.getter("browser.display.use_document_fonts") == 1){
    	button.label = on_tooltip;
    	button.icon["16"] = Data.get("images/icon_on16.png");   
    	button.icon["32"] = Data.get("images/icon_on32.png");   
    	button.icon["64"] = Data.get("images/icon_on64.png");   
    	button.icon =  Data.get("images/icon_on64.png");  
  	}
  	else{
    	button.label = off_tooltip;
    	button.icon["16"] = Data.get("images/icon_off16.png");   
    	button.icon["32"] = Data.get("images/icon_off32.png");   
    	button.icon["64"] = Data.get("images/icon_off32.png");   
    	button.icon =  Data.get("images/icon_off64.png");  
  	}
};


exports.setIconAndLabel = function(){
	setupIconAndLabel();
};
