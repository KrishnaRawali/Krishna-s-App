angular.module('myApp', ['ngRoute'])
    .config(['$routeProvider', function($routeProvider){
        $routeProvider
            .when('/AboutUs', {
                templateUrl: 'components/Views/AboutUs/AboutUs.html',
                controller: 'AboutUsCtrl'
            })
            .when('/Orders', {
                templateUrl: 'components/Views/Orders/orders.html',
                controller: 'ordersCtrl'
            })
            .when('/Menu', {
                templateUrl: 'components/Views/Menu/Menu.html',
                controller: 'menuCtrl'

            })
            .when('/ContactUs',{
                templateUrl: 'components/Views/ContactUs/contactUs.html',
                controller: 'contactUsCtrl'
            })
            .otherwise({
                redirectTo: '/AboutUs'
            })




    }]);



