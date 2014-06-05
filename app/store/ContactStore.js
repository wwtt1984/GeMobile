/**
 * Created by USER on 14-5-8.
 */

Ext.define('GeMobile.store.ContactStore', {
    extend: 'Ext.data.Store',

    config: {
        model: 'GeMobile.model.ContactModel',

        data: [
            {"samaccountname":"gcw","userprincipalname":"gcw@qgj.cn","displayname":"郭陈为(gcw)","mobile":"13758140802","telephonenumber":"86526016","pager":"640802","mail":"null","description":"女","memberof":"CN=ldrsc,OU=劳动人事处,OU=钱塘江管理局,DC=qgj,DC=cn"}
        ],

        proxy: {
            type: 'sk'
        }
    }
});