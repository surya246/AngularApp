app.factory('userService', function ($http) {
	return {
		get: function () {
			return $http.get('js/modules/Users.json');
   		}
   	};
});

app.factory('projectService', function ($http) {
	return {
		get: function () {
			return $http.get('js/modules/Projects.json');
    	}
    };
});

app.factory('taskService', function ($http) {
	return {
		get: function () {
			return $http.get('js/modules/Tasks.json');
    	}
    };
});

app.factory('userProjectService',function($http,$q,$rootScope){
	return {
		get:function(info) {
			var defered = $q.defer();
			var obj = [];
		   	$http.get('js/modules/Projects.json').success(function(data){
	            for(var i=0; i < data.projects.length; i++){
					for(var j=0; j < data.projects[i].projectMembers.userId.length; j++){
						if(info  == data.projects[i].projectMembers.userId[j]){
							obj.push(data.projects[i]); 
						}
					}
				}
				defered.resolve(obj);

            });
      			return defered.promise;
       }	
	};
});