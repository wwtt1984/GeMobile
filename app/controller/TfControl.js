/**
 * Created by USER on 14-5-9.
 */

Ext.define('GeMobile.controller.TfControl', {
    extend: 'Ext.app.Controller',

    requires: [
        'Ext.app.Route'
    ],

    config: {

        refs: {
            info: 'main info',
            infofunction: '[itemId=infofunction]',
            tfmap: '#tfmap',
            tfmain: 'info tfmain',
            tflist: 'info tflist'
        },

        control: {
            tflist: {
                itemtap: 'onTfListItemTap'
            }
        }
    },

    onTyphoonInitialize: function(){

        var me = this;

        me.tfmain = me.getTfmain();

        if(!me.tfmain){
            me.tfmain = Ext.create('GeMobile.view.typhoon.TfMain');
        }

        me.mytflist(new Date().getFullYear());

        me.getApplication().getController('MainControl').getInfosearch().show();
//        me.tfmain.setTitle(me.tfmap.str);

    },

    //取得台风数据(年份列表)
    mytflist: function(year) {
        var me = this;
        var store = Ext.getStore('TfStore');
        store.getProxy().setExtraParams({
            t: 'GetTflist2'
//        tfyear: year
        });
        var tfbh = null, tfname = null, tfactive = null;
        store.load(function(records, operation, success) {
            if (store.getCount() > 0) {
                tfbh = store.getAt(0).get('tfbh');
                tfname = store.getAt(0).get('tfname');
                tfactive = store.getAt(0).get('tfactive');

                me.tfmain.setTitle(tfname + "（" + tfbh + "）");
                me.getInfo().push(me.tfmain);

                me.getTfmap().mydate(tfname,tfbh,tfactive);
//            this.getTfForecast();
            }
            else
            {
                alert("该年到当前暂无台风!");
            }
        }, this);

    },

    onTfListShow: function() {
        var me = this;

        me.tflist = me.getTflist();

        if(!me.tflist){
            me.tflist = Ext.create('GeMobile.view.typhoon.TfList');
        }

        me.getInfofunction().hide();
        me.getApplication().getController('MainControl').getInfosearch().hide();
        me.getInfo().push(me.tflist);
    },

    onTfListItemTap: function(list, index, target, record, e, eOpts){
        var me = this;

//        var TfMain = Ext.getCmp('TfMain');
//        this.getChangelatlng().hide();
//        TfMain.setActiveItem(Ext.getCmp('TfList'));
        me.getInfofunction().show();
        me.getApplication().getController('MainControl').getInfosearch().show();
        me.getTfmap().reloadtfsj(record);

        me.getInfo().pop();
        me.tfmain.setTitle(record.data.tfname + "（" + record.data.tfbh + "）");
    }
})