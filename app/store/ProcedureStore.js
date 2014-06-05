/**
 * Created by USER on 14-5-29.
 */

Ext.define('GeMobile.store.ProcedureStore', {
    extend: 'Ext.data.Store',

    config: {
        model: 'GeMobile.model.ProcedureModel',

//        proxy: {
//            type: 'sk'
//        },

        data:[
            {sid: '01', scontent: '快件已签收 签收人拍照签收', sdate: '2014-05-29 11:10'},
            {sid: '02', scontent: '杭州市区二分部 的 彭先生 13107746660 正在派件', sdate: '2014-05-29 09:24'},
            {sid: '03', scontent: '快件离开 杭州市区 已发往 杭州市区二分部', sdate: '2014-05-29 04:55'},
            {sid: '04', scontent: '快件离开 杭州操作部 已发往 杭州市区', sdate: '2014-05-29 00:18'},
            {sid: '05', scontent: '快件到达 杭州操作部 上一站是 杭州中转部', sdate: '2014-05-29 00:17'},

            {sid: '06', scontent: '快件离开 杭州中转部 已发往 杭州操作部', sdate: '2014-05-29 00:07'},
            {sid: '07', scontent: '快件到达 杭州中转部 上一站是 未通达', sdate: '2014-05-29 00:06'},
            {sid: '08', scontent: '快件离开 义乌 已发往 杭州中转部', sdate: '2014-05-28 20:19'},
            {sid: '09', scontent: '义乌 的 朱军 已收件', sdate: '2014-05-28 17:37'}
        ],

        autoLoad: true
    }
})