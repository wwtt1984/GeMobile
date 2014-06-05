/**
 * Created by USER on 14-5-26.
 */

Ext.define('GeMobile.controller.WarningControl', {
    extend: 'Ext.app.Controller',

    requires: [
        'Ext.app.Route'
    ],

    config: {

        refs: {
            info: 'main info',
            infofunction: '[itemId=infofunction]',

            warning: 'info warning'
        },

        control: {

        }
    },

    onWarningInitialize: function(){

        var me = this;

        me.warning = me.getWarning();

        if(!me.warning){
            me.warning = Ext.create('GeMobile.view.warning.Warning');
        }

//        me.warning.onLocationSet();
        me.getInfo().push(me.warning);
    }

});