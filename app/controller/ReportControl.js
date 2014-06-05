/**
 * Created by USER on 14-5-26.
 */

Ext.define('GeMobile.controller.ReportControl', {
    extend: 'Ext.app.Controller',

    requires: [
        'Ext.app.Route'
    ],

    config: {

        refs: {
            info: 'main info',
            infofunction: '[itemId=infofunction]',

            reportlist: 'info reportlist',
            reportdetail: 'info reportdetail'
        },

        control: {
            reportlist: {
                itemtap: 'onReportListTap'
            }
        }
    },

    onReportInitialize: function(){

        var me = this;

        me.reportlist = me.getReportlist();

        if(!me.reportlist){
            me.reportlist = Ext.create('GeMobile.view.report.ReportList');
        }

//        me.warning.onLocationSet();
        me.getInfo().push(me.reportlist);
    },

    onReportListTap: function(list, index, target, record, e, eOpts){
        var me = this;
        me.reportdetail = me.getReportdetail();
        if(!me.reportdetail){
            me.reportdetail= Ext.create('GeMobile.view.report.ReportDetail');
        }

        me.reportdetail.onDataSet(record);
        me.getInfofunction().hide();
        me.getInfo().push(this.reportdetail);
    }

});