/**
 * Created by USER on 14-5-9.
 */

Ext.define('GeMobile.controller.AssignControl', {
    extend: 'Ext.app.Controller',

    requires: [
        'Ext.app.Route'
    ],

    config: {

        refs: {
            info: 'main info',
            infofunction: '[itemId=infofunction]',

            assignment: 'info assignment',

            assignlist: 'info assignlist',

            assignconfirm: '[itemId=assignconfirm]',
            assigncancel: '[itemId=assigncancel]',

            selectconfirm: '[itemId=selectconfirm]',

            location: '[itemId=location]',
            assignms: '[itemId=assign_ms]',

            selectionpanel: '[itemId=selectionpanel]',
            treeselect: '[itemId=treeselect]'
        },

        control: {
            assignconfirm: {
                tap: 'onAssignConfirmTap'
            },
            assigncancel: {
                tap: 'onAssignCancelTap'
            },
            selectconfirm: {
                tap: 'onSelectConfirmTap'
            },
            treeselect: {
                selectionchange: 'onSelectionChange'
            }
        }
    },

    onAssignInitialize: function(){

        var me = this;

        me.assignment = me.getAssignment();

        if(!me.assignment){
            me.assignment = Ext.create('GeMobile.view.assign.Assignment');
        }

        me.assignment.onLocationSet();
        me.getInfo().push(me.assignment);

//        var contactstore = Ext.getStore('ContactTreeStore');
//        if(!contactstore.getAllCount()){
//            contactstore.getProxy().setExtraParams({
//                t: 'GetZpPerson',
//                results: 'jsonp'
//            });
//
//            contactstore.load();
//        }

//        var segmentstore = Ext.getStore('SegmentTreeStore');
//        if(!segmentstore.getAllCount()){
//            segmentstore.getProxy().setExtraParams({
//                t: 'GetXcjhTD',
//                results: 'jsonp'
//            });
//
//            segmentstore.load();
//        }
    },

    onAssignListPush: function(index){
        var me = this;

        me.assignlist = me.getAssignlist();

        if(!me.assignlist){
            me.assignlist = Ext.create('GeMobile.view.assign.AssignList');
        }

        me.index = '';

        var store;

        if(index == 0){
            store = Ext.getStore('SegmentTreeStore');
            me.index = 'segment';
        }
        else{
            store = Ext.getStore('ContactTreeStore');
            me.index = 'contact';
        }

        me.getTreeselect().setStore(store);

        me.getInfofunction().hide();
        me.getSelectconfirm().show();
        me.getInfo().push(me.assignlist);

        me.sid = '';
        me.text = '';

    },

    onSelectionChange: function(container, list, record, e){

        var me = this;
        var arr = list.getSelection().filter(function isLeafSelected(element, index, array) {
            return (element.data.leaf);
        });

        var text = '';
        var sid = '';

        if(arr.length){
            for(var i=0; i<arr.length; i++){
                text += arr[i].data.text + '，';
                sid += arr[i].data.sid + '@';
            }
            me.getSelectionpanel().setData({select: text});
            me.getSelectionpanel().show();

            if(me.index == 'segment'){

                me.tdtext = text.substr(0, text.length - 1);
                me.tdid = sid.substr(0, sid.length - 1);
            }
            else{
                me.rytext = text.substr(0, text.length - 1);
                me.ryid = sid.substr(0, sid.length - 1);
            }
        }
        else{
            me.getSelectionpanel().hide();
        }
    },

    onSelectConfirmTap: function(){

        var me = this;

        if(me.index == 'segment'){
            if(!me.tdtext){

                me.tdtext = '请选择地点&nbsp;&nbsp;&nbsp;>';
            }

            me.getLocation().setData({td: me.tdtext, ry:  me.getLocation().getData().ry, tdid: me.tdid, ryid:  me.getLocation().getData().ryid});
        }
        else{
            if(!me.rytext){

                me.rytext = '请选择人员&nbsp;&nbsp;&nbsp;>';
            }
            me.getLocation().setData({td: me.getLocation().getData().td, ry:  me.rytext, tdid: me.getLocation().getData().tdid, ryid:  me.ryid});
        }

        me.getInfofunction().show();
        me.getSelectconfirm().hide();
        me.getInfo().pop();
    },

    onAssignConfirmTap: function(){
        var me = this;

        if(me.getAssignms().getValue() && me.getLocation().getData().tdid && me.getLocation().getData().ryid){
            alert('任务指派成功！');
//            plugins.Toast.ShowToast("任务指派成功！",3000);
        }
        else{
            alert('请填写所有信息！');
//            plugins.Toast.ShowToast("请填写所有信息！",3000);
        }

    },

    onAssignCancelTap: function(){
        var me = this;
        me.getApplication().getController('MainControl').onInfoFunctionBackTap();
    }
})