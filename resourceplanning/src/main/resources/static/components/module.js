/**
 * Created by tksne on 16.02.2016.
 */
angular.module('components', [
        'ngMaterial',
        //'ngAnimate',
        //'ngSanitize',
        ////'angular-loading-bar',
        'ui.router',
        'common'
    ])
    //load angular includes (those not required in routes configs).
    .run(function ($templateCache) {
        $templateCache.put('header.tpl.html', require('./header/header.tpl.html'));
    })

// add route config requires here if component has no controller
console.log('Module "components" created');

//controllers
require('./header/header.ctrl.js');
console.log('Module "components" loaded header and footer');
