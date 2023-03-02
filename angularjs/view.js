var app = angular.module("myApp", []);

app.controller("cartCtrl", function ($scope) {
  $scope.Product = {};
  $scope.add = function () {
    $scope.cart.push(angular.copy($scope.Product))
  }
  $scope.cart = [
    {
      name: "Nokia Lumia 1320",
      image: "product-2.jpg",
      new: 200,
      quantity: 1
    },
    {
      name: "Iphone 6",
      image: "product-5.jpg",
      new: 500,
      quantity: 2
    },
    {
      name: "Samsung Galaxy Y",
      image: "product-1.jpg",
      new: 150,
      quantity: 4
    }
  ];

  $scope.calculateTotal = function () {
    var total = 0;
    for (var i = 0; i < $scope.cart.length; i++) {
      total += $scope.cart[i].new * $scope.cart[i].quantity;
    }
    $scope.total = total;
  };

  $scope.calculateTotal();

  $scope.addItem = function (product) {
    // kiểm tra sản phẩm đã có trong giỏ hàng chưa
    var found = false;
    for (var i = 0; i < $scope.cart.length; i++) {
      if ($scope.cart[i].id === product.id) {
        $scope.cart[i].quantity++;
        found = true;
        break;
      }
    }
    // nếu chưa có thì thêm sản phẩm vào giỏ hàng
    if (!found) {
      $scope.cart.push({
        id: product.id,
        name: product.name,
        price: product.price,
        quantity: 1
      });
    }
  };

  $scope.removeItem = function (item) {
    var index = $scope.cart.indexOf(item);
    $scope.cart.splice(index, 1);
  };

});
