'use strict';

//view1 is the main view for now with user input and view on the objects in list.
angular.module('myApp.view1', ['ngRoute', 'myApp.itemAdder', 'myApp.shoppingList'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {
    templateUrl: 'view1/view1.html',
    controller: 'View1Ctrl'
  });
}])

.controller('View1Ctrl', ['$scope', 'basket', function($scope, basket) {

    //use basket service provided by item-adder module. Allows to add/edit/remove items from the list
    $scope.basket = basket;

}]);
