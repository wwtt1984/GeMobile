/**
 * Created by USER on 14-4-28.
 */

Ext.define('GeMobile.model.RainModel',{
    extend: 'Ext.data.Model',
    config: {
        idProperty: 'stcd',
        fields: [
//            'stcdt',
//            'stnm',
//            'r1',
//            'r3',
//            'r24',
//
//            'r48'
            'stcd',
            'stnm',
            'rain1h',
            'rain3h',
            'raintoday'
        ]
    }

});