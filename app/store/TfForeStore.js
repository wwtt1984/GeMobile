/**
 * Created by USER on 14-5-9.
 */

Ext.define('GeMobile.store.TfForeStore', {
    extend: 'Ext.data.Store',
    requires: 'Ext.DateExtras',
    config: {
        model: 'GeMobile.model.TfForeModel',
        proxy: {
            type: 'sk'
        }
    }
});