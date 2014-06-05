/**
 * Created by USER on 14-4-28.
 */

Ext.define('GeMobile.view.Info', {
    extend: 'Ext.navigation.View',
    xtype: 'info',

    requires: [
    ],
    config: {

        itemId: 'info',

        navigationBar: {
            layout: {
                pack: 'center',
                type: 'hbox'
            },
            ui: 'light',
            items: [
                {
                    xtype: 'button',
                    itemId: 'infofunction',
                    ui: 'back',
                    text: '主页面'
                },
                {
                    xtype: 'button',
                    itemId: 'infosearch',
                    ui: 'plain',
                    iconCls: 'search',
                    align: 'right',
                    hidden: true
                },
                {
                    xtype: 'button',
                    itemId: 'selectconfirm',
                    text: '确定',
                    align: 'right',
                    hidden: true
                }
            ]
        },

        itemId: 'info',

        defaultBackButtonText: '返回'
    }
});