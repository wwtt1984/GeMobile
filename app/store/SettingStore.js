Ext.define('GeMobile.store.SettingStore', {
    extend: 'Ext.data.Store',

    config: {
        model: 'GeMobile.model.SettingModel',
        data:[
            {id: '01', name: 'module', title: '功能模块'},
//            {id: '02', name: '系统设置'},
            {id: '02', name: 'version', title: '软件版本'}
        ],

        autoLoad: true
    }
});