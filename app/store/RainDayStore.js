/**
 * Created by USER on 14-5-8.
 */

Ext.define('GeMobile.store.RainDayStore', {
    extend: 'Ext.data.Store',
    requires: 'Ext.DateExtras',
    config: {
        model: 'GeMobile.model.RainDetailModel',

        proxy: {
            type: 'sk'
        }
    }
});