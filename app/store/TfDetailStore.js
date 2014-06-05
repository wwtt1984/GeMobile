/**
 * Created by USER on 14-5-9.
 */

Ext.define('GeMobile.store.TfDetailStore', {
    extend: 'Ext.data.Store',
    requires: 'Ext.DateExtras',
    config: {
        model: 'GeMobile.model.TfDetailModel',

        proxy: {
            type: 'sk'
        }
    }
});