/**
 * Created by marcs on 26.02.2016.
 */
angular.module('common')
    .directive('shrinkOnScroll', function ($document) {
        return {
            restrict: 'A',
            link: function ($scope,$log, element ) {
                var self = {};
                self.rootId = element.rootId;
                self.scrollClass = element.scrollClass;
                self.defaultClass = element.defaultClass;

                $document.bind('scroll', function () {
                    //if accessed via document
                    //var elClassList = document.getElementById(self.targetId).classList;
                    var elClassList = element.$$element[0].classList;
                    if (window.pageYOffset >= 100) {
                        elClassList.remove(self.defaultClass);
                        elClassList.add(self.scrollClass);
                    } else {
                        elClassList.remove(self.scrollClass);
                        elClassList.add(self.defaultClass);
                    }
                });
            }
        };
    });

