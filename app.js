angular.module('app', [])
    .controller('mainCtrl', [
        '$scope',
        function($scope) {
            $scope.test = "Hello World";
        }
    ]);