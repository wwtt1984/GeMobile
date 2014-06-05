/**
 * Created by USER on 14-5-12.
 */

Ext.define('GeMobile.view.typhoon.TfMain', {
    extend: 'Ext.Container',
    xtype: 'tfmain',

    requires: [
        'GeMobile.view.typhoon.TfMap'
    ],

    config: {
        itemId: 'tfmain',
        title: '台风',

        items: [
            {
                xclass: 'GeMobile.view.typhoon.TfMap'
            }
        ]
    }

});
