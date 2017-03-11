/**
 * Created by xmg on 2017/3/11.
 */
angular.module('app')
    .config(['$stateProvider','$urlRouterProvider',function ($stateProvider,$urlRouterProvider) {

        $stateProvider.state('home',{
            url:'/home',
            templateUrl:"../view/home_tpl.html"
        });
        $urlRouterProvider.otherwise('home');
    }]);