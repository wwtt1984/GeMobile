/**
 * Created by USER on 14-5-4.
 */

Ext.define('GeMobile.model.WaterModel',{
    extend: 'Ext.data.Model',
    config: {
        idProperty: 'stcd',
        fields: [
//            'sttp',
//            'stnm',
//            'sttpname',
//            'ymdhm',
//            'jjz',
//
//            'zu',
//            'jjsw',
//            'bzz',
//            'rvnm',
//            'subnm',
//
//            'stcdt',
//            'xian',
//            'x',
//            'y'
            'stcd',
            'stnm',
            'current',
            'currentTime',
            'max',
            'maxTime',
            'warning'
        ]
    }

});