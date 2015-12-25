var myApp = angular.module('bling', ['ngRoute', 'firebase'])
	.constant('FIREBASE_URL', 'https://blingy.firebaseIO.com/');

myApp.run(['$rootScope', '$location', function($rootScope, $location){
	$rootScope.$on('$routeChangeError', function(event, next, previous, error) {
		if (error=='AUTH_REQUIRED') {
			$rootScope.message = 'Sorry, you must log in to access that page';
			$location.path('/login');
		} // AUTH ReQUIRED
	}); // event info
}]); // run

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

		.when('/checkins/:uId/:mId/checkinsList', {
			templateUrl: 'views/checkinsList.html',
			controller: 'checkinsCtrl'
		})

		.when('/checkins/:uId/:mId', {
			templateUrl: 'views/checkins.html',
			controller: 'checkinsCtrl'
		})


		.when('/meetings', {
			templateUrl: 'views/meetings.html',
			controller: 'meetingsCtrl',
			resolve: {
				currentAuth: function(Authentication) {
					return Authentication.requireAuth();
				} // current Auth
			} // resolve
		})
		.otherwise({
			redirectTo: '/login'
		});
}]);
