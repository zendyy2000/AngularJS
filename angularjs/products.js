app.controller("products", function ($scope) {
    $scope.Products = [
        {
            name: "Samsung Galaxy S5",
            image: "product-1.jpg",
            new: 300.00,
            old: "$700.00",
        },
        {
            name: "Nokia Lumia 1320",
            image: "product-2.jpg",
            new: 500.00,
            old: "$700.00",
        },
        {
            name: "LG Leon 2015",
            image: "product-3.jpg",
            new: 200.00,
            old: "$700.00",
        },
        {
            name: "Sony Microsoft",
            image: "product-4.jpg",
            new: 400.00,
            old: "$700.00",
        },
        {
            name: "IPhone 7",
            image: "product-5.jpg",
            new: 900.00,
            old: "$700.00",
        },
        {
            name: "Samsung Galaxy Y5",
            image: "product-1.jpg",
            new: 300.00,
            old: "$700.00",
        },
        {
            name: "Nokia Lumia 1320",
            image: "product-2.jpg",
            new: 200.00,
            old: "$700.00",
        },
        {
            name: "LG Leon 2015",
            image: "product-3.jpg",
            new: 500.00,
            old: "$700.00",
        },
        {
            name: "Sony Microsoft",
            image: "product-4.jpg",
            new: 200.00,
            old: "$700.00",
        },
        {
            name: "IPhone 6",
            image: "product-5.jpg",
            new: 300.00,
            old: "$700.00",
        },
        {
            name: "Samsung Galaxy S5",
            image: "product-1.jpg",
            new: 300.00,
            old: "$700.00",
        },
        {
            name: "Nokia Lumia 1320",
            image: "product-2.jpg",
            new: 500.00,
            old: "$700.00",
        },
        {
            name: "LG Leon 2015",
            image: "product-3.jpg",
            new: 200.00,
            old: "$700.00",
        },
        {
            name: "Sony Microsoft",
            image: "product-4.jpg",
            new: 400.00,
            old: "$700.00",
        },
        {
            name: "IPhone 7",
            image: "product-5.jpg",
            new: 900.00,
            old: "$700.00",
        },
        {
            name: "IPhone 7",
            image: "product-5.jpg",
            new: 900.00,
            old: "$700.00",
        },
    ];

    
    $scope.begin = 0;
    $scope.pageCount = Math.ceil($scope.Products.length / 8);
    $scope.first = function () {
        $scope.begin = 0;
    }

    $scope.prev = function () {
        if ($scope.begin > 0) {
            $scope.begin -= 8;
        }
    }

    $scope.next = function () {
        if ($scope.begin < ($scope.pageCount - 1) * 8) {
            $scope.begin = $scope.begin + 8;
        }
    }

    $scope.last = function () {
        $scope.begin = ($scope.pageCount - 1) * 8;
    }
});


