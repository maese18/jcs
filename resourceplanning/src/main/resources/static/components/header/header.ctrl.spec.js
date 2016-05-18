describe('components.header.ctrl tests', function () {

    beforeEach(module('app'));

    var headerCtrl, scope;

    beforeEach(inject(function ($rootScope, $controller) {
        scope = $rootScope.$new();
        headerCtrl = $controller('HeaderCtrl', {
            $scope: scope
        });
    }));

    it('test header area configuration', function () {
        expect(scope.areas[0].title).toBe('Home');
    });



});
