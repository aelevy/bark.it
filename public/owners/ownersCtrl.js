(function () {
    "use strict";

    angular
        .module('owners')
        .controller('ownersCtrl', ['$scope', 'ownersSvc', '$location', '$routeParams', function ($scope, ownersSvc, $location, $routeParams) {
            ownersSvc.getOwners().success(function (owners) {
                $scope.owners = owners;
            });

            ownersSvc.getOwner($routeParams.ownerId).success(function (owner) {
                $scope.owner = owner;
            });

            $scope.createOwner = function (newOwner) {
                ownersSvc.createOwner(newOwner);
                $location.path('/owners');
            };

            $scope.editOwner = function (owner) {
                ownersSvc.editOwner(owner);
                $location.path('/owners');
            };

            $scope.deleteOwner = function (id) {
                ownersSvc.deleteOwner(id);
                $location.path('/owners');
            }


        }]);
})();
