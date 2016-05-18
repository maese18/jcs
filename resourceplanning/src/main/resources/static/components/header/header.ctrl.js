require('./header.css');
console.log('HeaderCtrl entered');

angular.module('components')
    .controller('HeaderCtrl', function ($rootScope, $scope, $location, $log, pageProvider, $mdSidenav) {
        console.log('HeaderCtrl in definition');
        var vm = this;
        $scope.iconColor = 'red';
        $scope.iconSize = '40';
        $scope.icon1 = 'room';
        $log.info('url currentHash:' + window.location.hash);
        $scope.selectedNav = pageProvider.getViews()[0].uiref;
        //Menu icon
        $scope.menuIconColor = 'gray';
        $scope.menuIcon = 'menu';

        $scope.toggleSidebar = buildToggler('left');
        function buildToggler(navID) {
            return function () {
                $mdSidenav(navID)
                    .toggle()
                    .then(function () {
                        $log.debug("toggle " + navID + " is done");
                    });
                $scope.menuIcon = $scope.menuIcon === 'menu' ? 'chevron_left' : 'menu';
                $scope.menuIconColor = $scope.menuIconColor === 'gray' ? 'red' : 'gray';
            };
        }

        $rootScope.$on('$viewContentLoading',
            function (event, viewConfig) {
                // Access to all the view config properties.
                // and one special property 'targetView'
                // viewConfig.targetView
                $log.info('State initialized to ' + window.location.hash);
            });
        $rootScope.$on('$stateChangeStart',
            function (event, toState, toParams, fromState, fromParams, options) {
                $scope.selectedNav = toState.name;
                $log.info('State changed to ' + toState.name);

            });

        $scope.selected = 0;

        vm.areas = pageProvider.getViews();
        //angular.forEach($scope.areas, function (area) {
        //    console.log('area.title=' + area.title);
        //
        //});

        $scope.navClicked = function (navigationTitle) {
            $scope.selectedNav = navigationTitle;
            $scope.toggleSidebar();
        };
        $scope.calculateNavIconColor = function (navigationTitle) {
            $scope.selectedNav = $scope.selectedNav === navigationTitle ? 'red' : '#606060';
        };


        $scope.morph = function () {
            $scope.iconColor = $scope.iconColor === 'red' ? 'blue' : 'red';
            $scope.icon1 = $scope.icon1 === 'room' ? 'announcement' : 'room';
        };

        console.log('HeaderCtrl initialized');

    });
