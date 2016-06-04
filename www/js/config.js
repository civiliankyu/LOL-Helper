app.config(['$stateProvider', '$urlRouterProvider', '$urlMatcherFactoryProvider', '$ionicConfigProvider',
    function ($stateProvider, $urlRouterProvider, $urlMatcherFactoryProvider, $ionicConfigProvider) {
        console.log("Configuration Loaded");

        var home = {
            url: '/home',
            templateUrl: "views/home.html",
            controller: "homeController"
        };

        var champion_detail = {
            url: '/championDetail/:id',
            templateUrl : 'views/champion_detail.html',
            controller: "championDetailController"
        };

        $stateProvider.state('home', home);
        $stateProvider.state('champion_detail', champion_detail);

  		//$urlRouterProvider.otherwise('/home');
}]);