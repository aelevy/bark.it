(function () {
    "use strict";

    angular.module('bark.it',[
    "ngRoute",
    "ngCookies",
    "lodash",
    "owners",
    "dogs",
    "ui.bootstrap"
    ])
    .config(function ($routeProvider) {
        $routeProvider
            .when('/',{
                templateUrl: "views/main.html",
                controller: "homeCtrl"
            })
            .otherwise({
                redirectTo: '/'
            });
    });

   angular.module("lodash", []).factory('_', function () {
     return window._;
   })

})();
