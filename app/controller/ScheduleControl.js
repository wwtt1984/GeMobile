/**
 * Created by USER on 14-5-5.
 */

Ext.define('GeMobile.controller.ScheduleControl', {
    extend: 'Ext.app.Controller',

    requires: [
        'Ext.app.Route'
    ],

    config: {

        refs: {
            info: 'main info',
            infofunction: '[itemId=infofunction]',
            schedule: 'info schedule',
            schedulecarousel: 'schedulecarousel',
            schedulelist: 'schedulelist',
            scheduledetail: 'info scheduledetail'
        },

        control: {
            schedulecarousel: {
//                activeitemchange: 'onScheduleCarouselChange'
            },
            schedulelist: {
                itemtap: 'onScheduleListItemTap'
            }
        }
    },

    //防汛值班列表页面初始化
    onScheduleInitialize: function(){
        var me = this;

//        me.onAllStoreLoad();
        me.schedule = me.getSchedule();
        if(!me.schedule){
            me.schedule= Ext.create('GeMobile.view.schedule.Schedule');
        }
        me.schedule.onDataSet();
        me.getInfo().push(me.schedule);


    },



    onAllStoreLoad: function(){

        var now = new Date();
        var year = now.getFullYear();
        var store = Ext.getStore('TfList');
        store.getProxy().setExtraParams({
            t: 'GetTflist',
            tfyear: year
        });
        store.load();

        var store1 = Ext.getStore('TfListPre');
        store1.getProxy().setExtraParams({
            t: 'GetTflist',
            tfyear: year-1
        });
        store1.load();

        var store2 = Ext.getStore('TfListNext');
        store2.getProxy().setExtraParams({
            t: 'GetTflist',
            tfyear: year+1
        });
        store2.load();
    },

    onScheduleListItemTap: function(list, index, target, record, e, eOpts){
        var me = this;

        me.scheduledetail = me.getScheduledetail();
        if(!me.scheduledetail){
            me.scheduledetail= Ext.create('GeMobile.view.schedule.ScheduleDetail');
        }
        me.scheduledetail.onDataSet(record);
        me.getInfofunction().hide();
        me.getInfo().push(me.scheduledetail);
    }
})