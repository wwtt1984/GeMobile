/**
 * Created by USER on 14-5-14.
 */

Ext.define('GeMobile.view.schedule.ScheduleList', {
    extend: 'Ext.List',
    xtype: 'schedulelist',

    requires: [
    ],

    config: {

        scrollable: {
            direction: 'vertical',
            directionLock: true
        },

        currentDate: '',

        loadingText: '努力加载中...',
        scrollToTopOnRefresh: false,
        cls: 'tidelist',
        infinite: true,
        variableHeights: false,
//        store: 'ScheduleStore',


        emptyText: '<p class="no-searches">没有符合要求的记录</p>',

        itemTpl: Ext.create('Ext.XTemplate',
            '<div style="width:100%;height:100%;font-size:18px;line-height:2.2em;min-height:42px; text-align:center;padding:0;margin:0;background:{[this.getTfbh(values)]};">',
            '<div style="width:30%;float:left;">{tfbh}</div>',
            '<div style="width:70%;float:right;">{tfname}、{tfname}</div>',
            '</div>',
            {
                getTfbh: function(values){
//                    debugger;
                    if(values.tfbh == '201402' || values.tfbh == '201302'){
                        return '#ccc';
                    }
                }
            }
        )
    }
});