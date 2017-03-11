var app =  angular.module('app',['ui.router'])

/*创建控制器的方法
 * 1.直接在创建模块后面， 写上controller 代码量非常大， 不容易管理
 * 2.把所有控制器交给一个模块来管理 。在app模块当中。注入控制器模块  用在项目比较小的情况。
 * 3.每一个控制器单独创建一个文件。 使用angular.module('app').controller来创建控制器。 比较大时，每个控制器单独使用个文件来管理。
 * */
