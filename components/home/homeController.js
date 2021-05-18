var app = angular.module('LoginApp');
app.controller('homeController',
    function($scope, $rootScope, $stateParams,$window,loginController) {
      $scope.logout=function (){
          window.location.href = 'http://localhost:63342/API-BasedLogin-AngularJS/index.html?_ijt=at10v9jtm2kvc8k7hef0nehtdp#/login';
          sessionStorage.removeItem("authdata");
      }
    });