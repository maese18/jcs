angular.module('common')
    .factory('clientId', function clientIdFactory() {
        return 'a12345654321x';
    })

    .factory('pageFactory', function pageFactory() {
        console.log('creates pageFactory');
        //var pages = [];
        var pages = [
            {activation: '', title: 'Home', uiref: 'home', mdIcon: 'home'},
            {activation: 'active', title: 'Contract', uiref: 'examplesHome', mdIcon: 'vibration'},
            {activation: '', title: 'Product', uiref: 'examplesHome', mdIcon: 'list'},
            {activation: '', title: 'Kontakt', uiref: 'kontakt', mdIcon: 'contact_mail'}
        ];

        console.info('created pageFactory:' + this);

        return {
            getPages: function () {
                return pages;
            },
            addView: function (title, uiref, url, mdIcon) {
                pages.push({activation: '', title: title, uiref: uiref, url: url, mdIcon: mdIcon});
            }
        };

    });
console.log('PageFactory initialized');
