/**
 * Created by USER on 14-5-20.
 */

Ext.define('GeMobile.view.schedule.ScheduleDetail', {
    extend: 'Ext.Panel',
    xtype: 'scheduledetail',

    requires: [
        'Ext.XTemplate'
    ],

    config: {
        title: '详细信息',

        scrollable: {
            direction: 'vertical',
            directionLock: true
        },

        style: 'background-color: #f7f7f7; padding:10px;',

//        emptyText: '<p class="no-searches" style="margin-top:50%;">没有离线消息</p>',

        tpl: Ext.create('Ext.XTemplate',
            '<div style="min-height:2.2em;line-height:2.2em;font-size:18px;font-weight:bold;width:100%;">>&nbsp;值班日期</div>',
            '<div style="min-height:2.2em;line-height:2.2em;font-size:14px;width:100%;text-indent:2em;">{sdate}</div>',
            '<div style="min-height:2.2em;line-height:2.2em;font-size:18px;font-weight:bold;width:100%;">>&nbsp;值班人员</div>',
            '<div style="min-height:2.2em;line-height:2.2em;font-size:14px;width:100%;text-indent:2em;">{sperson}</div>',
            '<div style="min-height:2.2em;line-height:2.2em;font-size:18px;font-weight:bold;width:100%;">>&nbsp;值班内容</div>',
            '<div style="min-height:2.2em;line-height:2.2em;font-size:14px;width:100%;text-indent:2em;">{scontent}</div>'
        )
    },

    onDataSet: function(record){
        this.setData({sdate: record.data.tfyear, sperson: record.data.tfname, scontent: record.data.tfname});
    }
})
