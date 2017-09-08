var app = angular.module("myApp",[]);

//<!--“@”是通过 DOM 的属性来跟父控制器进行数据绑定-->将隔离作用域成员与父作用域属性单向绑定
// app.controller("mytest", function ($scope) {
//    $scope.name = "jack";
//    $scope.age = 25;
// });

// app.directive("test", function () {
//    return {
//        restrict: "AE",
//        template: '<div>{{attr1}}<p>{{attr2}}</p></div>',
//        replace: false,
//        // 生成一个 隔离作用域
//        scope: {
//            attr1: "@",
//            attr2:"@"
//        },
//        controller: function ($scope) {
//            //  pass
//        },
//        link: function (scope,element,attrs) {
//         /**
//          * 对指令内部进行操作，更多的是操作DOM ，绑定事件，以及与scope 进行关联 
//          */
//        }
//    }
// });

//<!--“=”有双重绑定的功能,比如mytest控制器与test子指令进行双重绑定(单个字符串、对象都是有效的)下面代码用对象来演示-->  将隔离作用域成员与父作用域属性双向绑定

// app.controller("mytest", function ($scope) {
//    $scope.data2 = {
//        name: "jack",
//        age: 25
//    }
// });

// app.directive("test", function () {
//    return {
//        restrict: "E",
//        template: '<div data1="data2">子指令:<input ng-model="data1.name" /></div>',
//        replace: true,
//        scope: {
//            data1: "="
//        },
//        controller: function ($scope) {
            // pass

//        },
//        link: function (scope,element,attrs) {
            // pass

//        }
//    }
// });

//“&”的意思是子指令能调用父控制器的方法,这里的指令template元素点击调用控制器的getName方法   -->将隔离作用域成员与父作用域方法单向绑定

app.controller("mytest", function ($scope) {
    $scope.getName = function () {
        console.log("jack ,点击调用父方法的内容");
    }
});

app.directive("test", function () {
    return {
        restrict: "E",
        template: '<div get-name-Content="getName()">子指令:<a href="javascript:void(0)" ng-click="getNameContent()">点击调用父方法</a></div>',
        replace: true,
        scope: {
            getNameContent: "&"
        },
        controller: function ($scope) {
          //pass
        },
        link: function (scope,element,attrs) {
            //pass 
        }
    }
});
