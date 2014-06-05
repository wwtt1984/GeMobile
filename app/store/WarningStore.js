/**
 * Created by USER on 14-5-26.
 */

Ext.define('GeMobile.store.WarningStore', {
    extend: 'Ext.data.Store',
    requires: 'Ext.DateExtras',
    config: {
        model: 'GeMobile.model.WarningModel',

        data:[
            {id: '01', sdate: '2014-03-28', stcd: '0001', stnm: '测站1', type: '一级'},
            {id: '02', sdate: '2014-03-29', stcd: '0001', stnm: '测站1', type: '二级'},
            {id: '03', sdate: '2014-04-05', stcd: '0001', stnm: '测站1', type: '三'},
            {id: '04', sdate: '2014-04-13', stcd: '0001', stnm: '测站1', type: '一级'},
            {id: '05', sdate: '2014-04-19', stcd: '0001', stnm: '测站1', type: '二级'},

            {id: '06', sdate: '2014-04-23', stcd: '0001', stnm: '测站1', type: '一级'},
            {id: '07', sdate: '2014-04-28', stcd: '0001', stnm: '测站1', type: '一级'}
        ]
    }
});