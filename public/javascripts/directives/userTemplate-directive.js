angular.module('loft')
.directive('usertemplate', function() {
    return {
        restrict : "E",
        replace : true,
        scope: {
            items: '=',
            order: '=',
            filter: '='
        },
        controller: function($scope, $element) {
            $scope.calculateAge = function(birthday) { // pass in player.dateOfBirth
                var ageDifMs = Date.now() - new Date(birthday);
                var ageDate = new Date(ageDifMs); // miliseconds from epoch
                return Math.abs(ageDate.getUTCFullYear() - 1970);
            };

            $scope.capitalizeFirstLetter = function(string) {
                return string.charAt(0).toUpperCase() + string.slice(1);
            };
        },
        templateUrl: '/javascripts/directives/userTemplate.html'
    };
});