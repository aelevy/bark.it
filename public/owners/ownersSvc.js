(function () {
    "use strict";

    angular
        .module('owners')
        .factory('ownersSvc', ['$http', '$rootScope', function ($http, $rootScope) {

            // public service methods
            return {
                getOwners: getOwners,
                getOwner: getOwner,
                createOwner: createOwner,
                editOwner: editOwner,
                deleteOwner: deleteOwner
            };

            function getOwners() {

                return $http.get("api/collections/bark-it");
            }

            function getOwner(ownerId) {
                return $http.get("api/collections/bark-it/" + ownerId);
            }

            function createOwner(newOwner) {
                $http.post("api/collections/bark-it", newOwner).then(function (res) {
                    $rootScope.$broadcast("owner:added");
                });
            }

            function editOwner(owner) {
                $http.put("api/collections/bark-it/" + owner._id, owner).then(function (res) {
                    $rootScope.$broadcast("owner:updated");
                });

            }

            function deleteOwner(ownerId) {
                $http.delete("api/collections/bark-it/" + ownerId).then(function (res) {
                    $rootScope.$broadcast("owner:deleted");
                });
            }



        }]);
})();
