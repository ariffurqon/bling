myApp.controller('checkinsCtrl', 
	['$scope', 
	'$rootScope', 
	'$location',
	'$firebaseObject',
	'$firebaseArray',
	'$routeParams',
	'FIREBASE_URL',
	function($scope, $rootScope, $location, $firebaseObject, $firebaseArray, $routeParams, FIREBASE_URL) {
 		
 		$scope.whichmeeting = $routeParams.mId;
 		$scope.whichuser = $routeParams.uId;

 		var ref = new Firebase(FIREBASE_URL + 'users/' + 
 			$scope.whichuser + '/meetings/' +
 			$scope.whichmeeting + '/checkins/');


 		var checkinsList = $firebaseArray(ref);
 		$scope.checkins = checkinsList;

 		$scope.order = "firstname";
 		$scope.direction = null;
 		$scope.query = '';
 		$scope.recordId = '';


 		$scope.addCheckin = function() {
 			var checkinsInfo = $firebaseArray(ref);
 			var myData = {
 				firstname: $scope.user.firstname,
 				lastname: $scope.user.lastname,
 				email: $scope.user.email,
 				date: Firebase.ServerValue.TIMESTAMP
 			}; //myData

 		checkinsInfo.$add(myData).then(function() {
 			$location.path('/checkins' + $scope.whichuser + '/' + $scope.whichmeeting + '/checkinsList');
 		});

 	}; // addCheckin

 	$scope.deleteCheckin = function(id) {
 		var refDel = new Firebase(FIREBASE_URL + 'users/' +
 			$scope.whichuser + '/meetings/' +
 			$scope.whichmeeting + '/checkins/' + id);

 		var record = $firebaseObject(refDel);
 		record.$remove(id);
 	};

 	$scope.pickRandom = function() {
 		var whichRecord = Math.round(Math.random()* (checkinsList.length - 1));
 		$scope.recordId = checkinsList.$keyAt(whichRecord);
 	}; // pick winner

 }]); // controller




