(function () {
    "use strict";

    angular
        .module('owners')
        .controller('ownersCtrl', ['$scope', 'ownersSvc','dogsSvc', '$location', '$routeParams', '$rootScope', '$cookieStore', '_', function ($scope, ownersSvc, dogsSvc, $location, $routeParams, $rootScope, $cookieStore, _) {
            ownersSvc.getOwners().success(function (owners) {
                $scope.owners = owners;
            });

            ownersSvc.getOwner($routeParams.ownerId).success(function (owner) {
                $scope.owner = owner;
            });

            $scope.createOwner = function (newOwner) {
                ownersSvc.createOwner(newOwner);

            };

           dogsSvc.getDogs().success(function (dogs) {
             var myDogs = _.filter(dogs, function(dog) {
              return dog.owner === $scope.owner._id}
             );


             $scope.dogs = myDogs;
            })


            $scope.createDog = function (newDog) {
             var owner = $cookieStore.get('currentuser');
             newDog.owner = owner._id;
                dogsSvc.createDog({
                 owner:newDog.owner,
                 name:newDog.name,
                 image:newDog.image,
                 type:newDog.type,
                 weight:newDog.weight,
                 reminders:[]
                });
                $location.path('/owners/' + currentUser._id);
            };

            $scope.createReminder = function (dog, reminder) {
              dog.reminders.push(reminder);

             dogsSvc.createReminder(dog);

            };

            $scope.deleteReminder = function (dog, reminder) {
             console.log(dog);
             dog.reminders.splice(dog.reminders.indexOf(reminder), 1);
             dogsSvc.deleteReminder(dog);
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

            $scope.$on("dog:added", function () {
             dogsSvc.getDogs().success(function (dogs) {
               var myDogs = _.filter(dogs, function(dog) {
                return dog.owner === $scope.owner._id}
               );
               console.log(myDogs);

               $scope.dogs = myDogs;
               $scope.newDog = {};
              })
            })

// $scope.myInterval = 5000;
//   var slides = $scope.slides = [
//   { image:"http://www.bestfon.info/images/joomgallery/originals/animales_7/dog_with_glasses_20140320_2017987799.jpg"
//  },
//  {
//   image:"http://www.animalpictures1.com/data/media/177/dog_2560x1440.jpg"
//  }
//   ];

        }]);
})();
