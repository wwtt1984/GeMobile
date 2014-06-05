/**
 * Created by USER on 14-6-4.
 */

/**
 * Created by xiaona on 14-3-18.
 */

Ext.define('GeMobile.view.settings.Module', {
    extend: 'Ext.form.Panel',
    xtype: 'module',

    requires: [

    ],

    config: {
        title: '功能设置',

        scrollable: {
            direction: 'vertical',
            directionLock: true
        },

        items:[
            {
                xtype: 'fieldset',
                title: '请选择需要的模块',
                defaults: {
                    labelWidth: '40%'
                },

                itemId: 'modulefield'
            },
            {
                xtype: 'panel',
                defaults: {
                    xtype : 'button',
                    style: 'min-height: 2.2em;',
                    cls   : 'demobtn',
                    flex  : 1,
                    margin: 10
                },
                layout: {
                    type: 'hbox',
                    align: 'middle'
                },
                items: [
                    {
                        text: '确定',
                        itemId:  'moduleconfirm'

                    }]
            }

        ]
    },

//    initialize: function(){
//        this.setData({});
//    },

    onDataSet: function(){

        var me = this;

        var store  = Ext.getStore('ModuleStore');
        var item = [];

        for(var i = 0; i < store.getAllCount(); i++){
            item.push({xtype: 'checkboxfield',name: store.getAt(i).data.name, label: store.getAt(i).data.text, value:store.getAt(i).data.value, checked: store.getAt(i).data.value});
        }
        Ext.ComponentQuery.query('#modulefield')[0].setItems(item);
    },

    onModuleRequest: function(){

        Ext.Viewport.setMasked({
            xtype: 'loadmask',
            message: '努力加载中...'
        });

        var me = this;
        var field = me.getItems().items[0];
        var results = '';

        for(var i=0; i<field.getItems().getCount()-1; i++){

            if(field.getItems().items[i].getChecked()){

                results += field.getItems().items[i].getLabel() + ',' +  field.getItems().items[i].getName() + '@';
            }
        }

        results = WebInspect.app.user.sid + '$' + results + '设置,setting$jsonp';

        Ext.data.proxy.SkJsonp.validate('UpdateFunctionZt',results,{
            success: function(response) {

                if(response.success == "true"){

                    Ext.Viewport.setMasked(false);
//                    Ext.Msg.alert('设置成功');
                    plugins.Toast.ShowToast("设置成功！",1000);
                    me.initvalue = me.getValues();
                    me.onFuncitonLoad();
                }
                else{
                    Ext.Viewport.setMasked(false);
                    me.setValues(me.initvalue);
//                    Ext.Msg.alert('设置失败，请重试！');
                    plugins.Toast.ShowToast("设置失败，请重试！",1000);
                }
            },
            failure: function() {
                Ext.Viewport.setMasked(false);
                me.setValues(me.initvalue);
                plugins.Toast.ShowToast("设置失败！",1000);
//                Ext.Msg.alert('设置失败！');
            }
        });
    },

    onFuncitonLoad: function(){
        var me = this;
        var store = Ext.getStore('FunctionStore');
        store.removeAll();
        store.getProxy().setExtraParams({
            t: 'GetFunctionZt',
            results: WebInspect.app.user.sid + '$jsonp'
        });

        store.load();
    }
});