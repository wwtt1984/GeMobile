/**
 * Created by USER on 14-4-28.
 */

Ext.define('GeMobile.controller.RainControl', {
    extend: 'Ext.app.Controller',

    requires: [
        'Ext.app.Route'
    ],

    config: {

        refs: {
            info: 'main info',
            infofunction: '[itemId=infofunction]',
//            infosearch: '[itemId=infosearch]',
            rain: 'info rain',
            rainbar: 'info rainbar'
        },

        control: {
            rain: {
                itemtap: 'onRainItemTap'
            }
        }
    },

    //雨情列表页面初始化
    onRainInitialize: function(){
        this.onRainStoreLoad();

        this.rain = this.getRain();
        if(!this.rain){
            this.rain= Ext.create('GeMobile.view.rain.Rain');
        }
        this.getInfo().push(this.rain);
    },

    //rainstore加载
    onRainStoreLoad: function(){

        Ext.Viewport.setMasked({
            xtype: 'loadmask',
            message: '努力加载中...'
        });

        var store = Ext.getStore('RainStore');

        store.removeAll();
        store.getProxy().setExtraParams({
            t: 'GetSRain'
//            t: 'GetRainInfo',
//            results: 'jsonp'
        });

        store.load(function(records, operation, success) {
            Ext.Viewport.setMasked(false);
        }, this);

        var detailstore = Ext.getStore('RainDetailStore');
        detailstore.removeAll();
        detailstore.getProxy().setExtraParams({
            t: 'GetRDetail'
        });

        detailstore.load();
    },

    //雨情列表 点击 事件，查看相应的 雨量柱状图
    onRainItemTap: function(list, index, target, record, e, eOpts){

        var me = this;
        me.rainbar = me.getRainbar();
        if(!me.rainbar){
            me.rainbar= Ext.create('GeMobile.view.rain.RainBar');
        }

        me.rainbar.SelectBarValue(record);
        me.getInfofunction().hide();
        me.getApplication().getController('MainControl').getInfosearch().show();
        me.getInfo().push(this.rainbar);

    },

    //按日期查看雨量柱状图
    onRainDayPick: function(){

        var me = this;

        if(!me.onDayPicker){
            me.onDayPicker = Ext.create('Ext.picker.Date', {
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

                            me.getRainbar().onRainDayLoad(value);
                        }
                    }
                }
            });
            if (!me.onDayPicker.getParent()) {
                Ext.Viewport.add(me.onDayPicker);
            }
        }
        me.onDayPicker.show();
    }

})