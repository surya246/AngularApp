app.directive("user",function(){
	return{
		restrict:'E',
		templateUrl:"views/user.html"
	}
});

app.directive('userInfo',function(){
	return {
		restrict:'E',
		templateUrl:"views/userInfo.html"
	}
});

app.directive('userProjects',function(){
	return {
		restrict:'E',
		templateUrl:"views/userProjects.html"
	}
});

app.directive('userTasks',function(){
	return {
		restrict:'E',
		templateUrl:"views/userTasks.html"
	}
});