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
  var buyItems = [
    {name: 'cookies', quantity: 10,},
    {name: 'bottles of milk', quantity: 2},
    {name: 'apples', quantity: 3},
    {name: 'banana', quantity: 1},
    {name: 'eggs', quantity: 6}
  ];
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
