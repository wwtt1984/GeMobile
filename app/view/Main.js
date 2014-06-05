Ext.define('GeMobile.view.Main', {
    extend: 'Ext.Container',
    xtype: 'main',

    requires: [
        'GeMobile.view.Login',
        'GeMobile.view.Function'
    ],
    config: {

        layout: 'card',


        items: [
            {
                xclass: 'GeMobile.view.Login'
            },
            {
                xclass: 'GeMobile.view.Function'
            }
        ]
    }
});
