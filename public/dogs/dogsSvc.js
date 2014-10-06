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
                deleteDog: deleteDog,
                createReminder: createReminder
            };

            function getDogs() {

                return $http.get("api/collections/dogs");
            }

            function getDog(dogId) {
                return $http.get("api/collections/dogs/" + dogId);
            }

            function createDog(newDog) {
                $http.post("api/collections/dogs", newDog).then(function (res) {
                    $rootScope.$broadcast("dog:added");
                });
            }

            function editDog(dog) {
                $http.put("api/collections/dogs/" + dog._id, dog).then(function (res) {
                    $rootScope.$broadcast("dog:updated");
                });

            }


            function createReminder(dog){
             console.log(dog._id)
                $http.put("api/collections/dogs/" + dog._id, dog).then(function (res) {
                 $rootScope.$broadcast("reminder:created");
                });
            }


            function deleteDog(dogId) {
                $http.delete("api/collections/dogs/" + dogId).then(function (res) {
                    $rootScope.$broadcast("dog:deleted");
                });
            }



        }]);
})();
