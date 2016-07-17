// 不指定对象名，则以文件名作为对外公开的对象名，调用函数方式module.outerFunction1();
// 指定对象名，则以对象名访问变量和函数 
    // 指定：var module1 = (function () {})(); 
    // 访问：module1.outerFunction1();
// 本次项目默认不指定对象名方式：
(function () {

    "use strict"; // 使用严格模式-这行不能删

    var innerProperty = '';  //内部变量,不对外公开
    var outerProperty = '';  //对外公开的变量

    // 内部函数,不对外公开
    var innerFunction = function (params) { };

    // 对外公开的函数
    var outerFunction = function (params) { };

    // 这里定义对外公开的变量和函数
    return {
        outerProperty1: outerProperty,
        outerFunction1: outerFunction
    };
})();