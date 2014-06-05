/**
 * Created by USER on 14-5-8.
 */

Ext.define('GeMobile.model.CloudModel', {
    extend: 'Ext.data.Model',
    config: {
        fields: [
            { name: 'img', type: 'string' },
            { name: 'index', type: 'int' }
        ]
    }
});