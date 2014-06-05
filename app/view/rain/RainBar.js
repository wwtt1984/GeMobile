/**
 * Created by USER on 14-5-4.
 */

Ext.define('GeMobile.view.rain.RainBar', {
    extend: 'Ext.Container',
    xtype: 'rainbar',

    requires: [
        'Ext.chart.CartesianChart',
        'Ext.chart.axis.Category',
        'Ext.chart.axis.Numeric',
        'Ext.chart.series.Bar',
        'Ext.chart.interactions.PanZoom'
    ],

    config: {
        layout: 'fit',
        title: '雨量柱状图',
        items: [
            {
                xtype: 'chart',
                itemId: 'rainchart',

                store: 'RainDayStore',
                innerPadding: {
                    top: 15
                },
                interactions: [
                    {
                        type: 'panzoom'
//                        panGesture: 'none'
                    }
                ],
                axes: [
                    {
                        type: 'category',
                        position: 'bottom',
                        style: {
                            estStepSize: 16
                        },
                        fields: ['time'],
                        label: {
                            font: '12px Helvetica'
                        },
                        title: {
                            text: '时间',
                            font: '18px Helvetica'
                        }
                    },
                    {
                        type: 'numeric',
                        minimum: 0,
                        position: 'left',
                        style: {
                            estStepSize: 8
                        },
                        field: 'value',
                        title: {
                            text: '雨量',
                            font: '18px Helvetica'
                        },
                        label: {

                            font: '12px Helvetica'
                        }
                    }],
                series: [
                    {
                        type: 'bar',
                        xField: 'time',
                        yField: 'value',

                        axis: 'left',
                        label: {
                            font: '13px Helvetica',
                            orientation: 'vertical',
                            display: 'insideEnd',
                            textBaseline: 'middle',
                            textAlign: 'center',
                            field: 'value'
                        },
                        style: {
                            stroke: '#333',
                            fill: 'rgb(49,235,247)',
                            minGapWidth: 8
                        }
                    }]
            }]
    },

    initialize: function() {

    },

    SelectBarValue: function(record) {

        var me = this;
        me.stcd = record.data.stcd;
        me.stnm = record.data.stnm;

        Ext.ComponentQuery.query('#rainchart')[0]._axes[1].setMaximum(parseFloat(record.data.rain3h) + 1.00);

        var date = new Date();

        Ext.ComponentQuery.query('#rainchart')[0]._axes[0].setTitle(Ext.Date.format(new Date(), 'Y-m-d').toString());

        var store = Ext.getStore('RainDetailStore');
        store.clearFilter();
        store.filter("stcd", record.data.stcd);

        var store1 = Ext.getStore('RainDayStore');
        store1.setData(store.getData().items);

        this.setTitle(record.data.stnm + "雨量柱状图");


//        Ext.ComponentQuery.query('#rainchart')[0].redraw();
    },

    onRainDayLoad: function(date){

        var me = this;

        if(date>new Date()){
            Ext.Msg.alert('错误','查询的日期晚于今日！');
        }
        else{
            var store = Ext.getStore('RainDayStore');
            var now = Ext.Date.format(date, 'Y-m-d');
            store.getProxy().setExtraParams({
                t: 'GetRSelect',
                date: now,
                stcd: me.stcd
            });
            store.load(function(records, operation, success) {
                var max=0;
                if(store.getCount() > 1){
                    for(i=0;i<store.getCount();i++)
                    {
                        max = Math.max(max,store.getData().items[i].data.value);
                    }
                    Ext.ComponentQuery.query('#rainchart')[0]._axes[1].setMaximum(max + 1.00);
                }
                else if((store.getCount() == 1)&&(store.getData().items[0].data.time != "")){

                    var p = parseFloat(store.getData().items[0].data.time.substring(0,store.getData().items[0].data.time.indexOf("时")));

                    for(i=1;i<=(31-p);i++){
                        if(i>=(24-p)){
                            hq.push({stcd:stcd,stnm:stnm,time:((i+p)-24)+'时',value:0});
                        }
                        else{
                            hq.push({stcd:stcd,stnm:stnm,time:(i+p)+'时',value:0});
                        }
                    }
                    max = parseFloat(store.getData().items[0].data.value);
                    store.setData(hq);
                }
                else{
                    max = 1;
                    var hq = [];
                    for(j=0;j<24;j++){
                        if(j>=16){
                            hq.push({stcd:stcd,stnm:stnm,time:(j-16)+'时',value:0.00});
                        }
                        else{
                            hq.push({stcd:stcd,stnm:stnm,time:(j+8)+'时',value:0.00});
                        }
                    }
                    store.setData(hq);
                }
                Ext.ComponentQuery.query('#rainchart')[0]._axes[0].setTitle(now);
                Ext.ComponentQuery.query('#rainchart')[0].redraw();
            });
        }
    }
});