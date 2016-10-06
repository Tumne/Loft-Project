angular.module('loft')
.controller('UserCtrl', ['$scope', '$http', 'Users', '$stateParams', function($scope, $http, Users, $stateParams){

  Users.getUserById({
    id: $stateParams.id

  }, function(res) {
    $scope.user = res.data;

  }, function(err) {
      console.error ("Failed to fetch users.", err);
  });


}]);