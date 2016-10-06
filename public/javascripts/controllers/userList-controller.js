angular.module('loft')
.controller('UserListCtrl', ['$scope', '$http', 'Users', function($scope, $http, Users){
  $scope.categories = [];

  Users.getAllUsers(function(res) {
    $scope.users = res;
    angular.forEach($scope.users, function(value, key) {
      if($scope.categories.indexOf(value.category) === -1){
        $scope.categories.push(value.category);
      }
    });
  }, function(err) {
      console.error ("Failed to fetch users.", err);
  });

}]);