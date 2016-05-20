app.config(['$stateProvider', '$urlRouterProvider', '$urlMatcherFactoryProvider', '$ionicConfigProvider',
    function ($stateProvider, $urlRouterProvider, $urlMatcherFactoryProvider, $ionicConfigProvider) {
        console.log("Configuration Loaded");

        // var login = {
        //     url: '/login',
        //     templateUrl: "templates/login.html",
        //     controller: "loginController"
        // };

        //$stateProvider.state('login', login);

        //$urlRouterProvider.otherwise('/login');
    }]);