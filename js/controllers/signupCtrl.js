myApp.controller('signupCtrl', ['$scope', function($scope) {
 	// $scope.test = "Hello lovers...";

 	$scope.login = function() {
 		$scope.message = "Welcome" + $scope.user.email;
 	};

	$scope.signup = function() {
		$scope.message = "Welcome" + $scope.user.firstname;
	}; 	

 }]);