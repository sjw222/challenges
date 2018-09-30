(function(){
	angular
		.module('insultApp')
		.controller('InsultCtrl', InsultCtrl);

	//This line makes the controller safe for minification by preserving the dependency/service names when injecting
	InsultCtrl.$inject = ['insultSrv'];

	function InsultCtrl(insultSrv) {
		var insultVm = this;

		//variables
		insultVm.insult = insultSrv.generateInsult(); //this generates the first insult when the page loads

		//function bindings
		insultVm.replaceInsult = replaceInsult;

		function replaceInsult(){
			var newInsult = insultSrv.generateInsult(); //generates a new insult using the service's generate function
			insultVm.insult = newInsult;  //sets the insult variable to the newly generated insult
		}
	}
})();

// Minified version of this controller
// !function(){function n(n){function t(){var t=n.generateInsult();l.insult=t}var l=this;l.insult=n.generateInsult(),l.replaceInsult=t}angular.module("insultApp").controller("InsultCtrl",n),n.$inject=["insultSrv"]}();