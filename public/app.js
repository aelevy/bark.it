(function () {
    "use strict";

    angular.module('bark.it',[
    "ngRoute",
    "ngCookies",
    "owners",
    "dogs"
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

})();
