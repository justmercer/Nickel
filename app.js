var app = angular.module("app", ["ngRoute"]);
app.config(function ($routeProvider) {
    $routeProvider
        .when("/", {
            templateUrl: "templates/main.htm",
            controller: "MainController"
        })
        .when("/mission", {
            templateUrl: "templates/mission.htm"
        })
        .when("/vision", {
            templateUrl: "templates/vision.htm"
        })
        .when("/serve", {
            templateUrl: "templates/serve.htm"
        }).when("/support", {
            templateUrl: "templates/support.htm"
        }).when("/events", {
            templateUrl: "templates/events.htm"
        }).when("/more", {
            templateUrl: "templates/more.htm",
            controller: "MoreController as vm"
        }).when("/give", {
            templateUrl: "templates/give.htm"
        }).when("/thoughts", {
            templateUrl: "templates/thoughts.htm"
        });
});