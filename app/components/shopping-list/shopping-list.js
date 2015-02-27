angular.module('myApp.shoppingList', ['myApp.itemAdder'])
.directive('shoppingList', ['basket',function (basket) {
    return {
	templateUrl: "components/shopping-list/shopping-list-template.html",
        restrict: 'E',
        link: function (scope, element, attrs) {
	   
        }
    }
}]);
