(function () {
    "use strict";

    angular
        .module('dogs', [
            "ngRoute"
        ])
        .config(function ($routeProvider) {
            $routeProvider
                .when('/dogs', {
                    templateUrl: 'dogs/views/list.html',
                    controller: 'dogsCtrl'
                })
                .when('/dogs/new', {
                    templateUrl: 'dogs/views/create.html',
                    controller: 'dogsCtrl'
                })
                .when('/dogs/:dogId', {
                    templateUrl: 'dogs/views/show.html',
                    controller: 'dogsCtrl'
                })
                .when('/dogs/:dogId/edit', {
                    templateUrl: 'dogs/views/edit.html',
                    controller: 'dogsCtrl'
                });
        });

})();
