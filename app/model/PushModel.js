/**
 * Created by USER on 14-4-28.
 */

Ext.define('GeMobile.model.PushModel',{
    extend: 'Ext.data.Model',
    config: {
        fields: [
            'id',
            'text',
            'img',
            'content',
            'num'
        ]
    }
});