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

                return $http.get("api/collections/demotiy");
            }

            function getDog(dogId) {
                return $http.get("api/collections/demotiy/" + dogId);
            }

            function createDog(newDog) {
                $http.post("api/collections/demotiy", newDog).then(function (res) {
                    $rootScope.$broadcast("dog:added");
                });
            }

            function editDog(dog) {
                $http.put("api/collections/demotiy/" + dog._id, dog).then(function (res) {
                    $rootScope.$broadcast("dog:updated");
                });

            }

            function deleteDog(dogId) {
                $http.delete("api/collections/demotiy/" + dogId).then(function (res) {
                    $rootScope.$broadcast("dog:deleted");
                });
            }



        }]);
})();
