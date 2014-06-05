/**
 * Created by USER on 14-5-4.
 */

Ext.define('GeMobile.model.RainDetailModel',{
    extend: 'Ext.data.Model',
    config: {
        fields: [
            'stcd',
            'stnm',
            'time',
            'value'
        ]
    }
});