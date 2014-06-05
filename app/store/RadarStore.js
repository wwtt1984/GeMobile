/**
 * Created by USER on 14-5-9.
 */

Ext.define('GeMobile.store.RadarStore', {
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