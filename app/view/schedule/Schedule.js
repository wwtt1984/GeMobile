/**
 * Created by USER on 14-5-5.
 */

Ext.define('GeMobile.view.schedule.Schedule', {
    extend: 'Ext.Panel',
    xtype: 'schedule',

    requires: [
        'GeMobile.view.schedule.ScheduleList'
    ],

    config: {
        title: '防汛值班',
        itemId: 'schedule',
//        fullscreen: true,
        layout: 'fit',
        items: [
            {
                docked: 'top',
                xtype: 'panel',
                itemId: 'schedule_header',
                cls: 'tide-header',
                style: 'height:2.8em;',
                tpl: Ext.create('Ext.XTemplate',
                    '<div style="width:100%;height:2.2em;">',
                        '<div style="width:10%;height:100%;float:left;" id="{[this.getLinkId(values,0)]}"><img src="resources/images/larr.png"/></div>',
                        '<div style="width:80%;height:100%;float:left;">{header}</div>',
                        '<div style="width:10%;height:100%;float:right;" id="{[this.getLinkId(values,1)]}"><img src="resources/images/rarr.png"/></div>',
                    '</div>',
                    '<div style="width:100%;font-size:16px;line-height: 1em;margin-top: -12px;position: absolute;">',
                        '<div style="width:30%;height:100%;float:left;">日期</div>',
                        '<div style="width:70%;height:100%;float:right;">值班人员</div>',
                    '</div>',
                    {

                        getLinkId: function(values,index){
                            var result = Ext.id();
                            Ext.Function.defer(this.addListener, 1, this, [result,values,index]);
                            return result;
                        },
                        addListener: function(id,values,index) {
                            var me = this;

                            Ext.get(id).addListener('tap', function(e){

                                e.stopEvent();

                                Ext.ComponentQuery.query('#schedule')[0].onActiveItemChange(index);
                            })//////增加点击的事件
                        }
                    }
                )
            }
        ]
    },

    onDataSet: function(){
        Ext.ComponentQuery.query('#schedule_header')[0].setData({header:2014});
        var sche = Ext.create('GeMobile.view.schedule.ScheduleCarousel',{
            xtype: 'schedulecarousel',
            scheHeader: '#schedule_header',
//            itemId: 'schedulecarousel',
            currentDate: 2014,
            direction: 'horizontal',
            preStore: 'PreScheduleStore',
            currentStore: 'ScheduleStore',
            nextStore: 'NextScheduleStore'
        });
        this.add(sche);
    },

    onActiveItemChange: function(index){
        var me = this;
        var car = me.down('carousel');
        var carindex = car.getActiveIndex();
        var count = car.getItems().getCount();

        if(index == 0){
            if(carindex == 0){
                plugins.Toast.ShowToast("没有更早的了！",3000);
                Ext.Msg.alert('没有更早的了');

            }
            else{
                car.setActiveItem(carindex - 1);
            }
        }
        else{
            if(carindex == count - 1){
                plugins.Toast.ShowToast("没有更晚的了！",3000);
//                Ext.Msg.alert('没有更晚的了');
            }
            else{
                car.setActiveItem(carindex + 1);
            }
        }
    }
})