/**
 * Created by USER on 14-4-28.
 */

Ext.define('GeMobile.store.RainStore', {
    extend: 'Ext.data.Store',

    config: {
        model: 'GeMobile.model.RainModel',

//        pageSize: 10,
//        clearOnPageLoad: false,

        proxy: {
            type: 'sk'
        }
    }
});