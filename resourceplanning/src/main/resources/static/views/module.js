/**
 * Created by tksne on 16.02.2016.
 */
console.log('Module views entered');
angular.module('views', [
        'common',
        'components'
    ])
    //load angular includes (those not required in routes configs).
    .run(function ($templateCache) {
        //$templateCache.put('header.tpl.html', require('./header/header.tpl.html'));
       //$templateCache.put('info.tpl.html', require('./home/info.tpl.html'));
    })

// add route config requires here if component has no controller

//controllers
require('./home/home.config.js');
console.log('Module views initialized');
