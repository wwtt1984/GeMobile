/**
 * Created by USER on 14-5-4.
 */

Ext.define('GeMobile.view.water.WaterLine', {
    extend: 'Ext.Container',
    xtype: 'waterline',

    requires: [
        'Ext.chart.Chart',
        'Ext.chart.axis.Numeric',
        'Ext.chart.axis.Category',
        'Ext.chart.series.Line',
        'Ext.chart.interactions.PanZoom'
    ],

    config: {

        layout: 'fit',
        title: '水位过程线',
        items: [
            {
                xtype: 'chart',
                store: 'WaterDayStore',
                itemId: 'waterchart',
                interactions:
                {
                    type: 'panzoom'
//                    panGesture: 'none'
                },

                insetPadding: {
                    top: 15,
                    right: 15
                },
                series: [
                    {
                        type: 'line',
                        xField: 'time',
                        yField: 'value',

                        style: {
                            stroke: 'blue',
                            lineWidth: 2
                        },
                        highlightCfg: {
                            scale: 2
                        },
                        marker: {
                            type: 'circle',
                            stroke: '#blue',
                            fill: '#115fa6',
                            lineWidth: 2,
                            radius: 4
                        },
                        label: {
                            font: '13px Helvetica',
                            orientation: 'horizontal',
                            display: 'rotate',
                            textBaseline: 'middle',
                            textAlign: 'center',
                            field: 'value'
                        }
                    }],
                axes: [
                    {
                        type: 'numeric',
                        fields: ['value'],
                        minimum: 0,
                        position: 'left',
                        style: {
                            estStepSize: 8
                        },
                        title: {
                            text: '水位',
                            font: '18px Helvetica'
                        },
                        label: {
                            font: '13px Helvetica'
                        }
                    },
                    {
                        type: 'category',
                        fields: ['time'],
                        position: 'bottom',
                        style: {
                            estStepSize: 25
                        },
                        label: {
                            field: 'time',
                            font: '13px Helvetica'
                        },
                        title: {
                            text: '时间',
                            font: '18px Helvetica'
                        }
                    }
                ]
            }
        ]
    },

    initialize: function() {
    },

    SelectLineValue: function(record) {

        var me = this;
        me.stcd = record.data.stcd;
        me.stnm = record.data.stnm;

        Ext.ComponentQuery.query('#waterchart')[0]._axes[0].setMaximum(parseFloat(record.data.max) + 2.00);

        var detailstore = Ext.getStore('WaterDetailStore');
        detailstore.clearFilter();
        detailstore.filter("stcd", record.data.stcd);

        var store = Ext.getStore('WaterDayStore');
        store.setData(detailstore.getData().items);


        me.setTitle(record.data.stnm + "水位过程线");
        Ext.ComponentQuery.query('#waterchart')[0]._axes[1].setTitle(Ext.Date.format(new Date(), 'Y-m-d').toString());
        Ext.ComponentQuery.query('#waterchart')[0].redraw();

    },

    onWaterDayLoad: function(date){

        var me = this;

        if(date>new Date()){
            Ext.Msg.alert('错误','查询的时间晚于今日！');
        }
        else{

            var store = Ext.getStore('WaterDayStore');
            var now = Ext.Date.format(date, 'Y-m-d');;
            store.getProxy().setExtraParams({
                t: 'GetWSelect',
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
                    Ext.ComponentQuery.query('#waterchart')[0]._axes[0].setMaximum(parseFloat(max) + 3.00);
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
                            hq.push({stcd:stcd,stnm:stnm,time:(j-16)+'时',value:0});
                        }
                        else{
                            hq.push({stcd:stcd,stnm:stnm,time:(j+8)+'时',value:0});
                        }
                    }
                    store.setData(hq);
                }
                Ext.ComponentQuery.query('#waterchart')[0]._axes[1].setTitle(now);
                Ext.ComponentQuery.query('#waterchart')[0].redraw();
            });
        }
    }
});