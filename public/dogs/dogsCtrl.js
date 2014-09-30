(function () {
    "use strict";

    angular
        .module('dogs')
        .controller('dogsCtrl', ['$scope', 'dogsSvc', '$location', '$routeParams', '$rootScope', function ($scope, dogsSvc, $location, $routeParams, ) {
            dogsSvc.getDogs().success(function (dogs) {
                $scope.dogs = dogs;
            });

            dogsSvc.getDog($routeParams.dogId).success(function (dog) {
                $scope.dog = dog;
            });

            $scope.createDog = function (newDog) {
                dogsSvc.createDog(newdog);
                $location.path('/dogs');
            };

            $scope.editDog = function (dog) {
                dogsSvc.editDog(dog);
                $location.path('/dogs');
            };

            $scope.deleteDog = function (id) {
                dogsSvc.deleteDog(id);
                $location.path('/dogs');
            }

            $rootScope.$on("dog:added", function (){
             $scope.products = dogsSvc.getDogs();
              });


        }]);
})();
