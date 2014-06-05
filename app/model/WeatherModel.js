/**
 * Created by USER on 14-4-28.
 */

Ext.define('GeMobile.model.WeatherModel',{
    extend: 'Ext.data.Model',
    config: {
        fields: [
            'sdate',
            'stxt',
            'simg',
            'stemperature'
        ]
    }

});