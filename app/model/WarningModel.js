/**
 * Created by USER on 14-5-26.
 */

Ext.define('GeMobile.model.WarningModel',{
    extend: 'Ext.data.Model',
    config: {
        idProperty: 'id',
        fields: [
            'id',
            'sdate',
            'stcd',
            'stnm',
            'type'
        ]
    }

});