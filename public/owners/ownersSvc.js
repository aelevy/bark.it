(function () {
    "use strict";

    angular
        .module('owners')
        .factory('ownersSvc', ['$http', '$rootScope', function ($http, $rootScope) {

            // public service methods
            return {
                getOwners: getOwners,
                getOwner: getOwner,
                createOwner: createPost,
                editOwner: editOwner,
                deleteOwner: deleteOwner
            };

            function getOwners() {

                return $http.get("api/collections/demotiy");
            }

            function getOwner(ownerId) {
                return $http.get("api/collections/demotiy/" + ownerId);
            }

            function createOwner(newOwner) {
                $http.post("api/collections/demotiy", newOwner).then(function (res) {
                    $rootScope.$broadcast("owner:added");
                });
            }

            function editOwner(owner) {
                $http.put("api/collections/demotiy/" + owner._id, owner).then(function (res) {
                    $rootScope.$broadcast("owner:updated");
                });

            }

            function deleteOwner(ownerId) {
                $http.delete("api/collections/demotiy/" + ownerId).then(function (res) {
                    $rootScope.$broadcast("owner:deleted");
                });
            }



        }]);
})();
