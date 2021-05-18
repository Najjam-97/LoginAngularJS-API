var app = angular.module('LoginApp');
app.controller('loginController', function($scope,$http,$rootScope,$window) {
    $scope.postdata = function () {
        var post = $http({
            method: "POST",
            url: "https://api-stg.martcart.pk/api/v1/user/login",
            dataType: 'json',
            data: JSON.stringify({
                userName: $scope.username,
                password: $scope.password
            }),
            headers: { "Content-Type": "application/json" }
        });
        post.success(function (data) {
            window.location='components/home/home.html';
                sessionStorage.setItem("authdata", JSON.stringify(data.token));
             });
        post.error(function () {
            alert("Somthing went wrong");
         });
    }
});