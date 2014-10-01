(function () {
    "use strict";

    angular
        .module('bark.it')
        .controller('homeCtrl',['$scope', '$cookieStore', '_', 'ownersSvc', '$location', function ($scope, $cookieStore, _, ownersSvc, $location) {
          $scope.login = function (email) {
           ownersSvc.getOwners().success(function (users) {
            var currentUser = _.find(users, {email : email});
            $cookieStore.put("currentuser", currentUser)
            $location.path("/owners/" + currentUser._id)
           })
          }
        }]);

})();
