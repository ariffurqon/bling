var myApp = angular.module('angieauth', ['ngRoute', 'firebase'])
	.constant('FIREBASE_URL', 'https://angiebling.firebaseio.com/')

myApp.config(['$routeProvider', function($routeProvider){
	$routeProvider
		.when('/login', {
			templateUrl: 'views/login.html',
			controller: 'signupCtrl'
		})

		.when('/signup', {
			templateUrl: 'views/signup.html',
			controller: 'signupCtrl'
		})
		.when('/success', {
			templateUrl: 'views/success.html',
			controller: 'successCtrl'
		})
		.otherwise({
			redirectTo: '/login'
		});

}]);

