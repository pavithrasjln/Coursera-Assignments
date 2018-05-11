(function () {
'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController)
LunchCheckController.$inject = ['$scope'];
function LunchCheckController($scope){
		
	
  $scope.lunchitem = function () {
	  
	   ///alert( "Too much");
	  var items= $scope.lunchmenu;
	 var items=items.trim();
	  //$scope.message=items;
	  if(items.length >0)
		  {
		  var arraylength=items.split(",");
	  
	  if(arraylength.length <=3 )
		  {
		  $scope.message="Enjoy!";
		  }
	  else 
	  {
		  $scope.message="Too much!";
	  }
		  }
	  else
		  
		  $scope.message="";
		  
		  
	  };

};
})();
