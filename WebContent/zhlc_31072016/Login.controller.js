sap.ui.controller("zhlc_31072016.Login", {
	LogonBtnPress: function(pwd){
		var oLoginView = new LoginView();
		if(pwd == 'halifa123'){
			oLoginView.changePassword();
		}
		else{
			oLoginView.authenticateUser();
		}
			//window.open("UserHome.html","_self");
	}
});