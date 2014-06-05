/**
 * Created by USER on 14-5-8.
 */

Ext.define('GeMobile.model.ContactModel',{
    extend: 'Ext.data.Model',
    config: {
        fields: [
            'id',
            'samaccountname',
            'userprincipalname',
            'displayname',
            'mobile',
            'telephonenumber',

            'pager',
            'mail',
            'description',
            'memberof'
        ]
    }

});