/**
 * Created by USER on 14-5-8.
 */

Ext.define('GeMobile.controller.ProjectControl', {
    extend: 'Ext.app.Controller',

    requires: [
        'Ext.app.Route'
    ],

    config: {

        refs: {
            info: 'main info',
            infofunction: '[itemId=infofunction]',
            projectlist: 'info projectlist',
            projectdetail: 'info projectdetail',
            projecttree: '[itemId=projecttree]'
        },

        control: {
            projecttree: {
                leafItemTap: 'onProjectItemTap'
            }
        }
    },

    //工情列表页面初始化
    onProjectInitialize: function(){
        var me =  this;
        me.projectlist = me.getProjectlist();
        if(!me.projectlist){
            me.projectlist= Ext.create('GeMobile.view.project.ProjectList');
        }
        me.getInfo().push(me.projectlist);
    },

    //添加工情列表点击事件，查看单个工程，详细工情信息
    onProjectItemTap: function(container, list, index, target, record, e){
        var me =  this;
        me.projectdetail = this.getProjectdetail();
        if(!me.projectdetail){
            me.projectdetail= Ext.create('GeMobile.view.project.ProjectDetail');
        }
        me.projectdetail.onDataSet();
        me.getInfofunction().hide();
        me.getInfo().push(me.projectdetail);
    }
})