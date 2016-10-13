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
                },
                {
                    name: "December",
                    days: [],
                },
            ]
            $scope.day = {
                date: 0,
                dayOfWeek: "",
                events: [] // work on this
            }
            $scope.daysInEachMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
            $scope.daysOfWeek = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
            $scope.currentDayOfWeek = 4;
            $scope.calcDays = function() {
                for (var i = 0; $scope.calander.length > i; i++) { //selects correct month

                    for (var j = 0; $scope.daysInEachMonth[i] > j; j++) {
                        $scope.calander[i].days.push({ // adds days to day array
                            date: j,
                            dayOfWeek: $scope.daysOfWeek[$scope.currentDayOfWeek],
                            events: []
                        });
                        if ($scope.currentDayOfWeek == 6) { // increments days of week
                            $scope.currentDayOfWeek = 0;
                        } else {
                            $scope.currentDayOfWeek += 1;
                        }
                    }

                }
            }
            $scope.calcDays();
            $scope.setDate = function() {
                var my_date = new Date();
                $scope.currentMonth = $scope.calander[my_date.getMonth()];
                $scope.curMonthInt = my_date.getMonth();
            }
            $scope.setDate();
            $scope.forwardMonth = function() {
                $scope.curMonthInt += 1;
                $scope.currentMonth = $scope.calander[$scope.curMonthInt]
            }
            $scope.backMonth = function() {
                $scope.curMonthInt -= 1;
                $scope.currentMonth = $scope.calander[$scope.curMonthInt]
            }








        }
    ]);