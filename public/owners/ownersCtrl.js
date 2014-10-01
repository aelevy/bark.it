(function () {
    "use strict";

    angular
        .module('owners')
        .controller('ownersCtrl', ['$scope', 'ownersSvc', '$location', '$routeParams', '$rootScope', '$cookieStore', '_', function ($scope, ownersSvc, $location, $routeParams, $rootScope, $cookieStore, _) {
            ownersSvc.getOwners().success(function (owners) {
                $scope.owners = owners;
            });

            ownersSvc.getOwner($routeParams.ownerId).success(function (owner) {
                $scope.owner = owner;
            });

            $scope.createOwner = function (newOwner) {
                ownersSvc.createOwner(newOwner);

            };

            $scope.editOwner = function (owner) {
                ownersSvc.editOwner(owner);
                $location.path('/owners');
            };

            $scope.deleteOwner = function (id) {
                ownersSvc.deleteOwner(id);
                $location.path('/owners');
            };

            $scope.$on("owner:added", function (){
             var currentUser = $cookieStore.get("currentuser");
             $location.path("/owners/" + currentUser._id)
              });


        }]);
})();
