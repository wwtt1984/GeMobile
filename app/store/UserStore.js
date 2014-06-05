/**
 * Created by USER on 14-4-28.
 */

Ext.define('GeMobile.store.UserStore', {
    extend: 'Ext.data.Store',

    config: {
        model: 'GeMobile.model.UserModel',

        proxy: {
            type: 'sk'
        }
    }
});