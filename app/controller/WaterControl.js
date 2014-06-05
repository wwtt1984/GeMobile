/**
 * Created by USER on 14-5-4.
 */

Ext.define('GeMobile.controller.WaterControl', {
    extend: 'Ext.app.Controller',

    requires: [
        'Ext.app.Route'
    ],

    config: {

        refs: {
            info: 'main info',
            infofunction: '[itemId=infofunction]',
//            infosearch: '[itemId=infosearch]',
            water: 'info water',
            waterline: 'info waterline'
        },

        control: {
            water: {
                itemtap: 'onWaterItemTap'
            }
        }
    },

    //水情列表页面初始化
    onWaterInitialize: function(){
        var me = this;
        me.onWaterStoreLoad();

        me.water = me.getWater();
        if(!me.water){
            me.water= Ext.create('GeMobile.view.water.Water');
        }
        me.getInfo().push(me.water);
    },

    //加载水情列表数据
    onWaterStoreLoad: function(){
        Ext.Viewport.setMasked({
            xtype: 'loadmask',
            message: '努力加载中...'
        });

        var store = Ext.getStore('WaterStore');

        store.removeAll();
        store.getProxy().setExtraParams({
            t: 'GetSWater'
//            t: 'GetWaterMainInfo',
//            results: 'main' + '$jsonp'
        });

        store.load(function(records, operation, success) {
            Ext.Viewport.setMasked(false);
        }, this);

        var detailstore = Ext.getStore('WaterDetailStore');
        detailstore.removeAll();
        detailstore.getProxy().setExtraParams({
            t: 'GetWDetail'
        });

        detailstore.load();
    },

    //点击水情列表，进入水位过程线页面
    onWaterItemTap: function(list, index, target, record, e, eOpts){

        var  me = this;

        me.waterline = this.getWaterline();
        if(!me.waterline){
            me.waterline= Ext.create('GeMobile.view.water.WaterLine');
        }
        me.waterline.SelectLineValue(record);
        me.getInfofunction().hide();
        me.getApplication().getController('MainControl').getInfosearch().show();
        me.getInfo().push(me.waterline);
    },

    //按日期查询水位过程线
    onWaterDayPick: function(){

        var me = this;

        if(!me.onDatePicker){
            me.onDatePicker = Ext.create('Ext.picker.Date', {
                useTitles: true,
                value: new Date(),
                monthText: '月',
                dayText: '日',
                yearText: '年',
                slotOrder:["year","month", "day"],
                yearFrom: 2010,
                yearTo: new Date().getFullYear(),
                doneButton: {
                    text: '确定'
                },
                cancelButton: {
                    text: '取消'
                },
                listeners: {
                    change: function(t, value, op) {
                        var date = value; //日期对象
                        if(value > new Date()){
                            Ext.Msg.alert('对不请，时间不能超过今天！');
                        }
                        else{
                            me.getWaterline().onWaterDayLoad(value);
                        }
                    }
                }
            });
            if (!me.onDatePicker.getParent()) {
                Ext.Viewport.add(me.onDatePicker);
            }
        }
        me.onDatePicker.show();
    }
})
