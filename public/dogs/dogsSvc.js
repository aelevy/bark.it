(function () {
    "use strict";

    angular
        .module('dogs')
        .factory('dogsSvc', ['$http', '$rootScope', function ($http, $rootScope) {

            // public service methods
            return {
                getDogs: getDogs,
                getDog: getDog,
                createDog: createDog,
                editDog: editDog,
                deleteDog: deleteDog
            };

            function getDogs() {

                return $http.get("api/collections/bark-it");
            }

            function getDog(dogId) {
                return $http.get("api/collections/bark-it/" + dogId);
            }

            function createDog(newDog) {
                $http.post("api/collections/bark-it", newDog).then(function (res) {
                    $rootScope.$broadcast("dog:added");
                });
            }

            function editDog(dog) {
                $http.put("api/collections/bark-it/" + dog._id, dog).then(function (res) {
                    $rootScope.$broadcast("dog:updated");
                });

            }

            function deleteDog(dogId) {
                $http.delete("api/collections/bark-it/" + dogId).then(function (res) {
                    $rootScope.$broadcast("dog:deleted");
                });
            }



        }]);
})();
