jQuery.sap.require("sap.ui.model.odata.datajs");
jQuery.sap.require("sap.ui.model.json.JSONModel");
var outControl;
sap.ui.model.json.JSONModel.extend("createMainPage", {
	alertClick: function(){
		alert('done');
	},
	createMainPage: function(oController){
		jQuery.sap.require("sap.ui.core.IconPool");
		
		var oContainer = new sap.m.TileContainer({});  
        var oCurrent = this;  
        var oTileCSO = new sap.m.StandardTile("idTileCSO",{icon :sap.ui.core.IconPool.getIconURI( "sales-order-item" ),
                   title:"Internal Sales Order Creation",
                   press: function(){
                	  app.to("idPageCSO");
                   }
                   }); 
        oContainer.addTile(oTileCSO);  
   
         return oContainer;
	},
	
	
});