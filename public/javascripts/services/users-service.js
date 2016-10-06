angular.module('loft')
.factory('Users', function($http) {
    return {

        getAllUsers: function(success, error){
            $http({ method: 'GET', url: '/api/users' }).success(success).error(error);
        },
        getUserById: function(request, success, error){
            console.log(request.id);
            $http({ method: 'GET', url: '/api/user/' + request.id}).success(success).error(error);
        },
    };
});