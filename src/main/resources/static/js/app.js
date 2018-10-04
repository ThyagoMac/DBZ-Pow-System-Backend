//modulo principal
var appDbz = angular.module('dbzmod',[]);


//conrtollers
appDbz.controller("indexController", function($scope, $http){
	
	$http({nethod:'GET', url:'localhost:8000/personagens'})
		.then(function(response){
			console.log(response.data);
			console.log(response.status);
		}, function(response){
			console.log(response.data);
			console.log(response.status);
		});
	
});





/**
 * 
//<![CDATA[
function carregarDados() {
	  var xhttp = new XMLHttpRequest();
	  xhttp.onreadystatechange = function() {
	    if (this.readyState == 4 && this.status == 200) {
	     document.getElementById("demo").innerHTML = this.responseText;
	    }
	  };
	  xhttp.open("GET", "http://localhost:8000/personagens", true);
	  xhttp.send();
	}
carregarDados();
//]]> 
*/