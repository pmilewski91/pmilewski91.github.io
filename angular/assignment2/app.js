(function () {
'use strict';

angular.module('app', [])
.controller('buyList', buyList)
.controller('boughtList', boughtList)
.service('shoppingListService', shoppingListService)

//controller1
buyList.$inject = ['shoppingListService'];
function buyList(shoppingListService){
  var buy = this;
  buy.items = shoppingListService.showBuyItems();
  buy.boughtItem = function(buyItemsIndex){
    shoppingListService.boughtItem(buyItemsIndex);
  }
};

//controller2
buyList.$inject = ['shoppingListService'];
function boughtList(shoppingListService){
  var bought = this;
  bought.items = shoppingListService.showBoughtItems();
};
//service
function shoppingListService(){
  var service = this;
  var buyItems = ['10 cookies', '2 bottles of milk', '3 apples', '1 banana', '6 eggs'];
  var boughtItems = [];

  service.showBuyItems = function(){
    return buyItems;
  };
  service.showBoughtItems = function(){
    return boughtItems;
  };
  service.boughtItem = function(buyItemsIndex){
    boughtItems.push(buyItems[buyItemsIndex]);
    buyItems.splice(buyItemsIndex,1);
  };
};
})();
