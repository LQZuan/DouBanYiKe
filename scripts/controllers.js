//实例化一个模块，用来专门管理所有的控制器
angular.module('Controllers', [])
//测试
.controller('DemoController', ['$scope', function ($scope) {
    console.log('启动了');
}])

//导航菜单
.controller('NavController', ['$scope', function ($scope) {
    //导航数据
    $scope.navs = [
        {link: '#/today', text: '今日一刻', icon: 'icon-home'},
        {link: '#/older', text: '往期内容', icon: 'icon-file-empty'},
        {link: '#/author', text: '热门作者', icon: 'icon-pencil'},
        {link: '#/category', text: '栏目浏览', icon: 'icon-menu'},
        {link: '#/favourite', text: '我的喜欢', icon: 'icon-heart'},
        {link: '#/settings', text: '设置', icon: 'icon-cog'}
    ];
}])

//今日一刻
.controller('TodayController', ['$scope', '$http', '$rootScope', function ($scope, $http, $rootScope) {
    //控制加载logo
    $rootScope.loaded = false;

    $http({
        url: './api/today.php',
        method: 'get'

    }).success(function (info) {
        // console.log(info);
        $scope.loaded = true;
        $scope.date = info.date;
        $scope.posts = info.posts;
        $rootScope.loaded = true;
    });
}])

//往期回顾
.controller('OlderController', ['$scope', '$http', '$rootScope', function ($scope, $http, $rootScope) {
    $rootScope.loaded = false;
    $http({
        url: './api/older.php',
        method: 'get'
    }).success(function (info) {
        // console.log(info);
        $scope.loaded = true;
        $scope.date = info.date;
        $scope.posts = info.posts;
        $rootScope.loaded = true;
    });
}])
// #/author', 
// #/category'
// #/favourite
// #/settings'
// 热门作者
.controller('AuthorController', ['$scope', '$http', '$rootScope', function ($scope, $http, $rootScope) {
    $rootScope.loaded = false;
    $http({
        url: './api/author.php',
        method: 'get'
    }).success(function (info) {
        // console.log(info);
        $scope.loaded = true;
        // $scope.authors = info.authors;
        // info = JSON.parse(info);
        // console.log(info);
        // console.log(info.all['authors']);

        $scope.rec = info.rec;
        $scope.all = info.all;
        // console.log(info.rec);
        $rootScope.loaded = true;
    });
}])
//栏目浏览
.controller('CategoryController', ['$scope', '$http', '$rootScope', function ($scope, $http, $rootScope) {
    $rootScope.loaded = false;
    $http({
        url: './api/category.php',
        method: 'get'
    }).success(function (info) {
        // console.log(info);
        $scope.loaded = true;
        $scope.columns = info.columns;
        // $scope.posts = info.posts;
        // console.log($scope.columns);
        $rootScope.loaded = true;
    });
}])
//我的喜欢
.controller('FavouriteController', ['$scope', '$http', '$rootScope', function ($scope, $http, $rootScope) {
    $rootScope.loaded = false;
    $http({
        url: './api/favourite.php',
        method: 'get'
    }).success(function (info) {
        // console.log(info);
        $scope.loaded = true;
        $scope.date = info.date;
        $scope.posts = info.posts;
        $rootScope.loaded = true;
    });
}])
//设置
.controller('SettingsController', ['$scope', function ($scope) {

}]);