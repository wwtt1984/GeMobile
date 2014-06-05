/**
 * Created by USER on 14-5-16.
 */

Ext.define('GeMobile.store.NextScheduleStore', {
    extend: 'Ext.data.Store',

    requires: [
        'GeMobile.model.ScheduleModel'
    ],

    config: {

        model: 'GeMobile.model.ScheduleModel',
//        data: [
//            {sid: '00', sdate: '2014-06-10', person: '人员1', content: '注意雨情信息'},
//            {sid: '01', sdate: '2014-06-11', person: '人员1', content: '注意雨情信息'},
//            {sid: '02', sdate: '2014-06-12', person: '人员1', content: '注意雨情信息'},
//            {sid: '03', sdate: '2014-06-13', person: '人员1', content: '注意雨情信息'},
//            {sid: '04', sdate: '2014-06-14', person: '人员1', content: '注意雨情信息'}
//        ]
        autoLoad: true,
        proxy: {
            type: 'sk',
            extraParams: {
                t: 'GetTflist',
                tfyear: new Date().getFullYear() + 1
            }
        },
        sorters: {
            property: 'tfbh',
            direction: 'DESC'
        }
    }
})