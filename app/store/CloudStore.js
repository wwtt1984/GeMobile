/**
 * Created by USER on 14-5-8.
 */

Ext.define('GeMobile.store.CloudStore', {
    extend: 'Ext.data.Store',
    requires: 'Ext.DateExtras',
    config: {
        model: 'GeMobile.model.CloudModel',
        sorters: 'index',
        proxy: {
            type: 'sk'
        }
    }
});