/**
 * Created by USER on 14-5-8.
 */

Ext.define('GeMobile.controller.ContactControl', {
    extend: 'Ext.app.Controller',

    requires: [
        'Ext.app.Route'
    ],

    config: {

        refs: {
            info: 'main info',
            infofunction: '[itemId=infofunction]',
            contactlist: 'info contactlist',
            contacttree: '[itemId=contacttree]',

            fullnum: '[itemId=fullnum]',
            shortnum: '[itemId=shortnum]',
            officenum: '[itemId=officenum]',
            numcancel: '[itemId=numcancel]'
        },

        control: {
            contacttree: {
                leafItemTap: 'onContactLeafItemTap'
            },
            fullnum: {
                tap: 'onFullNumTap'
            },
            shortnum: {
                tap: 'onShortNumTap'
            },
            officenum: {
                tap: 'onOfficeNumTap'
            },
            numcancel: {
                tap: 'onNumCancelTap'
            }
        }
    },

    //通讯录列表页面初始化
    onContactInitialize: function(){

        var me = this;

        me.contactlist = me.getContactlist();
        if(!me.contactlist){
            me.contactlist= Ext.create('GeMobile.view.contact.ContactList');
        }
        me.getInfo().push(me.contactlist);
    },

    //点击通讯录中“人员”
    onContactLeafItemTap: function(container, list, index, target, record, e){
        var me = this;
        if (!me.popup) {
            me.popup = Ext.create('GeMobile.view.contact.PopUp');
        }

        var csstore = Ext.getStore('ContactStore');
//        csstore.clearFilter();
//        csstore.filter('samaccountname', record.data.sid);

        if (Ext.os.deviceType.toLowerCase() == "phone") {
            me.popup.setWidth(null);
            me.popup.setMinHeight('45%');
            me.popup.setTop(null);
            me.popup.setLeft(0);
        }

        me.popup.onDataSet(csstore.getData().items[0]);
        if (!me.popup.getParent()) {
            Ext.Viewport.add(me.popup);
        }
        me.popup.show();
    },

    onFullNumTap: function(){
        var num = Ext.ComponentQuery.query('#fullnum')[0].getText();

        plugins.Phone.Call(num, function(obj) {
//            alert(obj.number);
        },function(error){
//            alert(error);
        });
    },

    onShortNumTap: function(){
        var num = Ext.ComponentQuery.query('#shortnum')[0].getText();

        plugins.Phone.Call(num, function(obj) {},function(error){});
    },

    onOfficeNumTap: function(){

        var num = Ext.ComponentQuery.query('#officenum')[0].getText();

        plugins.Phone.Call(num, function(obj) {},function(error){});
    },

    onNumCancelTap: function(){
        this.popup.hide();
    }
})
