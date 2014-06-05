/**
 * Created by USER on 14-6-4.
 */

Ext.define('GeMobile.controller.NoticeControl', {
    extend: 'Ext.app.Controller',

    requires: [
        'Ext.app.Route'
    ],

    config: {

        refs: {
            main: 'main',
            info: 'main info',
            infofunction: '[itemId=infofunction]',
            noticelist: '#noticelist',
            procedure: 'info procedure'
        },

        control: {
            noticelist: {
                itemtap: 'onNoticeListTap'
            }
        }
    },

    onNoticeListTap: function(list, index, target, record, e, eOpts ){

        var me = this;

        me.info = me.getInfo();
        if(!me.info){
            me.info = Ext.create('GeMobile.view.Info');
        }

        me.getMain().add(me.info);

        switch(record.data.text){
            case '待办事项':
                me.onProcedureInitialize();
                break;

        }

        me.getMain().setActiveItem(me.getInfo());
    },

    //流程页面
    onProcedureInitialize: function(){

        var me =  this;
        me.procedure = me.getProcedure();
        if(!me.procedure){
            me.procedure= Ext.create('GeMobile.view.notice.Procedure');
        }
        me.procedure.onDataSet();
        me.getInfo().push(me.procedure);
    }
})