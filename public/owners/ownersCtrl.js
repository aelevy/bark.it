(function () {
    "use strict";

    angular
        .module('owners')
        .controller('ownersCtrl', ['$scope', 'ownersSvc', '$location', '$routeParams', function ($scope, ownersSvc, $location, $routeParams) {
            ownersSvc.getOwners().success(function (posts) {
                $scope.owners = owners;
            });

            ownersSvc.getOwner($routeParams.postId).success(function (post) {
                $scope.owner = owner;
            });

            $scope.createOwner = function (newPost) {
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
