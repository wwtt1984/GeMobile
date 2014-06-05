/**
 * Created by USER on 14-5-9.
 */

Ext.define('GeMobile.view.assign.Assignment', {
    extend: 'Ext.Panel',
    xtype: 'assignment',

    requires: [
        'Ext.XTemplate'
    ],

    config: {

        title: '指派任务',

        scrollable: {
            direction: 'vertical',
            directionLock: true
        },

        style: 'background:#f7f7f7; padding: 10px 10px 0 10px;',

        items: [
            {
                xtype: 'fieldset',
                style: 'border-radius: .4em;background-color: #fff; margin: 0 0 15px 0;',
                items: [
                    {

                        label: '任务描述',
                        labelAlign: 'top',
                        xtype: 'textareafield',
                        itemId:'assign_ms',
                        style: 'border-radius: .4em;'
                    }
                ]
            },
            {
                xtype: 'panel',
                cls: 'local-form',
                itemId: 'location',

                tpl: Ext.create('Ext.XTemplate',
                    '<div class="local-form-div" style="margin: 0 0 15px 0">',
                    '<div class="label">',
                    '<span>指定地点</span>',
                    '</div>',
                    '<div class="choose" id="{[this.getLinkId(values,0)]}">',
//                            '<span>{[this.getContent(values.td)]}</sapn>',
                    '<span>{td}</sapn>',
                    '</div>',
                    '</div>',
                    '<div class="local-form-div">',
                    '<div class="label">',
                    '<span>指定人员</span>',
                    '</div>',
                    '<div class="choose" id="{[this.getLinkId(values,1)]}">',
//                            '<span>{[this.getContent(values.ry)]}</sapn>',
                    '<span>{ry}</sapn>',
                    '</div>',
                    '</div>',
                    {

                        getLinkId: function(values,index){
                            var result = Ext.id();
                            Ext.Function.defer(this.addListener, 1, this, [result,values,index]);
                            return result;
                        },
                        addListener: function(id,values,index) {
                            var me = this;

                            Ext.get(id).addListener('tap', function(e){

                                e.stopEvent();
                                Ext.ComponentQuery.query('#assign_ms')[0].blur();/////////////////把焦点失掉//////////////////////////

                                GeMobile.app.getController('AssignControl').onAssignListPush(index);
                            })//////增加点击的事件
                        }
                    }
                )
            },
            {
                xtype: 'panel',
                height: '4em',
                style: 'margin: 15px 0 15px 0',
                layout: 'hbox',
                items: [
                    {
                        xtype: 'button',
                        itemId: 'assignconfirm',
                        text: '确认',
                        cls: 'demobtn',
                        flex: 1,
                        style: 'height: 2.2em;margin: 15px 10px 0 0;'
                    },
                    {
                        xtype: 'button',
                        itemId: 'assigncancel',
                        text: '取消',
                        cls: 'demobtn',
                        flex: 1,
                        style: 'height: 2.2em;margin: 15px 0 0 10px;'
                    }
                ]

            }
        ]
    },

    onLocationSet: function(){
        Ext.ComponentQuery.query('#location')[0].setData({td: '请选择地点&nbsp;&nbsp;&nbsp;>', ry: '请选择人员&nbsp;&nbsp;&nbsp;>', tdid: '', ryid: ''});
    }
})