(function () {
    "use strict";

    angular
        .module('owners')
        .factory('ownersSvc', ['$http', '$cookieStore', '$rootScope', function ($http, $rootScope, $cookieStore) {

            // public service methods
            return {
                getOwners: getOwners,
                getOwner: getOwner,
                createOwner: createOwner,
                editOwner: editOwner,
                deleteOwner: deleteOwner
            };

            function getOwners() {

                return $http.get("api/collections/owners");
            }

            function getOwner(ownerId) {
                return $http.get("api/collections/owners/" + ownerId);
            }

            function createOwner(newOwner) {
                $http.post("api/collections/owners", newOwner).then(function (user) {
                    $cookieStore.put("currentuser", user.data)
                    $rootScope.$broadcast("owner:added");
                });
            }

            function editOwner(owner) {
                $http.put("api/collections/owners/" + owner._id, owner).then(function (res) {
                    $rootScope.$broadcast("owner:updated");
                });

            }

            function deleteOwner(ownerId) {
                $http.delete("api/collections/owners/" + ownerId).then(function (res) {
                    $rootScope.$broadcast("owner:deleted");
                });
            }



        }]);
})();
