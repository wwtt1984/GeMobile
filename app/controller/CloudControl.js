/**
 * Created by USER on 14-5-8.
 */

Ext.define('GeMobile.controller.CloudControl', {
    extend: 'Ext.app.Controller',

    requires: [
        'Ext.app.Route'
    ],

    config: {

        refs: {
            info: 'main info',
            infofunction: '[itemId=infofunction]',
            cloud: 'info cloud',

            cloudstart: '[itemId=cloudstart]'
        },

        control: {
            cloudstart: {
                tap: 'onCloudStartTap'
            }
        }
    },

    //卫星云图页面初始化
    onCloudInitialize: function(){

        var me = this;
        me.cloud = me.getCloud();
        if(!me.cloud){
            me.cloud= Ext.create('GeMobile.view.cloud.Cloud');
        }
//        me.cloud.stopIntervalQxldToBack();
        me.cloud.loadstore();
        me.getInfo().push(me.cloud);
    },

    onCloudStartTap: function() {
        var me = this;
        me.getCloud().clickStartToChangePic();
    }
})