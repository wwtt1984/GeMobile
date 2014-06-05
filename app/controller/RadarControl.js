/**
 * Created by USER on 14-5-9.
 */

Ext.define('GeMobile.controller.RadarControl', {
    extend: 'Ext.app.Controller',

    requires: [
        'Ext.app.Route'
    ],

    config: {

        refs: {
            info: 'main info',
            infofunction: '[itemId=infofunction]',
            radar: 'info radar',

            radarstart: '[itemId=radarstart]'
        },

        control: {
            radarstart: {
                tap: 'onRadarStartTap'
            }
        }
    },

    //卫星云图页面初始化
    onRadarInitialize: function(){

        var me = this;
        me.radar = me.getRadar();
        if(!me.radar){
            me.radar= Ext.create('GeMobile.view.radar.Radar');
        }
//        me.cloud.stopIntervalQxldToBack();
        me.radar.loadstore();
        me.getInfo().push(me.radar);
    },

    onRadarStartTap: function() {
        var me = this;
        me.getRadar().clickStartToChangePic();
    }
})