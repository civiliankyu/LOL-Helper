app.controller('homeController', ['$scope', '$state', 
	function($scope, $state) {
		console.log("Home Controller Loaded");

		$scope.users = [];

		$scope.doSomething = function () {
			console.log("I did something");
		};

		// $.ajax({
		//   url: 'https://randomuser.me/api/',
		//   data: {results : 5},
		//   dataType: 'json',
		//   success: function(data){
		//   	//console.log(data);
		//   	$scope.users = data.results;
		//   	console.log($scope.users);
		//   }
		// }).then(function () {
		// 	$scope.$apply();
		// });
}]);