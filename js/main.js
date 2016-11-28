/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var app = angular.module("app", []);

app.controller('MainController', ['$scope',
    function ($scope) {
        $scope.info = [{
            pseudo:"",
            message:""
            
        }];
    
        $scope.envoi = function () {
//            if($scope.info.pseudo === null){
//                $(".form").append('<input type="text" id="pseudo" placeholder="Votre pseudo..."/>');
//            };
        };
    }]);
