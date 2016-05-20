app.controller('homeController', ['$scope', function($scope) {
    console.log("Home Controller Loaded");
}]);

app.config(['$stateProvider', '$urlRouterProvider', '$urlMatcherFactoryProvider', '$ionicConfigProvider',
    function ($stateProvider, $urlRouterProvider, $urlMatcherFactoryProvider, $ionicConfigProvider) {
        console.log("Configuration Loaded");

        var home = {
            url: '/home',
            templateUrl: "views/home.html",
            controller: "homeController"
        };

        $stateProvider.state('home', home);

    }]);