/**
 * Created by USER on 14-5-4.
 */

Ext.define('GeMobile.store.WaterStore', {
    extend: 'Ext.data.Store',

    config: {
        model: 'GeMobile.model.WaterModel',

//        pageSize: 10,
//        clearOnPageLoad: false,

        proxy: {
            type: 'sk'
        }
    }
});