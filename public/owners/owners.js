(function () {
    "use strict";

    angular
        .module('owners', [
            "ngRoute"
        ])
        .config(function ($routeProvider) {
            $routeProvider
                .when('/owners', {
                    templateUrl: 'owners/views/list.html',
                    controller: 'ownersCtrl'
                })
                .when('/owners/new', {
                    templateUrl: 'owners/views/create.html',
                    controller: 'ownersCtrl'
                })
                .when('/owners/:ownerId', {
                    templateUrl: 'owners/views/show.html',
                    controller: 'ownersCtrl'
                })
                .when('/owners/:ownerId/edit', {
                    templateUrl: 'owners/views/edit.html',
                    controller: 'ownersCtrl'
                });
        });

})();
