/**
 * Created by USER on 14-5-30.
 */

Ext.define('GeMobile.controller.SettingsControl', {
    extend: 'Ext.app.Controller',

    requires: [
        'Ext.app.Route'
    ],

    config: {

        refs: {
            info: 'main info',
            infofunction: '[itemId=infofunction]',
            setting: 'info setting',
            settinglist: '[itemId=settinglist]',
            module: 'info module',
            version: 'info version',

            moduleconfirm: '[itemId=moduleconfirm]'
        },

        control: {
            settinglist: {
                itemtap: 'onSettingItemTap'
            },
            moduleconfirm: {
                tap: 'onModuleConfirmTap'
            }
        }
    },

    //设置页面初始化
    onSettingsInitialize: function(){
        var me =  this;
        me.setting = me.getSetting();
        if(!me.setting){
            me.setting= Ext.create('GeMobile.view.settings.Setting');
        }
        me.getInfo().push(me.setting);
    },

    onSettingItemTap: function(list, index, target, record, e, eOpts ){

        var me = this;

        switch(record.data.title){
            case '功能模块':
                me.onModuleInitialize();
                break;
            case '软件版本':
                me.onVersionInitialize();
                break;
        }
    },

    //功能模块设置页面
    onModuleInitialize: function(){
        var me =  this;
        me.module = me.getModule();
        if(!me.module){
            me.module= Ext.create('GeMobile.view.settings.Module');
        }
        me.module.onDataSet();
        me.getInfofunction().hide();
        me.getInfo().push(me.module);
    },

    //软件版本页面
    onVersionInitialize: function(){
        var me =  this;
        me.version = me.getVersion();
        if(!me.version){
            me.version= Ext.create('GeMobile.view.settings.Version');
        }
        me.version.onDataSet();
        me.getInfofunction().hide();
        me.getInfo().push(me.version);
    },

    onModuleConfirmTap: function(){
        Ext.Msg.alert('设置成功！');
    }
})