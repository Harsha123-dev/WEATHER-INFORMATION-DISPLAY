(function() {
    'use strict';

    angular
        .module('formApp', [])
        .controller('ControllerProfile', ControllerProfile);

    ControllerProfile.$inject = ['$scope', '$http'];

    /* @ngInject */
    function ControllerProfile($scope, $http) {
        var vm = this;
        console.log("abc");
        $scope.findWeather = function() {
            var url = "http://api.openweathermap.org/data/2.5/weather";
            var config = {
                params: {
                    q: $scope.city,
                    appid: "90ca5ff2555653de22137071883c6ee3"

                }
            };
            return $http.get(url, config).then(function(response) {
                
                    console.log(response);
                    $scope.one = !$scope.one;
                     console.log("response.data.weather[0]",response.data.weather[0]);
                   var celcius = Math.round(parseFloat(response.data.main.temp)-273.15);
                   var fahrenheit = Math.round(((parseFloat(response.data.main.temp)-273.15)*1.8)+32); 
                    $scope.printWeatherDetails=response.data;
                    $scope.temperature= celcius;
                    $scope.weather=response.data.weather[0].description;
                    $scope.icon=response.data.weather[0].icon;
                    $scope.country=response.data.sys.country;
                },
                function(errorObj) {
                    console.log("Not able to get the feeds");
                    console.log(errorObj);
                });


        };





    }
})();