
angular.module('common')
    .config(function ($provide) {
        $provide.provider('pageProvider', function ($stateProvider) {
            this.$get = function () {
                console.log('creates pageFactoryConst');
                var pages = [];

                console.info('created pageFactory:' + this);

                var factory = {};
                /*
                * Return all registered pages.
                */
                factory.getViews = function () {
                    return pages;
                };

                /*
                * Adds a view.
                * title: Display title
                * uiref: state used for ui-router
                * url: url
                * mdIcon: icon name
                 */
                //factory.addView = function (title, uiref, url, mdIcon,templateUrl,controllerName) {
                //    pages.push({title: title, uiref: uiref, url: url, mdIcon: mdIcon});
                //
                //    $stateProvider
                //        .state(uiref, {
                //            url: url,
                //            templateUrl: templateUrl,
                //            controller: controllerName
                //        });
                //};
                factory.addView = function (viewConfig) {
                    pages.push({title: viewConfig.title, uiref: viewConfig.uiref, url: viewConfig.url, mdIcon: viewConfig.mdIcon});

                    $stateProvider
                        .state(viewConfig.uiref, {
                            url: viewConfig.url,
                            templateUrl: viewConfig.templateUrl,
                            controller: viewConfig.controllerName
                        });
                };


                return factory;
            };
        });
    });
console.log('pageFactoryConst initialized');
