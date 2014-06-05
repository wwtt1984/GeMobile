/**
 * Created by USER on 14-5-4.
 */

Ext.define('GeMobile.store.WaterDetailStore', {
    extend: 'Ext.data.Store',
    requires: 'Ext.DateExtras',
    config: {
        model: 'GeMobile.model.RainDetailModel',

//        data: [
//            {stnm: '水位测试', stcd: '001', time: '8时', value: '12.4'},
//            {stnm: '水位测试', stcd: '001', time: '9时', value: '12.5'},
//            {stnm: '水位测试', stcd: '001', time: '10时', value: '12.5'},
//            {stnm: '水位测试', stcd: '001', time: '11时', value: '12.0'},
//            {stnm: '水位测试', stcd: '001', time: '12时', value: '12.5'},
//
//            {stnm: '水位测试', stcd: '001', time: '13时', value: '12.5'},
//            {stnm: '水位测试', stcd: '001', time: '14时', value: '12.5'},
//            {stnm: '水位测试', stcd: '001', time: '15时', value: '12.5'},
//            {stnm: '水位测试', stcd: '001', time: '16时', value: '12.5'},
//            {stnm: '水位测试', stcd: '001', time: '17时', value: '12.5'},
//
//            {stnm: '水位测试', stcd: '001', time: '18时', value: '12.0'},
//            {stnm: '水位测试', stcd: '001', time: '19时', value: '12.5'}
//        ]
        proxy: {
            type: 'sk'
        }
    }
});