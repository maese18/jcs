require('./home.ctrl');
console.log('entered home.config');
angular.module('views')
    .config(function ($stateProvider) {
        console.log('home.config config() entered');

    })
    .run(function ($templateCache,pageProvider) {
         $templateCache.put('./views/home/home.tpl.html', require('./home.tpl.html'));
        pageProvider.addView({
            title: "Home",
            uiref: "home",
            url: "/home",
            mdIcon: "home",
            templateUrl:"./views/home/home.tpl.html",
            controllerName:"HomeCtrl"
        });
    })
console.log('exited home.config');
