/**
 * Created by USER on 14-5-14.
 */

Ext.define('GeMobile.model.ScheduleModel',{
    extend: 'Ext.data.Model',
    config: {
//        idProperty: 'sid',
//        fields: [
//            'sid',
//            'sdate',
//            'person',
//            'content'
//        ]
        idProperty: 'tfbh',
        fields: [
            { name: 'tfbh', type: 'float' },
            { name: 'tfname', type: 'string' },
            { name: 'tfyear', type: 'float' },
            { name: 'tfactive', type: 'string' }
        ]
    }

});