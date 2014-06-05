/**
 * Created by USER on 14-5-29.
 */

Ext.define('GeMobile.view.notice.Procedure', {
    extend: 'Ext.Panel',
    xtype: 'procedure',

    requires: [
        'Ext.XTemplate'
    ],

    config:{
        title: '流程',
        scrollable: {
            direction: 'vertical',
            directionLock: true
        },
        style: 'background:#f7f7f7;',
        tpl:  Ext.create('Ext.XTemplate',
            '<div style="height:2em;width:100%;padding:0 5px 0 5px; font-size:15px;line-height:2em;background:#ddd;filter:alpha(opacity=50);-moz-opacity:0.5;opacity:0.5;">物流跟踪</div>',
            '<div style="width:100%;height:auto;border-bottom:1px #ccc solid;background:url(resources/images/prebg.png);background-position:left;background-repeat:repeat-y;">',
            '<tpl for=".">',
//                '<div style="height:100%;width:98%;margin:0 2% 0 0;">',
//                    '<div style="width:15%;height:100%;float:left;"><img src="resources/images/prepoint.png" style="width:10px;height:10px;margin:10px 15px 0 15px;"/></div>',
//                    '<div style="width:83%;min-height:2.6em;float:left;border-top:1px #ccc solid;font-size:14px;line-height:2em;">',
//                        '<p>{data.scontent}</p>',
//                        '<p>{data.sdate}</p>',
//                    '</div>',
//                    '<br style="clear:both;" />',
//                 '</div>',
                '{[this.setTplContent(values)]}',
            '</tpl>',
            '</div>',
            {
                setTplContent: function(values){

                    var str = '';

                    if(values.data.sid == '01'){

                        str = '<div style="height:100%;width:98%;margin:0 2% 0 0;">'+
                            '<div style="width:15%;height:100%;float:left;"><img src="resources/images/prefirst.png" style="width:13px;height:13px;margin:10px 0 0 14px;"/></div>'+
                            '<div style="width:83%;min-height:2.6em;float:left;font-size:14px;line-height:2em;">'+
                            '<p>' + values.data.scontent + '</p>'+
                            '<p>' + values.data.sdate + '</p>'+
                            '</div>'+
                            '<br style="clear:both;" />' +
                            '</div>' ;
                    }
                    else{
                        str = '<div style="height:100%;width:98%;margin:0 2% 0 0;">'+
                            '<div style="width:15%;height:100%;float:left;"><img src="resources/images/prepoint.png" style="width:11px;height:11px;margin:10px 0 0 15px;"/></div>'+
                            '<div style="width:83%;min-height:2.6em;float:left;font-size:14px;border-top:1px #ccc solid;line-height:2em;">'+
                            '<p>' + values.data.scontent + '</p>'+
                            '<p>' + values.data.sdate + '</p>'+
                            '</div>'+
                            '<br style="clear:both;" />' +
                            '</div>' ;
                    }
                    return str;
                }
            }
        )
    },

    onDataSet: function(record, user, telephone){
        var store = Ext.getStore('ProcedureStore');
        this.setData(store.getData().all);
    }
});