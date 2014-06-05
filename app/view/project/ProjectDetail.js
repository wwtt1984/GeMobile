/**
 * Created by USER on 14-5-8.
 */

Ext.define('GeMobile.view.project.ProjectDetail', {
    extend: 'Ext.Panel',
    xtype: 'projectdetail',

    requires: [
        'Ext.XTemplate'
    ],

    config: {
        title: '详细信息',

        scrollable: {
            direction: 'vertical',
            directionLock: true
        },

        style: 'background-color: #f7f7f7; padding:5px;',

//        emptyText: '<p class="no-searches" style="margin-top:50%;">没有离线消息</p>',

        tpl: Ext.create('Ext.XTemplate',
            '<table style="background-color: #fff;" width="100%">',
            '<tpl for=".">',
            '<tr width="100%" style="height: 2.2em;line-height:2.2em;border:1px solid #ccc;font-size:16px;text-align:center;">',
            '<td width="40%" style="border:1px solid #ccc;">{data.type}</td>',
            '<td width="60%" style="border:1px solid #ccc;">{[this.formatNull(values.data.value)]}</td>',
            '</tr>',
            '</tpl>',
            '</table>',
            {
                formatNull: function(data) {
                    if(data != ''){
                        return data;
                    }
                    else{
                        return '--';
                    }
                }
            }
        )
    },

    onDataSet: function(code){
        var me = this;

        var store = Ext.getStore('ProjectDetailStore');

//        store.removeAll();
//        store.getProxy().setExtraParams({
//            t: 'GetGqInfoCommon',
//            results: code + '$jsonp'
//        });
//
//        store.load(function(records, operation, success) {
//            Ext.Viewport.setMasked(false);

            if(store.getAllCount()){

                me.setData(store.getData().all);
            }
            else{
                me.setHtml('<p class="no-searches" style="margin-top:50%;text-align:center;">没有主要字段</p>');
            }
//        });
    }
});