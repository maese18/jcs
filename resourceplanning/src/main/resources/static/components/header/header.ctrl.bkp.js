require('./header.css');
console.log('HeaderCtrl entered');

angular.module('components')
    .controller('HeaderCtrl', function ( $scope, $location, $log,pageFactory, $mdSidenav) {
        console.log('HeaderCtrl in definition');
        var vm = this;
        $scope.iconColor = 'red';
        $scope.iconSize = '40';
        $scope.icon1 = 'room';

        $scope.selectedNav = pageFactory.getViews()[0].title;
        //Menu icon
        $scope.menuIconColor = 'gray';
        $scope.menuIcon = 'menu';

        $rootScope.$on('$stateChangeStart',
            function (event, toState, toParams, fromState, fromParams, options) {
                $scope.selectedNav = toState;
                $log.info('State changed to ' + toState);
            });

        $scope.selected = 0;

        vm.areas = pageFactory.getViews();
        angular.forEach($scope.areas, function (area) {
            console.log('area.title=' + area.title);

        });

        $scope.navClicked = function (navigationTitle) {
            $scope.selectedNav = navigationTitle;
        };
        $scope.calculateNavIconColor = function (navigationTitle) {
            $scope.selectedNav = $scope.selectedNav === navigationTitle ? 'red' : '#606060';
        };

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
        };
        $scope.morph = function () {
            $scope.iconColor = $scope.iconColor === 'red' ? 'blue' : 'red';
            $scope.icon1 = $scope.icon1 === 'room' ? 'announcement' : 'room';
        }

        console.log('HeaderCtrl initialized');

    });
