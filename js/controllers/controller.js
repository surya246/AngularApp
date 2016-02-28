app.controller('userController', function ($scope, userService) {
	userService.get().then(function (res) {
		$scope.userobj = res.data;
			
	});
});

app.controller('projectController', function ($scope, projectService) {
	projectService.get().then(function (res) {
		$scope.projectobj = res.data;
			
	});
});

app.controller('taskController', function ($scope, taskService) {
	taskService.get().then(function (res) {
		$scope.taskobj = res.data;
			
	});
});

app.controller('userProjectController',function($scope ,$routeParams,userProjectService){
	$scope.id = $routeParams.id;
	userProjectService.get($scope.id).then(function (res) {
		$scope.paramobj = res;
		console.log($scope.paramobj);
	});
	
});



app.controller("dropDownController",function($scope, $rootScope, userService,projectService,userProjectService){
	$rootScope.defaultUser = 1;
	userService.get().then(function(res){
		$scope.userObj = res.data;
	});
		$scope.currentUser= function(id){
			$scope.Id = parseInt(id);
			$scope.obj= _.filter($scope.userObj.users, { 'userId': $scope.Id });

			userProjectService.get($scope.Id).then(function (res) {
				$scope.userProjectObj = res;
				console.log($scope.userProjectObj);
			});
		};
});


