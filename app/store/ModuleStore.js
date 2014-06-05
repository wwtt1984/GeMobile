/**
 * Created by USER on 14-6-4.
 */

Ext.define('GeMobile.store.ModuleStore', {
    extend: 'Ext.data.Store',

    config: {
        model: 'GeMobile.model.ModuleModel',

//        proxy: {
//            type: 'sk'
//        },

        data:[
            {id: '01', text: '雨情信息', name: 'rain', value: true},
            {id: '02', text: '水情信息', name: 'water', value: true},
            {id: '03', text: '工情信息', name: 'project', value: true},
            {id: '04', text: '通讯录', name: 'contacts', value: true},
            {id: '05', text: '防汛值班', name: 'schedule', value: true},

            {id: '06', text: '预警信息', name: 'warning', value: true},
            {id: '07', text: '防汛简报', name: 'report', value: true},
            {id: '08', text: '台风信息', name: 'typhoon', value: true},
            {id: '09', text: '卫星云图', name: 'cloud', value: true},
            {id: '10', text: '气象雷达', name: 'radar', value: true},

            {id: '11', text: '指派任务', name: 'assignment', value: true},
            {id: '12', text: '设置', name: 'settings', value: true}
        ],

        autoLoad: true
    }
});