(function () {
    "use strict";

    angular
        .module('bark.it')
        .controller('homeCtrl',['$scope', function ($scope, $cookieStore, _, ownersSvc, $location) {
          $scope.login = function () {
           ownersSvc.getOwners().success(function () {
            var currentUser = _.find(users, {email : email});
            $cookieStore.put("currentuser", currentUser)
            $location.path("/owners" + currentUser_.id)
           })
          }
        }]);

})();
