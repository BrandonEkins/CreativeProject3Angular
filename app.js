angular.module('app', ['ngMaterial'])
    .controller('mainCtrl', [
        '$scope',
        function($scope) {
            $scope.test = "Hello World";
            $scope.currentMonth = {};
            $scope.calander = [{
                name: "January",
                days: [],
            }, {
                name: "Febuary",
                days: [],
            }, {
                name: "March",
                days: [],
            }, {
                name: "April",
                days: [],
            }, {
                name: "May",
                days: [],
            }, {
                name: "June",
                days: [],
            }, {
                name: "July",
                days: [],
            }, {
                name: "August",
                days: [],
            }, {
                name: "September",
                days: [],
            }, {
                name: "October",
                days: [],
            }, {
                name: "November",
                days: [],
            }, ]
            $scope.setDate = function() {
                var my_date = new Date();
                $scope.currentMonth = $scope.calander[my_date.getMonth()];
            }
            $scope.setDate();









        }
    ]);