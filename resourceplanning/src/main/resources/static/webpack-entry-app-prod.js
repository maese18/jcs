// Application bootstrapping
(function(){
    'use strict';

    require('./app.js');

    //Profile
    angular.module('app')
        .constant('ENV',{
            BASE_URI:'http://localhost:3000'
        })
})();


