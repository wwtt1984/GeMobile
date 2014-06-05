/**
 * Created by USER on 14-5-14.
 */

Ext.define('GeMobile.store.ScheduleStore', {
    extend: 'Ext.data.Store',

    requires: [
        'GeMobile.model.ScheduleModel'
    ],

    config: {

        model: 'GeMobile.model.ScheduleModel',
//        data: [
//            {sid: '00', sdate: '2014-03-10', person: '人员1', content: '注意雨情信息'},
//            {sid: '01', sdate: '2014-03-11', person: '人员1', content: '注意雨情信息'},
//            {sid: '02', sdate: '2014-03-12', person: '人员1', content: '注意雨情信息'},
//            {sid: '03', sdate: '2014-03-13', person: '人员1', content: '注意雨情信息'},
//            {sid: '04', sdate: '2014-03-14', person: '人员1', content: '注意雨情信息'},
//
//            {sid: '05', sdate: '2014-04-10', person: '人员1', content: '注意雨情信息'},
//            {sid: '06', sdate: '2014-04-11', person: '人员1', content: '注意雨情信息'},
//            {sid: '07', sdate: '2014-04-12', person: '人员1', content: '注意雨情信息'},
//            {sid: '08', sdate: '2014-04-13', person: '人员1', content: '注意雨情信息'},
//            {sid: '09', sdate: '2014-04-14', person: '人员1', content: '注意雨情信息'},
//
//            {sid: '10', sdate: '2014-05-11', person: '人员1', content: '注意雨情信息'},
//            {sid: '11', sdate: '2014-05-12', person: '人员1', content: '注意雨情信息'},
//            {sid: '12', sdate: '2014-05-13', person: '人员1', content: '注意雨情信息'},
//            {sid: '13', sdate: '2014-05-10', person: '人员1', content: '注意雨情信息'},
//            {sid: '14', sdate: '2014-05-14', person: '人员1', content: '注意雨情信息'},
//
//            {sid: '15', sdate: '2014-06-10', person: '人员1', content: '注意雨情信息'},
//            {sid: '16', sdate: '2014-06-11', person: '人员1', content: '注意雨情信息'},
//            {sid: '17', sdate: '2014-06-12', person: '人员1', content: '注意雨情信息'},
//            {sid: '18', sdate: '2014-06-13', person: '人员1', content: '注意雨情信息'},
//            {sid: '19', sdate: '2014-06-14', person: '人员1', content: '注意雨情信息'},
//
//            {sid: '20', sdate: '2014-07-10', person: '人员1', content: '注意雨情信息'},
//            {sid: '21', sdate: '2014-07-11', person: '人员1', content: '注意雨情信息'},
//            {sid: '22', sdate: '2014-07-12', person: '人员1', content: '注意雨情信息'},
//            {sid: '23', sdate: '2014-07-13', person: '人员1', content: '注意雨情信息'},
//            {sid: '24', sdate: '2014-07-14', person: '人员1', content: '注意雨情信息'}
//        ]
        autoLoad: true,
        proxy: {
            type: 'sk',
            extraParams: {
                t: 'GetTflist',
                tfyear: new Date().getFullYear()
            }
        },
        sorters: {
            property: 'tfbh',
            direction: 'DESC'
        }
    }
})