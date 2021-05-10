var app = angular.module('LoginApp');
app.controller('HomeController',
    function($scope, $rootScope, $stateParams) {
        $scope.userName = $rootScope.username;
    });