/**
 * Created by USER on 14-5-26.
 */

Ext.define('GeMobile.view.report.ReportDetail',{

    extend: 'Ext.Panel',
    xtype: 'reportdetail',

    requires: [
        'Ext.XTemplate'
    ],

    config: {
        title: '详细信息',
        scrollable: {
            direction: 'vertical',
            directionLock: true
        },

        style: 'background:#f7f7f7; padding: 10px;',

        tpl: Ext.create('Ext.XTemplate',
            '<div style="min-height:2.2em;width:100%;font-size:18px;font-weight:bold; line-height:1.6em;text-justify:newspaper;margin-bottm:0.3em;">{sdate}防汛工作简报</div>',
            '<div style="min-height:20em;width:100%;line-height:1.6em;text-align:justify;text-justify:distribute-all-lines;text-align-last:justify;-moz-text-align-last:justify;-webkit-text-align-last:justify;">{[this.getContent(values)]}</div>',
            {
                getContent: function(values){

                    var content = [];
                    content = values.scontent.split('\r\n');
                    var string = '';

                    if(content.length > 0){
                        for(var i = 0; i < content.length; i++){
                            if(content[i] != "" ){
                                string += '<p style="text-indent:2em;font-size:16px;-webkit-margin-after: 0px;margin-top:0.5em;">' + content[i] + '</p>';
                            }
                        }
                    }
                    Ext.Viewport.setMasked(false);
                    return string;
                }
            }
        )
    },

    onDataSet: function(record){
        this.setData({sdate: record.data.sdate, scontent: record.data.scontent});
    }
});