sap.ui.jsview("zhlc_31072016.Login", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf inventoryoverview.Login
	*/ 
	getControllerName : function() {
		return "zhlc_31072016.Login";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf inventoryoverview.Login
	*/ 
	createContent : function(oController) {
		
		var oLoginView = new LoginView();
		var vLoginForm = oLoginView.createLoginForm(oController);
		
        var oImageLeftPic = new sap.m.Image("idImageLeftPic",{
        	src : "images/leftpic1.png",
        	width: "135px",
        	height: "150px",
        	   
        });
        
        var oFlexboxLeftPic = new sap.m.FlexBox({
            items: [
              oImageLeftPic
            ],
            alignItems: sap.m.FlexAlignItems.Center,
            direction: "Column"
           
        }).addStyleClass("marginTop10");
        var oImageCenterPic = new sap.m.Image("idImageCenterPic",{
        	src : "images/centerpic.png",
        	width: "135px",
        	height: "75px"
        }).addStyleClass("centerPic");
        
        var oFlexboxCenterPic = new sap.m.FlexBox({
            items: [
              oImageCenterPic
            ],
            alignItems: sap.m.FlexAlignItems.Center,
            justifyContent: sap.m.FlexJustifyContent.Center,
            //direction: "Column"
        });//.addStyleClass("marginTop10");
        
      //&copy; Copyright Ha Li Fa Pte Ltd
        
//        var lblFooter = new sap.ui.core.HTML({});
//		var htmlFooter = '<label class="footer">&copy; Copyright Ha Li Fa Pte Ltd</label>';
//		lblFooter.setContent(htmlFooter);
		
        var oFooter = new sap.m.Bar({
            enableFlexBox : true,               
            contentRight : new sap.m.Text({text:"Copyright Ang Kee Logistics Pte Ltd"}),
       }).removeStyleClass("sapMPageFooter").addStyleClass("sapMPageFooterc");
        
        var oFlexboxFinal = new sap.m.FlexBox({
            items: [
                    	vLoginForm  //, oFlexboxLeftPic //oFlexboxCenterPic, //lblFooter
            ],
            //alignItems: sap.m.FlexAlignItems.Center,
            direction: "Column"
        });//.addStyleClass("marginTop10");
        
        
		this.page = new sap.m.Page("LoginPage", {
			title: "{i18n>page2Title}",
			showFooter : true,
			footer: oFooter,
			showNavButton: false,				// page 2 should display a back button
			//navButtonPress: [ oController.navButtonPress, oController ],
			icon: "",
			content : [oFlexboxFinal]
		});
		this.page.setShowHeader(false);
		//this.page.setBackgroundDesign(sap.m.PageBackgroundDesign.Transparent);
		//this.page.setHeight("25%");
		
		// done
		return this.page;
	
		/*new sap.m.Button("idBtnLogon",{
		          type:sap.m.ButtonType.Default,
		          press:function(){
		        	  oController.LogonBtnPress();
		          }}).placeAt("btnLogon");*/
	}

});