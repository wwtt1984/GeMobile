/**
 * Created by USER on 14-5-8.
 */

Ext.define('GeMobile.store.WaterDayStore', {
    extend: 'Ext.data.Store',
    requires: 'Ext.DateExtras',
    config: {
        model: 'GeMobile.model.RainDetailModel',

        proxy: {
            type: 'sk'
        }
    }
});