jQuery.sap.require("sap.m.MessageBox");


var oArraySalesOrderLineItems = [];
var oArraySalesOrderLineItemsSub = [];
var globalTax = "";
var globalCode = "";
var globalEdit = false;
var globalQEditable = true;
var globalSalesOrder = "";
var globalNew = false;
var oSalesOrderLineItems = [];
sap.ui.controller("zhlc_31072016.welcome", {

/**
* Called when a controller is instantiated and its View controls (if available) are already created.
* Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
* @memberOf zhlc_31072016.welcome
*/
//	onInit: function() {
//
//	},

/**
* Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
* (NOT before the first rendering! onInit() is used for that one!).
* @memberOf zhlc_31072016.welcome
*/
	onBeforeRendering: function() {

	},

/**
* Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
* This hook is the same one that SAPUI5 controls get after being rendered.
* @memberOf zhlc_31072016.welcome
*/
	onAfterRendering: function() {
		busyDialog.close();
		//sap.ui.getCore().byId('combination').getGeneral();
	},

/**
* Called when the Controller is destroyed. Use this one to free resources and finalize activities.
* @memberOf zhlc_31072016.welcome
*/
//	onExit: function() {
//
//	}
	createMainPage : function(){
		jQuery.sap.require("sap.ui.core.IconPool");
		
		var oContainer = new sap.m.TileContainer({});  
        var oCurrent = this;  
        var oTileCSO = new sap.m.StandardTile("idTileCSO",{icon :sap.ui.core.IconPool.getIconURI( "sales-order-item" ),
                   title:"Sales Order Creation",
                   press: function(){
                	  app.to("idPageCSO");
                   }
                   }); 
        oContainer.addTile(oTileCSO);  
   
         return oContainer;
		},
		
		createCSOPageM : function(){
			/* Sales Order Date */
		    var oCurrent = this;
		    uName = sessionStorage.uName;
		   // oCurrent.getCustomer( );
		  // oCurrent.getcust(uName);
			/*var oCSOSperson = new sap.m.Select("idCust", {
				// showSecondaryValues:true,
				// width: "150px",
				placeholder : "Customer",
				
				 * change: function(evnt){ if(this.getValue() !=
				 * ''){
				 * this.setValueState(sap.ui.core.ValueState.None);
				 * this.setPlaceholder("Plant"); } },
				 
				change : function(evnt) {
					var customer = this.getSelectedKey();
					oCurrent.getCustomer(customer);
					// get an instance of  jQuery.sap.storage.Storage
					 var oStorage = jQuery.sap.storage(jQuery.sap.storage.Type.local);
					 //...

					 // Store
					 var customer1 = customer;
					 oStorage.put("Cust", customer1);

					 // Read 
					 var sperson2 = oStorage.get("customer1");

				},
			}).addStyleClass("selectionLabels");*/
//		    <Input
//			id="productInput"
//			textFormatMode="KeyValue"
//			placeholder="Enter product"
//			showSuggestion="true"
//			showValueHelp="true"
//			valueHelpRequest=".onValueHelpRequest"
//			suggestionItems="{/ProductCollection}"
//			suggestionItemSelected=".onSuggestionItemSelected">
//			<suggestionItems>
//				<core:ListItem
//					key="{ProductId}"
//					text="{Name}"
//					additionalText="{ProductId}" />
//			</suggestionItems>
//		</Input>
//			var  oCSOLabelSphno = new sap.m.Input("idcustphno",{
//					   textFormatMode : "KeyValue",
//						placeholder : "Enter product",
//						showSuggestion : true,
//						showValueHelp : true,
//						valueHelpRequest : "onValueHelpRequest",
//				        suggestionItems :"/ProductCollection",
//				        suggestionItemSelected :"onSuggestionItemSelected",
//				        suggestionItems:
//				        	new sap.ui.core.ListItem("idlist",{
//				        			key : "{ProductId}",
//				    			    text :"{Name}",
//				    				additionalText:"{ProductId}"}),
//				       
//			});
//		    var oCSOLabelSphone = new sap.m.Label(
//					"idCSOLabelCphone", {
//						visible : true,
//						text : "Search :",
//						labelFor : oCSOSphone,
//						// required: true,
//						width : "100px",
//					}).addStyleClass("selectionLabels");
//			var oCSOSphone = new sap.m.Input("idCphone",{
//				width : "150px"
//			}).addStyleClass("marginRight15");
//			var oCSOButtonsearch = new sap.m.Button("idCSOButtonsearch",{
////		          text : "",
//				  icon : "sap-icon://action",
//		          styled:false,
//		         // width:"140px",
//		          press:function(){
////		        	  oCurrent.getCSOSalesOrders();
//		     }}).addStyleClass("marginRight15");
//		    
//			var oCSOFlexSphone = new sap.m.FlexBox(
//					"idCSOFlexSphone", {
//						visible : true,
//						items : [ oCSOLabelSphone, oCSOSphone ,oCSOButtonsearch],
//						direction : "Row",
//					});

			var oCSOLabelSperson = new sap.m.Label(
					"idCSOLabelCust", {
						visible : true,
						text : "Customer :",
						labelFor : oCSOSperson,
						// required: true,
						width : "100px",
					}).addStyleClass("selectionLabels");
			var oCSOSperson = new sap.m.Input("idCust",{
				width : "150px",
				height : "150px",
//				showTableSuggestionValueHelp : true,
//				showValueHelp : true,
//				valueHelpRequest:function(){
//					var count = sap.ui.getCore().byId("idCust").getValue().length;
//				    if(count < 3 ){
//				    	sap.m.MessageToast.show(" Please search at least 3 digits !");
//				    }else{
//					oCurrent.getCSOvaluehelp();
//				    }
//				},
			}).addStyleClass("marginRight15");
//			var oCSOSearch = new sap.m.Button("idsearch",{
//				icon : "sap-icon://action",
//				width : "50px"
//			}).addStyleClass("marginRight15");
			var oCSOFlexSperson = new sap.m.FlexBox(
					"idCSOFlexSperson", {
						visible : true,
						items : [ oCSOLabelSperson, oCSOSperson,
						         // oCSOSearch 
						          ],
						direction : "Row",
					});

			var oCSOLabelDate = new sap.m.Label("idCSOLabelDate",{
				text : " Order Date : ",
				//labelFor: oHSODateDate,
				//required: true,
				width : "100px"
	 			}).addStyleClass("selectionLabels");
			
			var toDate = new Date();
			toDate.setDate(toDate.getDate() + 1);
			
		    var mDate = { someDate: toDate };
		    
		  //  var mDate = { someDate: new Date() };
		    
			var oCSODateBDate = new sap.m.DateTimeInput("idCSODateBDate",{  
		        //type: sap.m.DateTimeInputType.DateTime,
		    	width: "150px",
		        displayFormat : "dd/MM/yyyy",
		        valueFormat : "yyyyMMdd",
		        change: function(oEvent){
		            var bValid   = oEvent.getParameter("newDateValue");
		            var date = oEvent.getParameter("value");
		            var TodaysDate=new Date();
		            var MOnTh=TodaysDate.getMonth();
		            var YEaRs=TodaysDate.getFullYear();
		                  var DAte=TodaysDate.getDate();
		                 // var value=this.byId("Date_iD");
		                  var selectDate=bValid;
		           var MOnTh1=selectDate.getMonth();
		            var YEaRs1=selectDate.getFullYear();
		               var DAte1=selectDate.getDate();
		               var date=DAte1-DAte;
		             var month=MOnTh1-MOnTh;
		             var year=YEaRs1-YEaRs;
		             var total=date+month*30+year*365;
		               if(total==0)
		                {
		                sap.m.MessageToast.show("Warning ! Delivery Date is Today!");
		               /* var toDate = new Date();
		    			toDate.setDate(toDate.getDate() + 1);
		    			
		    		    var mDate = { someDate: toDate };
		    		    oCSODateBDate.setModel(new sap.ui.model.json.JSONModel(mDate));  
		    		    oCSODateBDate.bindProperty("dateValue", "/someDate"); */
		              //  return;
		                }
		               if(total<0)
		                {
		                /*sap.m.MessageToast.show("Date can't be in Past");
		                var toDate = new Date();
		    			toDate.setDate(toDate.getDate() + 1);
		    			
		    		    var mDate = { someDate: toDate };
		    		    oCSODateBDate.setModel(new sap.ui.model.json.JSONModel(mDate));  
		    		    oCSODateBDate.bindProperty("dateValue", "/someDate"); 
		                return;*/
		                }
		       }
		    }).addStyleClass("marginRight15");
			
		    oCSODateBDate.setModel(new sap.ui.model.json.JSONModel(mDate));  
		    oCSODateBDate.bindProperty("dateValue", "/someDate"); 
			
			var oCSOFlexDate = new sap.m.FlexBox("idCSOFlexDate",{
		         items: [oCSOLabelDate,
		                 oCSODateBDate
						 ],
		         direction: "Row"
			  });
			
			var oCSOTextArea = new sap.m.Text({
                id : "idCSOTextArea",
                text : "",
    			//labelFor: Name1,
    			//required: true,
    			width : "300px"
          
    			}).addStyleClass("selectionLabels");
			
			var oCSOFlexTextArea = new sap.m.FlexBox("idCSOFlexTextArea",{
		         items: [oCSOTextArea
						 ],
		         direction: "Row"
			  });
			
		    /* Get List Button */
		    
		    var oCSOButtonGetList = new sap.m.Button("idCSOButtonGetList",{
		          text : "Get List",
		          styled:false,
		         // width:"140px",
		          press:function(){
		        	  oCurrent.getCSOvaluehelp();
//		        	  oCurrent.getCSOSalesOrders();
		     }}).addStyleClass("getListButton");
		    
		    /* New Order Button*/
			
		    var oCSOButtonNewOrder = new sap.m.Button("idCSOButtonNewOrder",{
		          text : "New",
		          styled:false,
		          //width:"200px",
		          visible: true,
		          press:function(){
		        	   globalNew = true;
		        	   globalEdit = false;
					   globalQEditable = true;
					   sap.ui.getCore().byId("idCIOTableLineItemsHeaderToolButton").setVisible(true);
					   sap.ui.getCore().byId("idCIOTableLineItemsHeaderToolSaveButton").setVisible(false);
					   sap.ui.getCore().byId("idCIOFlexDate").setVisible(true);
			  		   sap.ui.getCore().byId("idCIOInputOrderAmount").setValue("0");
					   sap.ui.getCore().byId("idCIOInputTaxAmount").setValue("0");
					   var orderdat = sap.ui.getCore().byId("idCSODateBDate").getDateValue();
					   sap.ui.getCore().byId("idCIODateRDate").setDateValue(orderdat);
					   sap.ui.getCore().byId("idCIOPanelAmount").setHeaderText("Total Amount : 0.00");
					   sap.ui.getCore().byId("idCust1").setValue( sap.ui.getCore().byId("idCust").getValue().toUpperCase());
		        	   oCurrent.getCSOSalesOrdersDetails();
		        	   app.to("idPageCSI");
		     }}).addStyleClass("getListButton");
		    
		    /* Void Button */
		    
		    var oCSOButtonVoid = new sap.m.Button("idCSOButtonVoid",{
		          text : "Void",
		          visible: false,
		          styled:false,
		          //width:"140px",
		          press:function(){
		        	  oCurrent.voidCSOSalesOrders();
		     }}).addStyleClass("getListButton");
		    
		    /* Edit Button */		    
//		    var oCSOButtonEdit = new sap.m.Button("idCSOButtonEdit",{
//		          text : "Edit",
//		          visible: false,
//		          styled:false,
//		          //width:"140px",
//		          press:function(){
//		        	  oCurrent.editCSOSalesOrders();
//		     }}).addStyleClass("getListButton");
		    
		    
// Begin of lines added by Naga on 09.09.2019
	
			/* Billing PDF Download */
	/*		var ovanbilling = new vanbilling();
			var oCSOButtonBilling = new sap.m.Button(
					"idCSOButtonBilling", {
						visible : false,
						text : "Billing",
						styled : false,
						// width:"140px",
						press : function() {
							ovanbilling.getBillingDocs(false);
						}
					}).addStyleClass("confirmButton");*/
			/* PDF Button */

			var oCSOButtonPdf = new sap.m.Button("idCSOButtonPdf",
					{
						text : "PDF",
						styled : false,
						visible : false,
						// width:"140px",
						press : function() {
							oCurrent.getPdfFromSap();
						}
					}).addStyleClass("getListButton");
	/* Print Button */
		    var oCSOButtonPrint = new sap.m.Button("idCSOButtonPrint",{
				text : "Print",
				visible : false,
				styled : false, 
				// width:"190px",
			 	press:function(){
			 		oCurrent.printOrders();
			 	}}).addStyleClass("getListButton");
	
// End of lines added by Naga on 09.09.2019
		
		    var oCSOFlexHeaderButtons = new sap.m.FlexBox("idCSOFlexHeaderButtons",{
		         items: [oCSOButtonGetList,
		                 oCSOButtonNewOrder,
		                 oCSOButtonVoid,
		                 oCSOButtonPrint
		                ],
		               
		               //  oCSOButtonEdit
						
		         direction: "Row"
			});
		    
			var oCSOFlexHeader = new sap.m.FlexBox("idCSOFlexHeader",{
				
		         items: [
		                 //oCSOFlexSphone,
		                 oCSOFlexSperson,
		        	     oCSOFlexDate,
		        	     oCSOFlexTextArea,
		                 oCSOFlexHeaderButtons
						 ],
		         direction: "Column"
			  });
			
			
			/* Sales Order List */
			
			var oCSOTableOrderListHeader = new sap.m.Table("idCSOTableOrderListHeader", {
				fixedLayout: false,
				growing : true,
				inset : false,
				visible: false,
				noDataText : "No Orders found",
				headerText : "Sales Order List",
				columns: [			               
					  new sap.m.Column({
						   //width : "50%",
					    header: new sap.m.CheckBox({
					    text: ""
					    })
					    }),   
					    
			           new sap.m.Column({
			        	   //width : "50%",
				           header: new sap.m.Text({
				           text: "Sales Order"
				           })
				           }),
					   
					   new sap.m.Column({
						   //width: "50%",
						   header: new sap.m.Text({
						   text: "Delivery Date",
						   })
					   }),
					   
					   new sap.m.Column({
						   //width: "50%",
						   header: new sap.m.Text({
						   text: "Status",
						   })
					   }),
					   
					   			   
			           			 
				   ],
				        
				      items : {
				      path: "oCSOModelSalesOrderList>/",
				      template: new sap.m.ColumnListItem({
				      selected: false,
				      //type: "Active",
				      cells: [
						new sap.m.CheckBox({
							selected : "{oCSOModelSalesOrderList>selected}",
							enabled : "{oCSOModelSalesOrderList>enVbeln}",
						}),

						// Cell OrderQtyB
						new sap.m.Link({
							text : "{oCSOModelSalesOrderList>Vbeln}",
							enabled : "{oCSOModelSalesOrderList>enVbeln}",
							press : function(oEvent) {
								debugger;
								globalEdit = true;
								var order = oEvent.getSource().getProperty("text");
								var status = oEvent.getSource().getBindingContext("oCSOModelSalesOrderList").getProperty("Status");
								var DdateEdit = oEvent.getSource().getBindingContext("oCSOModelSalesOrderList").getProperty("Ddate");
								if(status == "In Process"){
									globalQEditable = true;
									sap.ui.getCore().byId("idCIOTableLineItemsHeaderToolButton").setVisible(true);
									sap.ui.getCore().byId("idCIOTableLineItemsHeaderToolSaveButton").setVisible(true);
									sap.ui.getCore().byId("idCIOFlexDate").setVisible(true);
								}else{
									globalQEditable = false;
									sap.ui.getCore().byId("idCIOTableLineItemsHeaderToolButton").setVisible(true);
									sap.ui.getCore().byId("idCIOTableLineItemsHeaderToolSaveButton").setVisible(false);
									sap.ui.getCore().byId("idCIOFlexDate").setVisible(false);
								}
								
							    //oCurrent.getCSOSalesOrdersDetails();
							    oCurrent.setCSIValues(order,DdateEdit);
								//app.to("idPageCSI");
								/*var orderType = oEvent.getSource().getBindingContext("oHSOModelSalesOrderList").getProperty("Auart");
								var orderTypeD = oEvent.getSource().getBindingContext("oHSOModelSalesOrderList").getProperty("Bezei");
								var ponumber = oEvent.getSource().getBindingContext("oHSOModelSalesOrderList").getProperty("Bstnk");
								var customer = oEvent.getSource().getBindingContext("oHSOModelSalesOrderList").getProperty("Kunnr");
								var customerD = oEvent.getSource().getBindingContext("oHSOModelSalesOrderList").getProperty("Name1");
								var amount = oEvent.getSource().getBindingContext("oHSOModelSalesOrderList").getProperty("Netwr"); 
								app.to("idPageLSO");
								oCurrent.setLSOValuesM(orderType);
								oCurrent.getHSOSalesLines(order, orderType, orderTypeD, ponumber, customer, customerD, amount);*/
							}
						}),
						
						new sap.m.Text({
							text : "{oCSOModelSalesOrderList>Ddate}"
						}),
						
						new sap.m.Text({
							text : "{oCSOModelSalesOrderList>Status}",
						}),
						
						]})}}).addStyleClass('sapUiSizeCompact margintop70p');
		    
			
			var oCSOFlexOrderList = new sap.m.FlexBox("idCSOFlexOrderList",{
		         items: [oCSOTableOrderListHeader
						 ],
			     visible: true,
		         direction: "Column"
			  });
			
			var oCSOFlexContent = new sap.m.FlexBox("idCSOFlexContent",{
		         items: [oCSOFlexHeader,
		                 oCSOFlexOrderList
						 ],
		         direction: "Column"
			  });
			
	         return oCSOFlexContent;
		},
		
		getCustomer : function(customer) {
			if(customer  == undefined){
				customer = " ";
			}
			var serviceUrlSperson = serviceUrlCSO
					+ "cso_getcust_allSet?$filter=Kunnr eq '" + customer
					+ "'";

			oModel = new sap.ui.model.odata.ODataModel(serviceUrlCSO,
					true);

			OData
					.request(
							{
								requestUri : serviceUrlSperson,
								method : "GET",
								dataType : 'json',
								headers : {
									"X-Requested-With" : "XMLHttpRequest",
									"Content-Type" : "application/json; charset=utf-8",
									"DataServiceVersion" : "2.0",
									"X-CSRF-Token" : "Fetch"
								}
							},
							function(data, response) {

								oArrayIntTransModelSingleSperson = [];

								for (var i = 0; i < data.results.length; i++) {

									oArrayIntTransModelSingleSperson
											.push({
												KUNNR : data.results[i].Kunnr,
												NAME : data.results[i].Kunnr
												+ " - "
												+ data.results[i].Name,
											});
								}

								var oCSOSperson = sap.ui.getCore()
										.byId("idCust");
								var oIntTransModelSingleSperson = new sap.ui.model.json.JSONModel();
								oIntTransModelSingleSperson
										.setSizeLimit(99999);
								oIntTransModelSingleSperson
										.setData({
											data : oArrayIntTransModelSingleSperson
										});
								oCSOSperson
										.setModel(oIntTransModelSingleSperson);
								oCSOSperson
										.bindItems(
												"/data",
												new sap.ui.core.ListItem(
														{
															text : "{NAME}",
															key : "{KUNNR}",
															additionalText : "{KUNNR}"
														}));

								
		
							}, function(error) {

							});

		},

		
		editCSOSalesOrders : function(){
			
			var oCurrent = this;
			var stringToPass = "";
			var message = "";
			var selLines = 0;

			var salesLineData = sap.ui.getCore().byId("idCSOTableOrderListHeader").getModel("oCSOModelSalesOrderList").getData();

			if(salesLineData.length == 0){
			message = "No Orders found!";
			sap.m.MessageBox.alert(message);
			}else{
			stringToPass = stringToPass + "Isales1 eq 'DEL";
			for(var i=0; i<salesLineData.length; i++){
			  if(salesLineData[i].selected == true){
				selLines = selLines + 1;
				globalSalesOrder = salesLineData[i].Vbeln;
				stringToPass = stringToPass + '$*' + salesLineData[i].Vbeln;
			  }
			}
			
			
				if(selLines == 0){
				message = "No Orders selected!";
				sap.m.MessageBox.alert(message);
				}else if(selLines > 1){
					message = "Choose only one order";
					sap.m.MessageBox.alert(message);
				}else{
        	   globalEdit = true;
			   globalQEditable = true;
			   sap.ui.getCore().byId("idCIOTableLineItemsHeaderToolButton").setVisible(true);
			   sap.ui.getCore().byId("idCIOTableLineItemsHeaderToolSaveButton").setVisible(true);
			   sap.ui.getCore().byId("idCIOFlexDate").setVisible(true);
	  		   sap.ui.getCore().byId("idCIOInputOrderAmount").setValue("0");
			   sap.ui.getCore().byId("idCIOInputTaxAmount").setValue("0");
			   sap.ui.getCore().byId("idCIOPanelAmount").setHeaderText("Total Amount : 0.00");
        	   oCurrent.getCSOSalesOrdersDetails();
        	   app.to("idPageCSI");
			   }

			
			
			}
			  
			
			
		},
		
		voidCSOSalesOrders : function(){
			
			var oCurrent = this;
			var stringToPass = "";
			var message = "";
			var selTrue = false;
			var status = "";

			var salesLineData = sap.ui.getCore().byId("idCSOTableOrderListHeader").getModel("oCSOModelSalesOrderList").getData();

			if(salesLineData.length == 0){
			message = "No Orders found!";
			sap.m.MessageBox.alert(message);
			}else{
			stringToPass = stringToPass + "Isales1 eq 'DEL";
			for(var i=0; i<salesLineData.length; i++){
			  if(salesLineData[i].selected == true){
			        selTrue = true;
				stringToPass = stringToPass + '$*' + salesLineData[i].Vbeln;
				     status  = salesLineData[i].Status;
			  }
			  
			}

			if(selTrue == false){
			message = "No Orders selected!";
			sap.m.MessageBox.alert(message);
			}else{
			oModel = new sap.ui.model.odata.ODataModel(serviceUrlCSO, true);
			var fullServiceUrlCSO = serviceUrlCSO + "cso_editsoSet?$filter=" + stringToPass + "'";

			busyDialog.open();
			OData.request({ 
		        requestUri: fullServiceUrlCSO,
		        method: "GET", 
		        dataType: 'json',
		        headers: 
		         {
		            "X-Requested-With": "XMLHttpRequest",
		            "Content-Type": "application/json; charset=utf-8",
		            "DataServiceVersion": "2.0", 
		            "X-CSRF-Token":"Fetch"   
		        }          
		      },
		      function (data, response){
		    	  busyDialog.close();	
		    	  oCurrent.getCSOSalesOrders();
		    	  debugger;
		    	  //var message = "Sales Order(s) are deleted successfully";		    	  
		    	  if (status == "Confirmed") {
		    		  var message = "Sales Order(s) not deleted because it's already confirmed";
		            } else {
		               var message = "Sales Order(s) are deleted successfully!";	
		            }
		    	  
		    	  sap.m.MessageBox.alert(message);

		      },function(error){
		    	  busyDialog.close();
		    	  sap.m.MessageBox.alert("Sales Order(s) cannot be deleted!");
		      });

			}

			}

		},
		
// Begin of lines added by Naga on 09.09.2019		
	  		printOrders : function() {
				var stringToPass = "";
				var oCurrent = this;
				var selectedItems = sap.ui.getCore().byId("idCSOTableOrderListHeader").getModel("oCSOModelSalesOrderList").getData();

				var selectedValues = [];
				
				console.log(selectedItems.length);
				var ivbeln = "";
				for (var i = 0; i < selectedItems.length; i++) {
					if(selectedItems[i].selected == true){
				        selTrue = true;
					stringToPass = stringToPass
							+ selectedItems[i].Vbeln + "$*";
					  }
				}

				//pageBilling.getPdfFromSap(stringToPass);
				
				oModel = new sap.ui.model.odata.ODataModel(serviceUrlCSO, true);
				busyDialog.open();
				
				var sRead = "/pdfSet(Billing='" + stringToPass + "')" + "/$value" ;
				   
			       oModel.read( sRead, null, null, true, function(oData, oResponse){
			    	  busyDialog.close();
		              var pdfURL = oResponse.requestUri;            
		              window.open(pdfURL);
			        },function(error){
			        	busyDialog.close();
			            alert("Read failed");
			        });
			       
			},		 
// End of lines added by Naga on 09.09.2019		

	
		getcust : function(uName){
			
			
			sessionStorage.customer = " ";
			var customer = uName;
			
			var urlToSap = "cso_getcustSet(Kunnr='" + customer + "')";
			urlToSap = serviceUrlCSO + urlToSap;
			console.log(urlToSap);
			
			oModel = new sap.ui.model.odata.ODataModel(serviceUrlCSO, true);
			busyDialog.open();
			OData
			.request(
					{
						requestUri : urlToSap,
						method : "GET",
						dataType : 'json',
						headers : {
							"X-Requested-With" : "XMLHttpRequest",
							"Content-Type" : "application/json; charset=utf-8",
							"DataServiceVersion" : "2.0",
							"X-CSRF-Token" : "Fetch"
						}
					},
					function(data, response) {

						oArrayIntTransModelSingleSperson = [];

					//	for (var i = 0; i < data.results.length; i++) {

							
										
									var	BEZEI = data.Kunnr
										
												+ "  "
												+ data.Bezei
												+ "  "
												+ data.Name1
												+ "  "
												+ data.Name2
												+ "\n"
												+ data.Stras
												+ "\n"
												+ data.street4
												+ "  "
												+ data.Telf1
												+ "\n"
												+ data.Ort01												+ " - "
												+ data.Pstlz;
									
					
						
						sap.ui.getCore().byId("idCSOTextArea").setText(BEZEI);
						sessionStorage.customer = data.Kunnr;
//						var customer = sessionStorage.uName.toUpperCase();
					}, function(error) {
						sap.ui.getCore().byId("idCSOTextArea").setText("");
					});

},
getCSOvaluehelp : function(){
	
	
		var oCurrent = this;
//		oCurrent.setInitialValues();
//		var oDeleteDialog = new sap.m.Dialog();
		var oArrayIntCustSearch = [];
//		oDeleteDialog.setTitle("Select Customer Number");
		
//		var oTableDataItems = sap.ui.getCore().getModel("oIntTransModel").getData();
//		
//		for(var i=0; i<oTableDataItems.length; i++)
//		{
//			if (oTableDataItems[i].name === "Material")
//			{					
//				oArrayOfMaterial.push({
//					"MatId"   : oTableDataItems[i].valueP,
//					"MatDesc" : oTableDataItems[i].value,
//				});			
//			}
//		}
		var customer = sap.ui.getCore().byId("idCust").getValue().toUpperCase(); 
		var serviceUrlSperson = serviceUrlCSO+ "cso_getCustSearchSet?$filter=Searchfield eq '" + customer + "'";

			oModel = new sap.ui.model.odata.ODataModel(serviceUrlCSO,true);

			OData.request(
				{
					requestUri : serviceUrlSperson,
					method : "GET",
					dataType : 'json',
					headers : {
						"X-Requested-With" : "XMLHttpRequest",
						"Content-Type" : "application/json; charset=utf-8",
						"DataServiceVersion" : "2.0",
						"X-CSRF-Token" : "Fetch"
					}
				},
				function(data, response) {

					oArrayIntCustSearch = [];

//					for (var i = 0; i < data.results.length; i++) {
						var scustomer = data.results[0].Kunnr;
						
						if(scustomer != ""){
							sap.ui.getCore().byId("idCust").setValue(scustomer);
							var customer = sap.ui.getCore().byId("idCust").getValue().toUpperCase();
							sessionStorage.customer = customer;
							oCurrent.getcust(customer);
							oCurrent.getCSOSalesOrders();
						}else{
							
						}
//						oArrayIntCustSearch.push({
//									"KUNNR" : data.results[i].Kunnr,
//									"NAME" : data.results[i].Kunnr
//									+ " - "
//									+ data.results[i].Name,
//								});
					//}
				});	
//		var oIntCustModel1 = new sap.ui.model.json.JSONModel();
//		oIntCustModel1.setSizeLimit(99);
//		oIntCustModel1.setData(oArrayIntCustSearch);
//		sap.ui.getCore().setModel(oIntCustModel1,"oIntCustModel1")	
//		var oSimpleForm = new sap.ui.layout.form.SimpleForm({         
//			              maxContainerCols : 2,
//			              content : [ new sap.m.Label({
//				                      text : "Customer List"
//			                        }), new sap.m.ComboBox("MatCombo",{
//				                        items: {
//					                            path: "oIntCustModel1>/",      //no curly brackets here!
//					                            template: new sap.ui.core.Item({
//	                                                      key: "{oIntCustModel1>KUNNR}",
//	                                                      text: "{oIntCustModel1>NAME}"
//	                                                      }) ,
//					                            templateShareable: false
//				                                },
//			                            })
//			                         ]
//		                  });
//		
//		oDeleteDialog.addContent(oSimpleForm);
//		oDeleteDialog.addButton(new sap.m.Button({
//			                    text : "Cancel",
//			                    icon : "sap-icon://sys-cancel-2",
//			                    press : function() {
//			                    	    oDeleteDialog.close();
//			                    	    oDeleteDialog.destroy();
//			                    		}
//								}));
//
//		oDeleteDialog.addButton(new sap.m.Button({
//								text : "OK",
////								icon : "sap-icon://",
//								press : function() {
//									
//									
//													var scustomer = sap.ui.getCore().byId("MatCombo").getSelectedKey();
//													if(scustomer != ""){
//														sap.ui.getCore().byId("idCust").setValue(scustomer);
//													}
//													
//													console.log(sap.ui.getCore().byId("idCust").getValue());
//													var content = oSimpleForm.getContent();
//													var oTableDataLines = sap.ui.getCore().getModel("oIntTransModel").getData();
//													var oEntry = {
//																	"item" : sap.ui.getCore().byId("MatCombo").getSelectedKey(),
//																}
//													var sResnum = sap.ui.getCore().byId("idINTPInputRes21").getValue();
//													var sSloc   = sap.ui.getCore().byId("idINTPInputSloc21").getValue();
//													var sDInd = 'X';
//													var serviceUrl = serviceGrc + "res_linecreateSet?$filter=Rsnum eq '" + sResnum + "' and Material eq '" 
//																	+ oEntry.item + "' and Sloc eq '" + sSloc + "' and DeleteInd eq '" + sDInd + "'";		 
//																	oModel = new sap.ui.model.odata.ODataModel(serviceGrc, true);
//																	debugger;
//													OData.request(
//															{
//																requestUri : serviceUrl,
//																method : "GET",
//																dataType : 'json',
//																headers : {
//																	"X-Requested-With" : "XMLHttpRequest",
//																	"Content-Type" : "application/json; charset=utf-8",
//																	"DataServiceVersion" : "2.0",
//																	"X-CSRF-Token" : "Fetch"
//																}
//															},
//															function(data, response) {
//																	sap.m.MessageToast.show("Component Deleted Successfully");
//															},function(error) {
//																console.log(error);
//															}
//													);
//													oMainSplitApp.backDetail();
//			     
//													var oTable = sap.ui.getCore().byId("idIntTransTableLineItems16");
//													oTable.getModel().refresh(true);
//													oDeleteDialog.close();
				
													//var oTableData = sap.ui.getCore().getModel("oIntTransModel").refresh();
//													oDeleteDialog.destroy();
//								}
//				}));
//		oDeleteDialog.open(); 
//				});
//		
},
		getCSOSalesOrders : function(){
			var oCurrent = this;
			var Ernam = uName.toUpperCase();
//			oCurrent.getCSOvaluehelp();
//			var cphone = sap.ui.getCore().byId("idCphone").getValue().toUpperCase();
			var customer = sap.ui.getCore().byId("idCust").getValue().toUpperCase();
//			oCurrent.getcust(customer);
//			sap.ui.getCore().byId("idCust").setValue(sessionStorage.customer);
			
			sap.ui.getCore().byId("idCSOButtonPrint").setVisible(true); 
			var ddate = null;
			ddate = sap.ui.getCore().byId("idCSODateBDate").getValue();
			ddate = ddate.substr(0,4) + "-" + ddate.substr(4,2) + "-" + ddate.substr(6,2) + "T00:00:00";
			
			
			var urlToSap = "cso_getSalesOrdersSet?$filter=Customer eq '"  + customer + 	// "RFC_USER_100"
			"' and Date eq datetime'"  + ddate + "' and Ernam eq '"  + Ernam + "'";
			
			urlToSap = serviceUrlCSO + urlToSap;
			console.log(urlToSap);
			
			oModel = new sap.ui.model.odata.ODataModel(serviceUrlCSO, true);
			busyDialog.open();
			OData.request({ 
		        requestUri: urlToSap,
		        method: "GET", 
		        dataType: 'json',
		        
		        headers: 
		         {
		            "X-Requested-With": "XMLHttpRequest",
		            "Content-Type": "application/json; charset=utf-8",
		            "DataServiceVersion": "2.0", 
		            "X-CSRF-Token":"Fetch"   
		        }          
		      },
		      function (data, response){
		    	  busyDialog.close();
		    	  var orderResult = data.results;
		    	  
		    	  if(orderResult.length == 0){
		    		  console.log("Get Sales Order List URL Success : But nothing returned");
		    		  sap.ui.getCore().byId("idCSOTableOrderListHeader").destroyItems();
//		    		  sap.ui.getCore().byId("idCust").setValue(sessionStorage.customer);
		    	  }else{
		    		  console.log("Get Sales Order List URL Success");
//		    		 sap.ui.getCore().byId("idCust").setValue(sessionStorage.customer);
		    	  var orderTableData = [];
		    	  var delivOn = null;
		    	  var status = "";
		    	  var enabled = true;
		    	  for(var i=0; i<orderResult.length; i++){
		    		  if(orderResult[i].Vdatu != null){
				    		var vMessageDate = orderResult[i].Vdatu.split("(");
						    var vMsgDate = vMessageDate[1].split(")");
						    //var vformattedMessageDate = new Date(Number(vMsgDate[0]));
						    delivOn = dateFormat(new Date(Number(vMsgDate[0])), 'dd-mm-yyyy',"UTC");
		    		  }		    		  
		    		  
		    		  switch(orderResult[i].Statu){
		    			case "C" :
		    				status = "Confirmed";
		    				enabled = true;
		    				break;
		    			case "P" :
		    				status = "In Process";
		    				enabled = true;
		    				break;
		    			case "X" :
		    				status = "Cancelled";
		    				enabled = true;
		    				break;
		    		}
		    		  
					orderTableData.push({
			   			  "Vbeln" : orderResult[i].Vbeln,
			   			  "Ddate" : delivOn,
			   			  "Status" : status,
			   			  "enVbeln" : enabled,
			   			  "selected" : false
			   		  });						
		    	  	}
					
				   	  if(orderTableData.length > 0){
				 			var oCSOModelMaterial = new sap.ui.model.json.JSONModel();
				 			oCSOModelMaterial.setData(orderTableData);
				 			sap.ui.getCore().byId("idCSOTableOrderListHeader").setModel(oCSOModelMaterial, "oCSOModelSalesOrderList");
				 			sap.ui.getCore().byId("idCSOTableOrderListHeader").setVisible(true);
				 			sap.ui.getCore().byId("idCSOButtonNewOrder").setVisible(true);
				 			sap.ui.getCore().byId("idCSOButtonVoid").setVisible(true);
				 			sap.ui.getCore().byId("idCSOButtonEdit").setVisible(true);
				 			sap.ui.getCore().byId("idCSOButtonPrint").setVisible(true); //Added by Naga on 10.09.2019
				 		}else{
				 			sap.ui.getCore().byId("idCSOTableOrderListHeader").setVisible(false);
				 			sap.ui.getCore().byId("idCSOButtonNewOrder").setVisible(true);
				 			sap.ui.getCore().byId("idCSOButtonVoid").setVisible(false);
				 			sap.ui.getCore().byId("idCSOButtonEdit").setVisible(false);
				 			sap.ui.getCore().byId("idCSOButtonPrint").setVisible(false); //Added by Naga on 10.09.2019
				 		}
		    	  }
				   	  
		    	  
		      },
		      function(error){
		    	  console.log("Get Sales Order List URL Failed"); 
		    	  busyDialog.close();
		    	  sap.ui.getCore().byId("idCSOTableOrderListHeader").setVisible(false);
		      });
		},
		
		setCSIValues : function(order,DdateEdit){
			var oCurrent = this;
			globalSalesOrder = order;
			//sessionStorage.uName = "A003";
			var customer = sap.ui.getCore().byId("idCust").getValue().toUpperCase();
			var ddate = null;
			ddate = DdateEdit;
//			sap.ui.getCore().byId("idCIODateRDate").getValue();
			debugger;
			ddate = ddate.substr(6,4) + "-" + ddate.substr(3,2) + "-" + ddate.substr(0,2) + "T00:00:00";
			
			var dddate = ddate.substr(0,4)   + ddate.substr(5,2)   + ddate.substr(8,2);
			sap.ui.getCore().byId("idCIODateRDate").setValue(dddate);
			
			var urlToSap = "cso_getESalesItemsSet?$filter=Customer eq '"  + customer + 	// "RFC_USER_100"
			"' and Date eq datetime'"  + ddate + 
			"' and Vbeln eq '"  + order + 
			"'";
			
			urlToSap = serviceUrlCSO + urlToSap;
			console.log(urlToSap);
			 
			oModel = new sap.ui.model.odata.ODataModel(serviceUrlCSO, true);
			busyDialog.open();
			OData.request({ 
		        requestUri: urlToSap,
		        method: "GET", 
		        dataType: 'json',
		        
		        headers: 
		         {
		            "X-Requested-With": "XMLHttpRequest",
		            "Content-Type": "application/json; charset=utf-8",
		            "DataServiceVersion": "2.0", 
		            "X-CSRF-Token":"Fetch"   
		        }          
		      },
		      function (data, response){
		    	  busyDialog.close();
		    	  var orderResult = data.results;
		    	  
		    	  if(orderResult.length == 0){
		    		  console.log("Get Edit Sales Order Items URL Success : But nothing returned");
		    	  }else{
		    		  console.log("Get Edit Sales Order Items URL Success");
		    		
		    		var finalValue = "Total Amount : " + data.results[0].Final;
		    		sap.ui.getCore().byId("idCIOInputOrderAmount").setValue(data.results[0].Total);
				    sap.ui.getCore().byId("idCIOInputTaxAmount").setValue(data.results[0].Tax);
				    sap.ui.getCore().byId("idCIOPanelAmount").setHeaderText(finalValue);
						   
		    		oSalesOrderLineItems = [];
		  	    	globalTax = data.results[0].Tax;
		  	    	globalTax = parseFloat(parseFloat(globalTax).toFixed(2));

		  	    	for(var i=0; i<data.results.length; i++){ 
		  	    	oSalesOrderLineItems.push({
		  	  			"Item":data.results[i].Posnr,
		  	  			"Material":data.results[i].Matnr,
		  	  			"Description":data.results[i].Maktx,
		  	  			"Qty":(data.results[i].Kwmeng == "")? 0:parseInt(data.results[i].Kwmeng),
		  	  			"Pricing":data.results[i].Kpein,
		  	  			"Packing":data.results[i].PosexE,
		  	  			"Amount":data.results[i].Kbetr,
		  	  	     // "Uom":data.results[i].Kmein, // Commented by Naga on 10.01.2023 we want item proposal uom instead of price uom 
		  	  		    "Uom":data.results[i].Vrkme,  // Included by Naga on 10.01.2023 - For consistance we want follow Item proposal Uom	
		  	  			"Total":data.results[i].Total,
		  	  			"Sunit":data.results[i].Vrkme,
		  	  		   // "Pack":data.results[i].Maxim
		  	  		});
		  	    	}
		  	    	
		  	        var rAlter = true;
		  	  		oArraySalesOrderLineItems = [];
		  	  		
			  	  	for(var i=0; i<oSalesOrderLineItems.length; i++){
			  			/*oArraySalesOrderLineItems.push({
		  					"name" : "Item",
		  					"value" : oSalesOrderLineItems[i].Item,
		  					"valueP" : oSalesOrderLineItems[i].Item,
		  					"whichType" : sap.m.InputType.Text,
		  					"isEditable" : true,
		  					"width" : "35%",
		  					"isSuggest" : false,
		  					"style" : (rAlter == true)?"green" : "yellow",
		  				});*/
	  			
		  				oArraySalesOrderLineItems.push({
		  					"name" : oSalesOrderLineItems[i].Material,
		  					"value" : oSalesOrderLineItems[i].Description,
		  					"valueP" : oSalesOrderLineItems[i].Description,
		  					"whichType" : sap.m.InputType.Text,
		  					"isEditable" : false,
		  					"width" : "95%",
		  					"isSuggest" : false,
		  					"style" : (rAlter == true)?"green" : "yellow",
		  				});
	  				
	  				/*oArraySalesOrderLineItems.push({
	  					"name" : "Description",
	  					"value" : oSalesOrderLineItems[i].Description,
	  					"valueP" : oSalesOrderLineItems[i].Description,
	  					"isEditable" : false,
	  					"whichType" : sap.m.InputType.Text,
	  					"width" : "95%",
	  					"isSuggest" : false,
	  					"style" : (rAlter == true)?"green" : "yellow",
	  				});*/
	  				
	  				oArraySalesOrderLineItems.push({
	  					"name" : "Quantity",
	  					"value" : oSalesOrderLineItems[i].Qty,
	  					"valueP" : oSalesOrderLineItems[i].Qty,
	  					"isEditable" : globalQEditable,
	  					"whichType" : sap.m.InputType.Number,
	  					"width" : "25%",
	  					"isSuggest" : false,
	  					"style" : (rAlter == true)?"green" : "yellow",
	  				});
	  				
	  				/*oArraySalesOrderLineItems.push({
	  					"name" : "Packing",
	  					"value" : oSalesOrderLineItems[i].Packing,
	  					"valueP" : oSalesOrderLineItems[i].Packing,
	  					"isEditable" : false,
	  					"whichType" : sap.m.InputType.Text,
	  					"width" : "55%",
	  					"isSuggest" : false,
	  					"style" : (rAlter == true)?"green" : "yellow",
	  				});
	  				
	  				oArraySalesOrderLineItems.push({
	  					"name" : "Sales Unit",
	  					"value" : oSalesOrderLineItems[i].Sunit,
	  					"valueP" : oSalesOrderLineItems[i].Sunit,
	  					"isEditable" : false,
	  					"whichType" : sap.m.InputType.Text,
	  					"width" : "55%",
	  					"isSuggest" : false,
	  					"style" : (rAlter == true)?"green" : "yellow",
	  				});
	  				
	  				oArraySalesOrderLineItems.push({
	  					"name" : "Amount",
	  					"value" : oSalesOrderLineItems[i].Amount,
	  					"valueP" : oSalesOrderLineItems[i].Amount,
	  					"isEditable" : false,
	  					"whichType" : sap.m.InputType.Text,
	  					"width" : "55%",
	  					"isSuggest" : false,
	  					"style" : (rAlter == true)?"green" : "yellow",
	  				});
	  				
	  				oArraySalesOrderLineItems.push({
	  					"name" : "Total",
	  					"value" : oSalesOrderLineItems[i].Total,
	  					"valueP" : oSalesOrderLineItems[i].Total,
	  					"isEditable" : false,
	  					"whichType" : sap.m.InputType.Text,
	  					"width" : "55%",
	  					"isSuggest" : false,
	  					"style" : (rAlter == true)?"green" : "yellow",
	  				});
	  				
	  				oArraySalesOrderLineItems.push({
	  					"name" : "Pricing",
	  					"value" : oSalesOrderLineItems[i].Pricing,
	  					"valueP" : oSalesOrderLineItems[i].Pricing,
	  					"isEditable" : false,
	  					"whichType" : sap.m.InputType.Text,
	  					"width" : "55%",
	  					"isSuggest" : false,
	  					"style" : (rAlter == true)?"green" : "yellow",
	  				});*/
	  				
	  				oArraySalesOrderLineItems.push({
	  					"name" : "UOM",
	  					"value" : oSalesOrderLineItems[i].Uom,
	  					"valueP" : oSalesOrderLineItems[i].Uom,
	  					"isEditable" : false,
	  					"whichType" : sap.m.InputType.Text,
	  					"width" : "55%",
	  					"isSuggest" : false,
	  					"style" : (rAlter == true)?"green" : "yellow",
	  				});
	  				
	          	/*
			  	  oArraySalesOrderLineItems.push({	
					"name" : "Pack Size",
  					"value" : oSalesOrderLineItems[i].Pack,
  					"valueP" : oSalesOrderLineItems[i].Pack,
  					"isEditable" : false,
  					"whichType" : sap.m.InputType.Number,
  					"width" : "25%",
  					"isSuggest" : false,
  					"style" : (rAlter == true)?"green" : "yellow",
  				});*/
          	   rAlter = (rAlter == true)?false : true;
  			}
	  		
				var oCIOTableLineItems = sap.ui.getCore().byId("idCIOTableLineItems");
				oCIOTableLineItems.setVisible(true);
				
				
		      	/* var oModelSalesOrderTableLineItems = new sap.ui.model.json.JSONModel();
		      	oModelSalesOrderTableLineItems.setSizeLimit(99999);
		      	oModelSalesOrderTableLineItems.setData(oArraySalesOrderLineItems);
		  		
		      	oSalesOrderTableLineItems.setModel(oModelSalesOrderTableLineItems); */
				
				var oCIOSalesItemModel = new sap.ui.model.json.JSONModel();
		      	oCIOSalesItemModel.setSizeLimit(99999);
		      	oCIOSalesItemModel.setData(oArraySalesOrderLineItems);
	  		
		  		//var oCSOTableLineItems = new sap.ui.getCore().byId("idCSOTableLineItemsM");
		  		//oCSOTableLineItems.setModel(oDdlMaterialModel);
		  		sap.ui.getCore().setModel(oCIOSalesItemModel,"oCIOSalesItemModel");
		  		oCurrent.updateTotalLineItems1();
		  		sap.ui.getCore().byId("idCIOTableLineItemsHeaderToolSaveButton").setVisible(false);
		  		sap.ui.getCore().byId("idCust1").setValue( sap.ui.getCore().byId("idCust").getValue().toUpperCase());
		  		app.to("idPageCIO"); 
		    	}
				   	  
		    	  
		      },
		      function(error){
		    	  console.log("Get Edit Sales Order List URL Failed"); 
		    	  busyDialog.close();
		    	  sap.ui.getCore().byId("idCSOTableOrderListHeader").setVisible(false);
		      });
			
		},
		
		
		getCSOSalesOrdersDetails : function(dateReq){
			var oCurrent = this;
			//sessionStorage.uName = "A003";
			debugger;
			var customer =  sap.ui.getCore().byId("idCust").getValue().toUpperCase();
				//sessionStorage.uName.toUpperCase();
			var ddate = null;
			ddate = sap.ui.getCore().byId("idCIODateRDate").getValue();
			ddate = ddate.substr(0,4) + "-" + ddate.substr(4,2) + "-" + ddate.substr(6,2) + "T00:00:00";
			
			
			var urlToSap = "cso_getSalesItemsSet?$filter=Customer eq '"  + customer + 	// "RFC_USER_100"
			"' and Date eq datetime'"  + ddate + 
			"'";
			
			urlToSap = serviceUrlCSO + urlToSap;
			console.log(urlToSap);
			
			oModel = new sap.ui.model.odata.ODataModel(serviceUrlCSO, true);
			busyDialog.open();
			OData.request({ 
		        requestUri: urlToSap,
		        method: "GET", 
		        dataType: 'json',
		        
		        headers: 
		         {
		            "X-Requested-With": "XMLHttpRequest",
		            "Content-Type": "application/json; charset=utf-8",
		            "DataServiceVersion": "2.0", 
		            "X-CSRF-Token":"Fetch"   
		        }          
		      },
		      function (data, response){
		    	  busyDialog.close();
		    	  var orderResult = data.results;
		    	  
		    	  if(orderResult.length == 0){
		    		  console.log("Get Sales Order Items URL Success : But nothing returned");
		    	  }else{
		    		  console.log("Get Sales Order Items URL Success");
		    	  
		    		oSalesOrderLineItems = [];
		  	    	globalTax = data.results[0].Tax;
		  	    	globalTax = parseFloat(parseFloat(globalTax).toFixed(2));
		  	    	for(var i=0; i<data.results.length; i++){ 
		  	    	oSalesOrderLineItems.push({
		  	  			"Item":data.results[i].Posnr,
		  	  			"Material":data.results[i].Matnr,
		  	  			"Description":data.results[i].Maktx,
		  	  			"Qty":(data.results[i].Kwmeng == "")? 0:parseInt(data.results[i].Kwmeng),
		  	  			"Pricing":data.results[i].Kpein,
		  	  			"Packing":data.results[i].PosexE,
		  	  			"Amount":data.results[i].Kbetr,
		  	  		//  "Uom":data.results[i].Kmein,  // Commented by Naga on 10.01.2023 we want item proposal uom instead of price uom 
		  	  		    "Uom":data.results[i].Vrkme,  // Included by Naga on 10.01.2023 - For consistance we want follow Item proposal Uom
		  	  			"Total":data.results[i].Total,
		  	  			"Sunit":data.results[i].Vrkme,
		  	  			//"Pack":data.results[i].Maxim
		  	  		});
		  	    	}
		  	    	
		  	        var rAlter = true;
		  	  		oArraySalesOrderLineItems = [];
		  	  		
			  	  	for(var i=0; i<oSalesOrderLineItems.length; i++){
			  			/*oArraySalesOrderLineItems.push({
		  					"name" : "Item",
		  					"value" : oSalesOrderLineItems[i].Item,
		  					"valueP" : oSalesOrderLineItems[i].Item,
		  					"whichType" : sap.m.InputType.Text,
		  					"isEditable" : true,
		  					"width" : "35%",
		  					"isSuggest" : false,
		  					"style" : (rAlter == true)?"green" : "yellow",
		  				});*/
	  			
		  				oArraySalesOrderLineItems.push({
		  					"name" : oSalesOrderLineItems[i].Material,
		  					"value" : oSalesOrderLineItems[i].Description,
		  					"valueP" : oSalesOrderLineItems[i].Description,
		  					"whichType" : sap.m.InputType.Text,
		  					"isEditable" : false,
		  					"width" : "95%",
		  					"isSuggest" : false,
		  					"style" : (rAlter == true)?"green" : "yellow",
		  				});
	  				
	  				/*oArraySalesOrderLineItems.push({
	  					"name" : "Description",
	  					"value" : oSalesOrderLineItems[i].Description,
	  					"valueP" : oSalesOrderLineItems[i].Description,
	  					"isEditable" : false,
	  					"whichType" : sap.m.InputType.Text,
	  					"width" : "95%",
	  					"isSuggest" : false,
	  					"style" : (rAlter == true)?"green" : "yellow",
	  				});*/
	  				
		  		
		  				
	  				oArraySalesOrderLineItems.push({
	  					"name" : "Quantity",
	  					"value" : oSalesOrderLineItems[i].Qty,
	  					"valueP" : oSalesOrderLineItems[i].Qty,
	  					"isEditable" : true,
	  					"whichType" : sap.m.InputType.Number,
	  					"width" : "25%",
	  					"isSuggest" : false,
	  					"style" : (rAlter == true)?"green" : "yellow",
	  				});
	  				
	  				/*oArraySalesOrderLineItems.push({
	  					"name" : "Packing",
	  					"value" : oSalesOrderLineItems[i].Packing,
	  					"valueP" : oSalesOrderLineItems[i].Packing,
	  					"isEditable" : false,
	  					"whichType" : sap.m.InputType.Text,
	  					"width" : "55%",
	  					"isSuggest" : false,
	  					"style" : (rAlter == true)?"green" : "yellow",
	  				});*/
	  				
	  				/*oArraySalesOrderLineItems.push({
	  					"name" : "Sales Unit",
	  					"value" : oSalesOrderLineItems[i].Sunit,
	  					"valueP" : oSalesOrderLineItems[i].Sunit,
	  					"isEditable" : false,
	  					"whichType" : sap.m.InputType.Text,
	  					"width" : "55%",
	  					"isSuggest" : false,
	  					"style" : (rAlter == true)?"green" : "yellow",
	  				});
	  				
	  				oArraySalesOrderLineItems.push({
	  					"name" : "Amount",
	  					"value" : oSalesOrderLineItems[i].Amount,
	  					"valueP" : oSalesOrderLineItems[i].Amount,
	  					"isEditable" : false,
	  					"whichType" : sap.m.InputType.Text,
	  					"width" : "55%",
	  					"isSuggest" : false,
	  					"style" : (rAlter == true)?"green" : "yellow",
	  				});
	  				
	  				oArraySalesOrderLineItems.push({
	  					"name" : "Total",
	  					"value" : oSalesOrderLineItems[i].Total,
	  					"valueP" : oSalesOrderLineItems[i].Total,
	  					"isEditable" : false,
	  					"whichType" : sap.m.InputType.Text,
	  					"width" : "55%",
	  					"isSuggest" : false,
	  					"style" : (rAlter == true)?"green" : "yellow",
	  				});
	  				
	  				oArraySalesOrderLineItems.push({
	  					"name" : "Pricing",
	  					"value" : oSalesOrderLineItems[i].Pricing,
	  					"valueP" : oSalesOrderLineItems[i].Pricing,
	  					"isEditable" : false,
	  					"whichType" : sap.m.InputType.Text,
	  					"width" : "55%",
	  					"isSuggest" : false,
	  					"style" : (rAlter == true)?"green" : "yellow",
	  				});
	  				*/
	  				oArraySalesOrderLineItems.push({
	  					"name" : "UOM",
	  					"value" : oSalesOrderLineItems[i].Uom,
	  					"valueP" : oSalesOrderLineItems[i].Uom,
	  					"isEditable" : false,
	  					"whichType" : sap.m.InputType.Text,
	  					"width" : "55%",
	  					"isSuggest" : false,
	  					"style" : (rAlter == true)?"green" : "yellow",
	  				});
	  				
	  				/*oArraySalesOrderLineItems.push({
	  					"name" : "Pack Size",
	  					"value" : oSalesOrderLineItems[i].Pack,
	  					"valueP" : oSalesOrderLineItems[i].Pack,
	  					"isEditable" : false,
	  					"whichType" : sap.m.InputType.Number,
	  					"width" : "25%",
	  					"isSuggest" : false,
	  					"style" : (rAlter == true)?"green" : "yellow",
	  				});*/
	          	   rAlter = (rAlter == true)?false : true;
	  			}
	  		
				var oCIOTableLineItems = sap.ui.getCore().byId("idCIOTableLineItems");
				oCIOTableLineItems.setVisible(true);
				
				
		      	/* var oModelSalesOrderTableLineItems = new sap.ui.model.json.JSONModel();
		      	oModelSalesOrderTableLineItems.setSizeLimit(99999);
		      	oModelSalesOrderTableLineItems.setData(oArraySalesOrderLineItems);
		  		
		      	oSalesOrderTableLineItems.setModel(oModelSalesOrderTableLineItems); */
				
				var oCIOSalesItemModel = new sap.ui.model.json.JSONModel();
		      	oCIOSalesItemModel.setSizeLimit(99999);
		      	oCIOSalesItemModel.setData(oArraySalesOrderLineItems);
	  		
		  		//var oCSOTableLineItems = new sap.ui.getCore().byId("idCSOTableLineItemsM");
		  		//oCSOTableLineItems.setModel(oDdlMaterialModel);
		  		sap.ui.getCore().setModel(oCIOSalesItemModel,"oCIOSalesItemModel");
		  		oCurrent.updateTotalLineItems();
		  		app.to("idPageCIO"); 
		    	  }
				   	  
		    	  
		      },
		      function(error){
		    	  console.log("Get Sales Order List URL Failed"); 
		    	  busyDialog.close();
		    	  sap.ui.getCore().byId("idCSOTableOrderListHeader").setVisible(false);
		      });
			
		},
		
		updateTotalLineItems : function(){
			
			var totalAmount = 0;
			var finalAmount = 0;
			sap.ui.getCore().byId("idCIOTableLineItems").getModel("oCIOSalesItemModel").updateBindings();
			
			for(var i=0; i<oArraySalesOrderLineItems.length; i=i+3){
				var temp = jQuery.grep(oSalesOrderLineItems, function(element, index){
		            return element.Material == oArraySalesOrderLineItems[i+0].name;
		    	});
				if(temp.length > 0){
					totalAmount = totalAmount + parseFloat(parseFloat((parseInt(oArraySalesOrderLineItems[i+1].value) * parseFloat(temp[0].Amount))).toFixed(2));
				}
				//oArraySalesOrderLineItems[i+6].value = parseFloat(parseFloat((parseInt(oArraySalesOrderLineItems[i+2].value) * parseFloat(oArraySalesOrderLineItems[i+5].value))).toFixed(2));
				//totalAmount = totalAmount + oArraySalesOrderLineItems[i+6].value;
			}
			totalAmount =  parseFloat(totalAmount).toFixed(2);  
			var taxAmount = 0,taxcode = 0;
			var taxcode = parseFloat((globalTax / 100).toFixed(2));// Changed by Visithra on 09.01.2023
			
			if (globalNew != true){  //Changed by Visithra on 10.09.2020
		//	taxAmount = parseFloat(globalTax).toFixed(2);} // Changed by Naga on 01.02.24
			taxAmount = parseFloat(parseFloat(totalAmount * taxcode).toFixed(2));}
			else{
				//taxAmount =parseFloat(parseFloat(totalAmount * 0.07).toFixed(2));
				taxAmount =parseFloat(parseFloat(totalAmount * taxcode).toFixed(2));
			}
			var tAmount = parseFloat(taxAmount) + parseFloat(totalAmount);
			finalAmount = parseFloat(parseFloat(tAmount).toFixed(2));
			finalAmount = "Total Amount : " + finalAmount;
			
			sap.ui.getCore().byId("idCIOInputOrderAmount").setValue(totalAmount);
			sap.ui.getCore().byId("idCIOInputTaxAmount").setValue(taxAmount);
			sap.ui.getCore().byId("idCIOPanelAmount").setHeaderText(finalAmount);
			sap.ui.getCore().byId("idCIOTableLineItems").getModel("oCIOSalesItemModel").updateBindings();
			
			if(totalAmount > 0){
				//if(status == "In Process"){
				//console.log(globalQEditable);
				//** Added By Visithra on 27.08.2020
				if(globalQEditable === true){ 
					 sap.ui.getCore().byId("idCIOTableLineItemsHeaderToolSaveButton").setVisible(true);
				}
			
		}
	    	  
		},
		
updateTotalLineItems1 : function(){
			
			var totalAmount = 0;
			var finalAmount = 0;
			sap.ui.getCore().byId("idCIOTableLineItems").getModel("oCIOSalesItemModel").updateBindings();
			
			for(var i=0; i<oArraySalesOrderLineItems.length; i=i+3){
				var temp = jQuery.grep(oSalesOrderLineItems, function(element, index){
		            return element.Material == oArraySalesOrderLineItems[i+0].name;
		    	});
				if(temp.length > 0){
					totalAmount = totalAmount + parseFloat(parseFloat((parseInt(oArraySalesOrderLineItems[i+1].value) * parseFloat(temp[0].Amount))).toFixed(2));
				}
				//oArraySalesOrderLineItems[i+6].value = parseFloat(parseFloat((parseInt(oArraySalesOrderLineItems[i+2].value) * parseFloat(oArraySalesOrderLineItems[i+5].value))).toFixed(2));
				//totalAmount = totalAmount + oArraySalesOrderLineItems[i+6].value;
			}
			
			debugger;
			var taxAmount = 0;
			//var taxAmount = parseFloat(globalTax).toFixed(2);
			finalAmount = 0;
			finalAmount = "Total Amount : " + totalAmount;
		//	taxAmount = globalTax;
			
			taxAmount = parseFloat((totalAmount * globalTax / 100).toFixed(2));
			
			sap.ui.getCore().byId("idCIOInputOrderAmount").setValue(totalAmount);
			sap.ui.getCore().byId("idCIOInputTaxAmount").setValue(taxAmount);
			sap.ui.getCore().byId("idCIOPanelAmount").setHeaderText(finalAmount);
	
			sap.ui.getCore().byId("idCIOTableLineItems").getModel("oCIOSalesItemModel").updateBindings();
			
			if(totalAmount > 0){
				//** Added By Visithra on 27.08.2020
				if(globalQEditable === true){
					sap.ui.getCore().byId("idCIOTableLineItemsHeaderToolSaveButton").setVisible(true);
				}
		}
	    	  
		},
		
		/* *************************** ****** + Sales Order Item Section + ****** *************************** */
		
		createCIOPageM : function(){
			
			/* Required Delivery Date */
		    var oCurrent = this;
			var oCIOLabelDate = new sap.m.Label("idCIOLabelDate",{
				text : " Delivery Date : ",
				//labelFor: oHSODateDate,
				//required: true,
				width : "130px"
	 			}).addStyleClass("selectionLabels");
			
			var toDate = new Date();
			toDate.setDate(toDate.getDate() + 1);
			
		    var mDate = { someDate: toDate };
		    
			var oCIODateRDate = new sap.m.DateTimeInput("idCIODateRDate",{  
		        //type: sap.m.DateTimeInputType.DateTime,
		    	width: "150px",
		        displayFormat : "dd/MM/yyyy",
		        valueFormat : "yyyyMMdd", 
		        change: function(oEvent){
		            var bValid   = oEvent.getParameter("newDateValue");
		            var date = oEvent.getParameter("value");
		            var TodaysDate=new Date();
		            var MOnTh=TodaysDate.getMonth();
		            var YEaRs=TodaysDate.getFullYear();
		                  var DAte=TodaysDate.getDate();
		                 // var value=this.byId("Date_iD");
		                  var selectDate=bValid;
		           var MOnTh1=selectDate.getMonth();
		            var YEaRs1=selectDate.getFullYear();
		               var DAte1=selectDate.getDate();
		               var date=DAte1-DAte;
		             var month=MOnTh1-MOnTh;
		             var year=YEaRs1-YEaRs;
		             var total=date+month*30+year*365;
		             if(DAte==31) {
		             var total=date+month*31+year*365;
		             }
		               if(total==0)
		                {
		                sap.m.MessageToast.show("Warning ! Delivery Date is Today!");
		                /*var toDate = new Date();
		    			toDate.setDate(toDate.getDate() + 1);
		    			
		    		    var mDate = { someDate: toDate };
		    		    oCIODateRDate.setModel(new sap.ui.model.json.JSONModel(mDate));  
		    			oCIODateRDate.bindProperty("dateValue", "/someDate"); */
		    			
		                return;
		                }
		               if(total<0)
		                {
		                /*sap.m.MessageToast.show("Date can't be in Past");
		                var toDate = new Date();
		    			toDate.setDate(toDate.getDate() + 1);
		    			
		    		    var mDate = { someDate: toDate };
		    		    oCIODateRDate.setModel(new sap.ui.model.json.JSONModel(mDate));  
		    			oCIODateRDate.bindProperty("dateValue", "/someDate"); 
		    			
		                return;*/
		                }
		                }
		    }).addStyleClass("marginRight15");
			
			oCIODateRDate.setModel(new sap.ui.model.json.JSONModel(mDate));  
			oCIODateRDate.bindProperty("dateValue", "/someDate"); 
			var oCSOSperson1 = new sap.m.Input("idCust1",{
				width : "150px",
			    editable : false
			}).addStyleClass("marginRight15");
			var oCIOFlexDate = new sap.m.FlexBox("idCIOFlexDate",{
		         items: [oCIOLabelDate,
		                 oCIODateRDate,
		                 oCSOSperson1
						 ],
		         direction: "Row"
			  });
			
			
			/* Amount Panel */
			
			var oCIOInputOrderAmount = new sap.m.Input("idCIOInputOrderAmount",{/*value:"ztest_seadm",*/
				editable : false,
	            //width : "150px",
	            type: sap.m.InputType.Number,
	            liveChange: function(oEvent){
	            	
	            },
			});//.addStyleClass("marginTop14 marginRight5 totalAmountText");
			
			var oCIOLabelOrderAmount = new sap.m.Label("idCIOLabelOrderAmount",{
				text : "Order Amount : ",
				labelFor: oCIOInputOrderAmount,
				//required: true,
				width : "150px"
	 			}).addStyleClass("selectionLabels");
			
			var oCIOFlexOrderAmount = new sap.m.FlexBox("idCIOFlexOrderAmount",{
		         items: [oCIOLabelOrderAmount,
		                 oCIOInputOrderAmount
						 ],
		         direction: "Row"
			  });
			
			var oCIOInputTaxAmount = new sap.m.Input("idCIOInputTaxAmount",{/*value:"ztest_seadm",*/
				editable : false,
	            //width : "150px",
	            type: sap.m.InputType.Number,
	            liveChange: function(oEvent){
	            	
	            },
			});//.addStyleClass("marginTop14 marginRight5 totalAmountText");
			
			var oCIOLabelTaxAmount = new sap.m.Label("idCIOLabelTaxAmount",{
				text : "Tax Amount : ",
				labelFor: oCIOInputTaxAmount,
				//required: true,
				width : "150px"
	 			}).addStyleClass("selectionLabels");
			
			var oCIOFlexTaxAmount = new sap.m.FlexBox("idCIOFlexTaxAmount",{
		         items: [oCIOLabelTaxAmount,
		                 oCIOInputTaxAmount
						 ],
		         direction: "Row"
			  });
			
			var oCIOFlexPanelContent = new sap.m.FlexBox("idCIOFlexPanelContent",{
		         items: [oCIOFlexOrderAmount,
		                 oCIOFlexTaxAmount
						 ],
		         direction: "Column"
			  });
			
			/*var oCIOLabelPanelHeaderText = new sap.m.Text("idCIOLabelPanelHeaderText",{
				text : "Total Amount : 0.00",
				//required: true,
				//width : "100px"
	 			}).addStyleClass("selectionLabels");*/
			
			var oCIOPanelAmount = new sap.m.Panel({
				id : "idCIOPanelAmount", // sap.ui.core.ID
				busy : false, // boolean
				busyIndicatorDelay : 1000, // int
				visible : true, // boolean
				headerText : "Total Amount : 0.00", // string
				width : (isMobile.any())?"97%" : "100%", // sap.ui.core.CSSSize
				height : "auto", // sap.ui.core.CSSSize
				expandable : true, // boolean, since 1.22
				expanded : false, // boolean, since 1.22
				expandAnimation : true, // boolean, since 1.26
				tooltip : "Total Amount", // sap.ui.core.TooltipBase
				content : [oCIOFlexPanelContent], // sap.ui.core.Control
			});
			
			
			/* Sales Order Items Section */
	  		
		    var oCIOTableCustomData = new sap.ui.core.CustomData({
		    												key:"myColumns",
		    												writeToDom: true});
		    oCIOTableCustomData.bindProperty("value", "oCIOSalesItemModel>style");
		    
			var oCIOTableLineItemsHeaderToolButton = new sap.m.Button("idCIOTableLineItemsHeaderToolButton",{
		          text : "Check Total",
		          styled:false,
		          width:"100px",
		          press:function(){
		        	  sap.ui.getCore().byId("idCIODateRDate").focus();
		        	  debugger;
		        	  oCurrent.updateTotalLineItems();
		          }
			}).addStyleClass("toolbarBtn");
			
			var oCIOTableLineItemsHeaderToolSaveButton = new sap.m.Button("idCIOTableLineItemsHeaderToolSaveButton",{
		          text : "Save",
		          styled:false,
		          width:"100px",
		          press:function(){
		        	  sap.ui.getCore().byId("idCIODateRDate").focus();
		        	  oCurrent.validate();
		        	  
		          }
			}).addStyleClass("toolbarBtn");
			
			var oCIOTableLineItemsHeaderTool = new sap.m.Toolbar("idCIOTableLineItemsHeaderTool",{
				content : [	new sap.m.Label({
					text : "Line Items",
					//labelFor: oHSODateDate,
					//required: true,
					width : "100px"
		 			}).addStyleClass("selectionLabels"),
		 			oCIOTableLineItemsHeaderToolButton,
		 			oCIOTableLineItemsHeaderToolSaveButton],
				//design : sap.m.ToolbarDesign.Info
			});
						
	  		var oCIOTableLineItems = new sap.m.Table("idCIOTableLineItems", {
				width : "100%",
				visible : false,
				headerToolbar : oCIOTableLineItemsHeaderTool,
				headerText : "Line Items",
				columns: [	
						
			           new sap.m.Column({
			        	   width: "25%"
				       }),
						               
			           new sap.m.Column({
			        	   width: "70%",
//				           header: new sap.m.Text({
//				           text: ""
//				           })
				       }),
				   ],
				        
				      items : {
				      path: 'oCIOSalesItemModel>/',
				      template: new sap.m.ColumnListItem({
				      customData : oCIOTableCustomData,
				      selected: false,
				      //type: "Active",
				      cells: [			                
			                new sap.m.Text({
			                	text: "{oCIOSalesItemModel>name}"
				            }),
				            
				            new sap.m.Input({
				            	value: "{oCIOSalesItemModel>value}",
				                editable:"{oCIOSalesItemModel>isEditable}",
				                type:"{oCIOSalesItemModel>whichType}",
				                width: "{oCIOSalesItemModel>width}",
				               
				            })
				          ]
				          })
	  					  }
	  		}).addStyleClass('sapUiSizeCompact'); 
			
	  		/* Final Content */
			var oCIOFlexContent = new sap.m.FlexBox("idCIOFlexContent",{
		         items: [oCIOFlexDate,
		                 oCIOPanelAmount, 
		                 oCIOTableLineItems
						 ],
		         direction: "Column"
			  });
			
	         return oCIOFlexContent;
	         
		},
		
		validate : function(){
			var oCurrent = this;
			var stringToPass = "";
			var stringCount = 1;
			var stringCounts = 0;
			var newLine = true;
			
			
			//sessionStorage.uName = "A003";
			var customer = sap.ui.getCore().byId("idCust").getValue().toUpperCase();
			var ddate = null;
			ddate = sap.ui.getCore().byId("idCIODateRDate").getValue();
			var date  = sap.ui.getCore().byId("idCIODateRDate").getDateValue();
			ddate = ddate.substr(0,4) + "-" + ddate.substr(4,2) + "-" + ddate.substr(6,2) + "T00:00:00";
			stringToPass = stringToPass + "Customer eq '" + customer + "' and Date eq datetime'"  + ddate + "'";
			//var urlToSap = "van_delivSet?$filter=Ivbeln eq '"  + ivbeln + "'";
			var urlToSap = "cso_offdaySet(Customer='" + customer + "',Date=datetime'" + ddate + "')";
			
			urlToSap = serviceUrlCSO + urlToSap;
			console.log(urlToSap);
			
			oModel = new sap.ui.model.odata.ODataModel(serviceUrlCSO, true);
			busyDialog.open();
			OData.request({ 
		        requestUri: urlToSap,
		        method: "GET", 
		        dataType: 'json',
		        
		        headers: 
		         {
		            "X-Requested-With": "XMLHttpRequest",
		            "Content-Type": "application/json; charset=utf-8",
		            "DataServiceVersion": "2.0", 
		            "X-CSRF-Token":"Fetch"   
		        }          
		      },
		      function (data, response){
		    	  debugger;
		    	  busyDialog.close();
		    	  
		    	  if(data.Msg == 'X'){
		    		  sap.m.MessageBox.alert("It's Off Day");
		    	  }else{
		    		  //window.open(data.Url);
		    		  //oCurrent.getPdfFromSap(data.Border);
		    		  oCurrent.saveSalesOrder();
		    	  }
		      },
		      function(error){
		    	  console.log("Get Sales Order List URL Failed"); 
		    	  busyDialog.close();
		    	  //sap.ui.getCore().byId("idCSOTableOrderListHeader").setVisible(false);
		      });
			
		},
		
		saveSalesOrder : function(){
			var oCurrent = this;
			var stringToPass = "";
			var stringCount = 1;
			var stringCounts = 0;
			var newLine = true;
			
			
			//sessionStorage.uName = "A003";
			var ernam = uName.toUpperCase();
			var customer =  sap.ui.getCore().byId("idCust").getValue().toUpperCase();
			var ddate = null;
			ddate = sap.ui.getCore().byId("idCIODateRDate").getValue();
			var date  = sap.ui.getCore().byId("idCIODateRDate").getDateValue();
		
			// var bValid   = oEvent.getParameter("newDateValue");
	         
	            var TodaysDate=new Date();
	            var MOnTh=TodaysDate.getMonth();
	            var YEaRs=TodaysDate.getFullYear();
	                  var DAte=TodaysDate.getDate();
	                 // var value=this.byId("Date_iD");
	                  var selectDate=date;
	           var MOnTh1=selectDate.getMonth() + 1;
	            var YEaRs1=selectDate.getFullYear();
	               var DAte1=selectDate.getDate();
	               
	               var hours = selectDate.getHours();
	               if (hours < 10) {
	            	   hours = "0" + hours;
	   		    }
	               var min = selectDate.getMinutes();
	               if (min < 10) {
	            	   min = "0" + min;
	   		    }
	               var sec = selectDate.getSeconds();
	               if (sec < 10) {
	            	   sec = "0" + sec;
	   		    }
	               var ampm = hours >= 12 ? 'PM' : 'AM';
	               var date=DAte1-DAte;
	             var month=MOnTh1-MOnTh;
	             var year=YEaRs1-YEaRs;
	             var total=date+month*30+year*365;
	            var today = hours + ":" + min + ":" + sec + " " + ampm;
	            var years = DAte1 + ":" + MOnTh1 + ":" + YEaRs1 ;
	            /* if( today > "17:00:00 PM" ){
	            	  sap.m.MessageToast.show("Please call office for tomorrow orders after 5pm");
	            	  return;
	             }*/
	             if(DAte==31) {
		             var total=date+month*31+year*365;
		             }
	               if(total==0)
	                {
	                sap.m.MessageToast.show("Date can't be in Current");
	                var toDate = new Date();
	    			toDate.setDate(toDate.getDate() + 1);
	    			
	    		    var mDate = { someDate: toDate };
	    		    oCIODateRDate.setModel(new sap.ui.model.json.JSONModel(mDate));  
	    			oCIODateRDate.bindProperty("dateValue", "/someDate"); 
	    			
	                return;
	                ddate = ddate.substr(0,4) + "-" + ddate.substr(4,2) + "-" + ddate.substr(6,2) + "T00:00:00";
	    			stringToPass = stringToPass + "Customer eq '" + customer + "' and Date eq datetime'"  + ddate  + "' and Ernam eq '"  + ernam +
	    			"'";
	    			var urlToSap = "cso_getSalesOrdersSet?$filter=Customer eq '"  + customer + 	// "RFC_USER_100"
	    			"' and Date eq datetime'"  + ddate + "' and Ernam eq '"  + ernam +
	    			"'";
	    			
	    			oArraySalesOrderLineItemsSub = [];
	    			var cc = 1;
	    			for(var i =0; i < oArraySalesOrderLineItems.length; i=i+3){
	    				oArraySalesOrderLineItemsSub.push({
	    					Item : cc,
	    					Material : oArraySalesOrderLineItems[i].name,
	    					//Description : oArraySalesOrderLineItems[i].value,
	    					Qty : oArraySalesOrderLineItems[i+1].value,
	    					//Packing : oArraySalesOrderLineItems[i+3].value,
	    					//Sunit : oArraySalesOrderLineItems[i+4].value,
	    					//Amount : oArraySalesOrderLineItems[i+5].value,
	    					//Total : oArraySalesOrderLineItems[i+6].value,
	    					//Pricing : oArraySalesOrderLineItems[i+7].value,
	    					Uom : oArraySalesOrderLineItems[i+2].value,
	    					//Posnr : oArraySalesOrderLineItems[i].value,
	    				});
	    				cc = cc + 1;
	    			}
	    			

	    			for(var i =0; i < oArraySalesOrderLineItemsSub.length; i++){
	    				if((oArraySalesOrderLineItemsSub[i].Qty != "") && (parseFloat(oArraySalesOrderLineItemsSub[i].Qty) != 0)){
	    				if(newLine == true){
	    					stringToPass = stringToPass + " and Isales" + 
	    					stringCount + " eq '" + 
	    					String(parseInt(oArraySalesOrderLineItemsSub[i].Item)) + "$*" + 
	    					oArraySalesOrderLineItemsSub[i].Material + "$*" +
	    					oArraySalesOrderLineItemsSub[i].Qty + "$*" +
	    					//oArraySalesOrderLineItemsSub[i].Packing + "$*" + 
	    					//oArraySalesOrderLineItemsSub[i].Sunit + "$*" + 
	    					//oArraySalesOrderLineItemsSub[i].Amount + "$*" + 
	    					//oArraySalesOrderLineItemsSub[i].Total + "$*" + 
	    					//oArraySalesOrderLineItemsSub[i].Pricing + "$*" + 
	    					oArraySalesOrderLineItemsSub[i].Uom + 
	    					"$*";
	    					//"'";
	    				}else{
	    					stringToPass = stringToPass +
	    					String(parseInt(oArraySalesOrderLineItemsSub[i].Item)) + "$*" + 
	    					oArraySalesOrderLineItemsSub[i].Material + "$*" +
	    					oArraySalesOrderLineItemsSub[i].Qty + "$*" +
	    					//oArraySalesOrderLineItemsSub[i].Packing + "$*" + 
	    					//oArraySalesOrderLineItemsSub[i].Sunit + "$*" + 
	    					//oArraySalesOrderLineItemsSub[i].Amount + "$*" + 
	    					//oArraySalesOrderLineItemsSub[i].Total + "$*" + 
	    					//oArraySalesOrderLineItemsSub[i].Pricing + "$*" + 
	    					oArraySalesOrderLineItemsSub[i].Uom + 
	    					"$*";
	    					//"'";
	    				}
	    				stringCounts++;
	    				newLine = false;
	    				if(stringCounts == 20){
	    					stringToPass = stringToPass + "'";
	    					stringCount = stringCount + 1;
	    					newLine = true;
	    				}
	    				if(i == (oArraySalesOrderLineItemsSub.length - 1))
	    					stringToPass = stringToPass + "'";
	    				}
	    			}
	    			
	    			
	    			oModel = new sap.ui.model.odata.ODataModel(serviceUrlCSO, true);
	    			
	    			if(globalEdit == false){
	    			var fullServiceUrlCSO = serviceUrlCSO + "cso_createsoSet?$filter=" + stringToPass + "'";
	    			console.log(fullServiceUrlCSO);
	    			busyDialog.open();
	    			OData.request({ 
	    		        requestUri: fullServiceUrlCSO,
	    		        method: "GET", 
	    		        dataType: 'json',
	    		        headers: 
	    		         {
	    		            "X-Requested-With": "XMLHttpRequest",
	    		            "Content-Type": "application/json; charset=utf-8",
	    		            "DataServiceVersion": "2.0", 
	    		            "X-CSRF-Token":"Fetch"   
	    		        }          
	    		      },
	    		      function (data, response){
	    		    	  busyDialog.close();	
	    		    	  
	    		    	  var message = "The following Sales Order(s) are created \n" +
	    		          data.results[0].Vbeln + "\n" +
	    		          data.results[0].Vbeln1;
	    		    	  
	    		    	  
	    		    	  sap.m.MessageBox.show(message);
	    		    	  sap.ui.getCore().byId("idCIOTableLineItemsHeaderToolSaveButton").setVisible(false);
	    		      },function(error){
	    		    	  busyDialog.close();
	    		    	  sap.m.MessageBox.alert("Sales Order Cannot be created!");
	    		      });
	    			
	    			}
	    			else{
	    				stringToPass = "Vbeln eq '" + globalSalesOrder + "' and " + stringToPass;
	    				var fullServiceUrlCSO = serviceUrlCSO + "cso_editsoSet?$filter=" + stringToPass + "'";
	    				console.log(fullServiceUrlCSO);
	    				busyDialog.open();
	    				OData.request({ 
	    			        requestUri: fullServiceUrlCSO,
	    			        method: "GET", 
	    			        dataType: 'json',
	    			        headers: 
	    			         {
	    			            "X-Requested-With": "XMLHttpRequest",
	    			            "Content-Type": "application/json; charset=utf-8",
	    			            "DataServiceVersion": "2.0", 
	    			            "X-CSRF-Token":"Fetch"   
	    			        }          
	    			      },
	    			      function (data, response){
	    			    	  busyDialog.close();	
	    			    	  if(data.results[0].Vbeln != ""){
	    			    	  var message = "The following Sales Order(s) are changed \n" +
	    			          data.results[0].Vbeln;// + "\n" +
	    			          //data.results[0].Vbeln1;
	    			    	  
	    			    	  sap.m.MessageBox.alert(message);
	    			    	  sap.ui.getCore().byId("idCIOTableLineItemsHeaderToolSaveButton").setVisible(false);
	    			    	  }else{
	    			    		  sap.m.MessageBox.alert("Sales Order Cannot be changed!");
	    			    	  }
	    			    	  
	    			      },function(error){
	    			    	  busyDialog.close();
	    			    	  sap.m.MessageBox.alert("Sales Order Cannot be changed!");
	    			      });
	    				
	                }
	                }
	               
	               if(total<0)
	                {
	               /* sap.m.MessageToast.show("Date can't be in Past");
	                var toDate = new Date();
	    			toDate.setDate(toDate.getDate() + 1);
	    			
	    		    var mDate = { someDate: toDate };
	    		    oCIODateRDate.setModel(new sap.ui.model.json.JSONModel(mDate));  
	    			oCIODateRDate.bindProperty("dateValue", "/someDate"); 
	    			
	                return;*/
	                ddate = ddate.substr(0,4) + "-" + ddate.substr(4,2) + "-" + ddate.substr(6,2) + "T00:00:00";
	    			stringToPass = stringToPass + "Customer eq '" + customer + "' and Date eq datetime'"  + ddate + "' and Ernam eq '"  + ernam +
	    			"'";
	    			var urlToSap = "cso_getSalesOrdersSet?$filter=Customer eq '"  + customer + 	// "RFC_USER_100"
	    			"' and Date eq datetime'"  + ddate + 
	    			"'";
	    			
	    			oArraySalesOrderLineItemsSub = [];
	    			var cc = 1;
	    			for(var i =0; i < oArraySalesOrderLineItems.length; i=i+3){
	    				oArraySalesOrderLineItemsSub.push({
	    					Item : cc,
	    					Material : oArraySalesOrderLineItems[i].name,
	    					//Description : oArraySalesOrderLineItems[i].value,
	    					Qty : oArraySalesOrderLineItems[i+1].value,
	    					//Packing : oArraySalesOrderLineItems[i+3].value,
	    					//Sunit : oArraySalesOrderLineItems[i+4].value,
	    					//Amount : oArraySalesOrderLineItems[i+5].value,
	    					//Total : oArraySalesOrderLineItems[i+6].value,
	    					//Pricing : oArraySalesOrderLineItems[i+7].value,
	    					Uom : oArraySalesOrderLineItems[i+2].value,
	    					//Posnr : oArraySalesOrderLineItems[i].value,
	    				});
	    				cc = cc + 1;
	    			}
	    			

	    			for(var i =0; i < oArraySalesOrderLineItemsSub.length; i++){
	    				if((oArraySalesOrderLineItemsSub[i].Qty != "") && (parseFloat(oArraySalesOrderLineItemsSub[i].Qty) != 0)){
	    				if(newLine == true){
	    					stringToPass = stringToPass + " and Isales" + 
	    					stringCount + " eq '" + 
	    					String(parseInt(oArraySalesOrderLineItemsSub[i].Item)) + "$*" + 
	    					oArraySalesOrderLineItemsSub[i].Material + "$*" +
	    					oArraySalesOrderLineItemsSub[i].Qty + "$*" +
	    					//oArraySalesOrderLineItemsSub[i].Packing + "$*" + 
	    					//oArraySalesOrderLineItemsSub[i].Sunit + "$*" + 
	    					//oArraySalesOrderLineItemsSub[i].Amount + "$*" + 
	    					//oArraySalesOrderLineItemsSub[i].Total + "$*" + 
	    					//oArraySalesOrderLineItemsSub[i].Pricing + "$*" + 
	    					oArraySalesOrderLineItemsSub[i].Uom + 
	    					"$*";
	    					//"'";
	    				}else{
	    					stringToPass = stringToPass +
	    					String(parseInt(oArraySalesOrderLineItemsSub[i].Item)) + "$*" + 
	    					oArraySalesOrderLineItemsSub[i].Material + "$*" +
	    					oArraySalesOrderLineItemsSub[i].Qty + "$*" +
	    					//oArraySalesOrderLineItemsSub[i].Packing + "$*" + 
	    					//oArraySalesOrderLineItemsSub[i].Sunit + "$*" + 
	    					//oArraySalesOrderLineItemsSub[i].Amount + "$*" + 
	    					//oArraySalesOrderLineItemsSub[i].Total + "$*" + 
	    					//oArraySalesOrderLineItemsSub[i].Pricing + "$*" + 
	    					oArraySalesOrderLineItemsSub[i].Uom + 
	    					"$*";
	    					//"'";
	    				}
	    				stringCounts++;
	    				newLine = false;
	    				if(stringCounts == 20){
	    					stringToPass = stringToPass + "'";
	    					stringCount = stringCount + 1;
	    					newLine = true;
	    				}
	    				if(i == (oArraySalesOrderLineItemsSub.length - 1))
	    					stringToPass = stringToPass + "'";
	    				}
	    			}
	    			
	    			
	    			oModel = new sap.ui.model.odata.ODataModel(serviceUrlCSO, true);
	    			
	    			if(globalEdit == false){
	    			var fullServiceUrlCSO = serviceUrlCSO + "cso_createsoSet?$filter=" + stringToPass + "'";
	    			console.log(fullServiceUrlCSO);
	    			busyDialog.open();
	    			OData.request({ 
	    		        requestUri: fullServiceUrlCSO,
	    		        method: "GET", 
	    		        dataType: 'json',
	    		        headers: 
	    		         {
	    		            "X-Requested-With": "XMLHttpRequest",
	    		            "Content-Type": "application/json; charset=utf-8",
	    		            "DataServiceVersion": "2.0", 
	    		            "X-CSRF-Token":"Fetch"   
	    		        }          
	    		      },
	    		      function (data, response){
	    		    	  busyDialog.close();	
	    		    	  
	    		    	  var message = "The following Sales Order(s) are created \n" +
	    		          data.results[0].Vbeln + "\n" +
	    		          data.results[0].Vbeln1;
	    		    	  
	    		    	  sap.m.MessageBox.alert(message);
	    		    	  sap.ui.getCore().byId("idCIOTableLineItemsHeaderToolSaveButton").setVisible(false);
	    		      },function(error){
	    		    	  busyDialog.close();
	    		    	  sap.m.MessageBox.alert("Sales Order Cannot be created!");
	    		      });
	    			
	    			}
	    			else{
	    				stringToPass = "Vbeln eq '" + globalSalesOrder + "' and " + stringToPass;
	    				var fullServiceUrlCSO = serviceUrlCSO + "cso_editsoSet?$filter=" + stringToPass + "'";
	    				console.log(fullServiceUrlCSO);
	    				busyDialog.open();
	    				OData.request({ 
	    			        requestUri: fullServiceUrlCSO,
	    			        method: "GET", 
	    			        dataType: 'json',
	    			        headers: 
	    			         {
	    			            "X-Requested-With": "XMLHttpRequest",
	    			            "Content-Type": "application/json; charset=utf-8",
	    			            "DataServiceVersion": "2.0", 
	    			            "X-CSRF-Token":"Fetch"   
	    			        }          
	    			      },
	    			      function (data, response){
	    			    	  busyDialog.close();	
	    			    	  if(data.results[0].Vbeln != ""){
	    			    	  var message = "The following Sales Order(s) are changed \n" +
	    			          data.results[0].Vbeln;// + "\n" +
	    			          //data.results[0].Vbeln1;
	    			    	  
	    			    	  sap.m.MessageBox.show(message);
	    			    	  sap.ui.getCore().byId("idCIOTableLineItemsHeaderToolSaveButton").setVisible(false);
	    			    	  }else{
	    			    		  sap.m.MessageBox.alert("Sales Order Cannot be changed!");
	    			    	  }
	    			    	  
	    			      },function(error){
	    			    	  busyDialog.close();
	    			    	  sap.m.MessageBox.alert("Sales Order Cannot be changed!");
	    			      });
	    			}
	                }
			
	               if(total>0)
	                {
	                
	                ddate = ddate.substr(0,4) + "-" + ddate.substr(4,2) + "-" + ddate.substr(6,2) + "T00:00:00";
	    			stringToPass = stringToPass + "Customer eq '" + customer + "' and Date eq datetime'"  + ddate + "' and Ernam eq '"  + ernam +
	    			"'";
	    			
	    			var urlToSap = "cso_getSalesOrdersSet?$filter=Customer eq '"  + customer + 	// "RFC_USER_100"
	    			"' and Date eq datetime'"  + ddate + 
	    			"'";
	    			
	    			oArraySalesOrderLineItemsSub = [];
	    			var cc = 1;
	    			for(var i =0; i < oArraySalesOrderLineItems.length; i=i+3){
	    				oArraySalesOrderLineItemsSub.push({
	    					Item : cc,
	    					Material : oArraySalesOrderLineItems[i].name,
	    					//Description : oArraySalesOrderLineItems[i].value,
	    					Qty : oArraySalesOrderLineItems[i+1].value,
	    					//Packing : oArraySalesOrderLineItems[i+3].value,
	    					//Sunit : oArraySalesOrderLineItems[i+4].value,
	    					//Amount : oArraySalesOrderLineItems[i+5].value,
	    					//Total : oArraySalesOrderLineItems[i+6].value,
	    					//Pricing : oArraySalesOrderLineItems[i+7].value,
	    					Uom : oArraySalesOrderLineItems[i+2].value,
	    					//Posnr : oArraySalesOrderLineItems[i].value,
	    				});
	    				cc = cc + 1;
	    			}
	    			

	    			for(var i =0; i < oArraySalesOrderLineItemsSub.length; i++){
	    				if((oArraySalesOrderLineItemsSub[i].Qty != "") && (parseFloat(oArraySalesOrderLineItemsSub[i].Qty) != 0)){
	    				if(newLine == true){
	    					stringToPass = stringToPass + " and Isales" + 
	    					stringCount + " eq '" + 
	    					String(parseInt(oArraySalesOrderLineItemsSub[i].Item)) + "$*" + 
	    					oArraySalesOrderLineItemsSub[i].Material + "$*" +
	    					oArraySalesOrderLineItemsSub[i].Qty + "$*" +
	    					//oArraySalesOrderLineItemsSub[i].Packing + "$*" + 
	    					//oArraySalesOrderLineItemsSub[i].Sunit + "$*" + 
	    					//oArraySalesOrderLineItemsSub[i].Amount + "$*" + 
	    					//oArraySalesOrderLineItemsSub[i].Total + "$*" + 
	    					//oArraySalesOrderLineItemsSub[i].Pricing + "$*" + 
	    					oArraySalesOrderLineItemsSub[i].Uom + 
	    					"$*";
	    					//"'";
	    				}else{
	    					stringToPass = stringToPass +
	    					String(parseInt(oArraySalesOrderLineItemsSub[i].Item)) + "$*" + 
	    					oArraySalesOrderLineItemsSub[i].Material + "$*" +
	    					oArraySalesOrderLineItemsSub[i].Qty + "$*" +
	    					//oArraySalesOrderLineItemsSub[i].Packing + "$*" + 
	    					//oArraySalesOrderLineItemsSub[i].Sunit + "$*" + 
	    					//oArraySalesOrderLineItemsSub[i].Amount + "$*" + 
	    					//oArraySalesOrderLineItemsSub[i].Total + "$*" + 
	    					//oArraySalesOrderLineItemsSub[i].Pricing + "$*" + 
	    					oArraySalesOrderLineItemsSub[i].Uom + 
	    					"$*";
	    					//"'";
	    				}
	    				stringCounts++;
	    				newLine = false;
	    				if(stringCounts == 20){
	    					stringToPass = stringToPass + "'";
	    					stringCount = stringCount + 1;
	    					newLine = true;
	    				}
	    				if(i == (oArraySalesOrderLineItemsSub.length - 1))
	    					stringToPass = stringToPass + "'";
	    				}
	    			}
	    			
	    			var message;
	    			oModel = new sap.ui.model.odata.ODataModel(serviceUrlCSO, true);
	    			
	    			if(globalEdit == false){
	    			var fullServiceUrlCSO = serviceUrlCSO + "cso_createsoSet?$filter=" + stringToPass + "'";
	    			console.log(fullServiceUrlCSO);
	    			busyDialog.open();
	    			OData.request({ 
	    		        requestUri: fullServiceUrlCSO,
	    		        method: "GET", 
	    		        dataType: 'json',
	    		        headers: 
	    		         {
	    		            "X-Requested-With": "XMLHttpRequest",
	    		            "Content-Type": "application/json; charset=utf-8",
	    		            "DataServiceVersion": "2.0", 
	    		            "X-CSRF-Token":"Fetch"   
	    		        }          
	    		      },
	    		      function (data, response){
	    		    	  busyDialog.close();	
	    		    	  
	    		    	   message = "The following Sales Order(s) are created \n" +
	    		          data.results[0].Vbeln + "\n" +
	    		          data.results[0].Vbeln1;
	    		    	  
	    		    	   
	    		    	  sap.m.MessageBox.alert(message);
	    		    	  sap.ui.getCore().byId("idCIOTableLineItemsHeaderToolSaveButton").setVisible(false);
	    		      },function(error){
	    		    	  busyDialog.close();
	    		    	  sap.m.MessageBox.alert("Sales Order Cannot be created!");
	    		      });
	    			
	    			}
	    			else{
	    				stringToPass = "Vbeln eq '" + globalSalesOrder + "' and " + stringToPass;
	    				var fullServiceUrlCSO = serviceUrlCSO + "cso_editsoSet?$filter=" + stringToPass + "'";
	    				console.log(fullServiceUrlCSO);
	    				busyDialog.open();
	    				OData.request({ 
	    			        requestUri: fullServiceUrlCSO,
	    			        method: "GET", 
	    			        dataType: 'json',
	    			        headers: 
	    			         {
	    			            "X-Requested-With": "XMLHttpRequest",
	    			            "Content-Type": "application/json; charset=utf-8",
	    			            "DataServiceVersion": "2.0", 
	    			            "X-CSRF-Token":"Fetch"   
	    			        }          
	    			      },
	    			      function (data, response){
	    			    	  busyDialog.close();	
	    			    	  if(data.results[0].Vbeln != ""){
	    			    	  var message = "The following Sales Order(s) are changed \n" +
	    			          data.results[0].Vbeln;// + "\n" +
	    			          //data.results[0].Vbeln1;
	    			    	  
	    			    	  sap.m.MessageBox.alert(message);
	    			    	  sap.ui.getCore().byId("idCIOTableLineItemsHeaderToolSaveButton").setVisible(false);
	    			    	  }else{
	    			    		  sap.m.MessageBox.alert("Sales Order Cannot be changed!");
	    			    	  }
	    			    	  
	    			      },function(error){
	    			    	  busyDialog.close();
	    			    	  sap.m.MessageBox.alert("Sales Order Cannot be changed!");
	    			      });
	    			}
	                }
		},
		fnCallbackMessageBox:function(sResult) {
			//alert("Reset");
			//var oCurrent = this;
			if(sResult == "YES"){
		   	 	sessionStorage.clear();
		        sessionStorage.clear();
		        window.location.assign('index.html');
			}
		},
		/* *************************** ****** - Sales Order Item Section - ****** *************************** */
		
		});


