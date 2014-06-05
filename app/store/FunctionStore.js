/**
 * Created by USER on 14-4-28.
 */

Ext.define('GeMobile.store.FunctionStore', {
    extend: 'Ext.data.Store',

    config: {
        model: 'GeMobile.model.FunctionModel',

//        proxy: {
//            type: 'sk'
//        },

        data:[
            {id: '01', name: 'rain', title: '雨情信息', url: 'resources/images/function/rain.png'},
            {id: '02', name: 'water', title: '水情信息', url: 'resources/images/function/water.png'},
            {id: '03', name: 'project', title: '工情信息', url: 'resources/images/function/project.png'},
            {id: '04', name: 'contacts', title: '通讯录', url: 'resources/images/function/contacts.png'},
            {id: '05', name: 'schedule', title: '防汛值班', url: 'resources/images/function/news.png'},
            {id: '06', name: 'warning', title: '预警信息', url: 'resources/images/function/notice.png'},
            {id: '07', name: 'report', title: '防汛简报', url: 'resources/images/function/info.png'},
            {id: '08', name: 'typhoon', title: '台风信息', url: 'resources/images/function/flow.png'},
    		{id: '09', name: 'cloud', title: '卫星云图', url: 'resources/images/function/tide.png'},
            {id: '10', name: 'radar', title: '气象雷达', url: 'resources/images/function/flow.png'},

            {id: '11', name: 'assignment', title: '指派任务', url: 'resources/images/function/inspect.png'},
            {id: '12', name: 'settings', title: '设置', url: 'resources/images/function/setting.png'}
        ],

        autoLoad: true
    }
});