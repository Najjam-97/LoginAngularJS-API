(function() {
    var app = angular.module('LoginApp', ['ui.router']);
    app.run(function($rootScope, $location,$state) {
        console.clear();
        console.log('running');

    });
    app.config(['$stateProvider', '$urlRouterProvider',
        function($stateProvider, $urlRouterProvider) {
            $stateProvider
                .state('login', {
                    url : '/login',
                    templateUrl : 'components/login/login.html',
                    controller : 'loginController'
                })
                .state('home', {
                    url : '/home',
                    templateUrl : 'components/home/home.html',
                    controller : 'HomeController'
                });
            $urlRouterProvider.otherwise('/login');
        }]);
})();