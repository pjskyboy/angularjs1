'use strict'

angular.module('myApp.controllers', []).controller('FinanceController', function($scope) {
    $scope.salary = 10000;
    $scope.percentage = 10;
    $scope.result = function() {
        return $scope.salary * $scope.percentage * 0.01;
    };
});