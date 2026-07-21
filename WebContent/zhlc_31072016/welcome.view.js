jQuery.sap.require("sap.m.MessageBox");
sap.ui.jsview("zhlc_31072016.welcome", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf zhlc_31072016.welcome
	*/ 
	getControllerName : function() {
		return "zhlc_31072016.welcome";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf zhlc_31072016.welcome
	*/ 
	createContent : function(oController) {
		
		/*Main Page*/
 		var oPageMain =  new sap.m.Page("idPageMain", {
			title: "Sales Automation",
			enableScrolling: false,
			content: [
			     oController.createMainPage()     
			]
		});
 		app.addPage(oPageMain);
 		var oButtonLogoutMain = new sap.m.Button("idButtonLogoutMain",{
	          text : "Logout",
	          //styled:false,
	          type:sap.m.ButtonType.Unstyled,
	          width:"80px",
	          //layoutData: new sap.ui.layout.GridData({span: "L2 M3 S4",linebreak: false, margin: true}),
//	          press:function(){
//	        	  jQuery.sap.require("sap.ui.commons.MessageBox");
//	        	  sap.ui.commons.MessageBox.show("Exit?",
//  			  sap.ui.commons.MessageBox.Icon.WARNING,
//  			  "Logout",
//  			  [sap.ui.commons.MessageBox.Action.YES, sap.ui.commons.MessageBox.Action.NO], 
//  			  oController.fnCallbackMessageBox,
//  			  sap.ui.commons.MessageBox.Action.YES
//	  		    );
//	        	  
//	          }
	          press: function () {
	        	  jQuery.sap.require("sap.m.MessageBox");
	        	    sap.m.MessageBox.alert("Exit?", {
	        	        title: "Logout",
	        	        actions: [
	        	            sap.m.MessageBox.Action.YES,
	        	            sap.m.MessageBox.Action.NO
	        	        ],
	        	        emphasizedAction: sap.m.MessageBox.Action.YES,
	        	        onClose: oController.fnCallbackMessageBox
	        	    });
	        	}
 		}).addStyleClass("getListButton");
 		oPageMain.addHeaderContent(oButtonLogoutMain);
	    

 		/*Sales Order : Create*/
 		var oPageCSO = new sap.m.Page("idPageCSO",{
			title: "Internal Sales Order",
			navButtonTap : function(){
				app.back();
			},
			showNavButton: true,
			content: [
			     oController.createCSOPageM()     
			]
		}).addStyleClass("header");
 		app.addPage(oPageCSO);
 		var oButtonLogoutCSO = new sap.m.Button("idButtonLogoutCSO",{
	          text : "Logout",
	         // styled:false,
	          type:sap.m.ButtonType.Unstyled,
	          width:"80px",
	          //layoutData: new sap.ui.layout.GridData({span: "L2 M3 S4",linebreak: false, margin: true}),
//	          press:function(){
//	        	  jQuery.sap.require("sap.ui.commons.MessageBox");
//	        	  sap.ui.commons.MessageBox.show("Exit?",
//			  sap.ui.commons.MessageBox.Icon.WARNING,
//			  "Logout",
//			  [sap.ui.commons.MessageBox.Action.YES, sap.ui.commons.MessageBox.Action.NO], 
//			  oController.fnCallbackMessageBox,
//			  sap.ui.commons.MessageBox.Action.YES
//	  		    );
//	        	  
//	          }
	          
	          press: function () {
	        	  jQuery.sap.require("sap.m.MessageBox");
	        	    sap.m.MessageBox.alert("Exit?", {
	        	        title: "Logout",
	        	        actions: [
	        	            sap.m.MessageBox.Action.YES,
	        	            sap.m.MessageBox.Action.NO
	        	        ],
	        	        emphasizedAction: sap.m.MessageBox.Action.YES,
	        	        onClose: oController.fnCallbackMessageBox
	        	    });
	        	}
 		}).addStyleClass("getListButton");
		oPageCSO.addHeaderContent(oButtonLogoutCSO);
		
		
		/* Sales Order : Items */
 		var oPageCIO = new sap.m.Page("idPageCIO",{
			title: "Internal Sales Order Items",
			navButtonTap : function(){
				app.back();
			},
			showNavButton: true,
			content: [
			     oController.createCIOPageM()     
			]
		});
 		app.addPage(oPageCIO);
 		var oButtonLogoutCIO = new sap.m.Button("idButtonLogoutCIO",{
	          text : "Logout",
	         // styled:false,
	          type:sap.m.ButtonType.Unstyled,
	          width:"80px",
	          //layoutData: new sap.ui.layout.GridData({span: "L2 M3 S4",linebreak: false, margin: true}),
//	          press:function(){
//	        	  jQuery.sap.require("sap.ui.commons.MessageBox");
//	        	  sap.ui.commons.MessageBox.show("Exit?",
//			  sap.ui.commons.MessageBox.Icon.WARNING,
//			  "Logout",
//			  [sap.ui.commons.MessageBox.Action.YES, sap.ui.commons.MessageBox.Action.NO], 
//			  oController.fnCallbackMessageBox,
//			  sap.ui.commons.MessageBox.Action.YES
//	  		    );
//	        	  
//	          }
	          
	          press: function () {
	        	  jQuery.sap.require("sap.m.MessageBox");
	        	    sap.m.MessageBox.alert("Exit?", {
	        	        title: "Logout",
	        	        actions: [
	        	            sap.m.MessageBox.Action.YES,
	        	            sap.m.MessageBox.Action.NO
	        	        ],
	        	        emphasizedAction: sap.m.MessageBox.Action.YES,
	        	        onClose: oController.fnCallbackMessageBox
	        	    });
	        	}
 		}).addStyleClass("getListButton");
		oPageCIO.addHeaderContent(oButtonLogoutCIO);
		
		
		
 		return oPageCSO;
	}

});