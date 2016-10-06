var app = angular.module('loft', ['ui.router']);


app.config(function($stateProvider, $urlRouterProvider, $locationProvider) {
    $urlRouterProvider.otherwise("/");

    $stateProvider
        .state("home", {
            url: "/",
            templateUrl: "../partials/userList.html",
            controller: "UserListCtrl"
        })
        .state("user", {
            url:"/user/:id",
            templateUrl: "../partials/user.html",
            controller: "UserCtrl"
        })
    ;

    $locationProvider.html5Mode(true);
    $locationProvider.hashPrefix('!');
});