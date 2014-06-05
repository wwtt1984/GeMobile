/**
 * Created by USER on 14-4-28.
 */
Ext.define('GeMobile.model.UserModel',{
    extend: 'Ext.data.Model',
    config: {
        fields: [
            'id',
            'uid',
            'name',
            'password',
            'mobile',
            'tel',

            'sms',
            'mail',
            'sexy',
            'ITEM_Id',
            'DeptId',

            'rtxsession',
            'taskcount',
            'rtxcount'
        ]
    }

});