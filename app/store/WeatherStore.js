/**
 * Created by USER on 14-4-28.
 */

Ext.define('GeMobile.store.WeatherStore', {
    extend: 'Ext.data.Store',

    config: {
        model: 'GeMobile.model.WeatherModel',
        autoLoad: true,

        data: [
            {sdate: Ext.Date.format(new Date(), 'Y-m-d'), stxt: '晴转多云', sim: '', stemperature: '16-28℃'}
        ]
//        proxy: {
//            type: 'sk'
//        }
    }
});