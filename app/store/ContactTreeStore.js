/**
 * Created by USER on 14-5-8.
 */

Ext.define('GeMobile.store.ContactTreeStore', {
    extend: 'Ext.data.TreeStore',
    alias: 'store.ContactTreeStore',

    requires: [
        'GeMobile.model.TreeModel'
    ],

    config: {
        autoLoad:  true,
        model: 'GeMobile.model.TreeModel',
        storeId: 'ContactTreeStore',
        defaultRootProperty: 'items',
//        proxy: {
//            type: 'sk',
//            reader: {
//                type: 'json'
//            }
//        },
        root: {
            id:'contact',
            expanded:true,
            items:[
                {
                    text: '局机关',
                    items: [
                        {
                            text: '局领导',
                            items: [
                                {
                                    text: '陈毛良',
                                    leaf: true,
                                    sid:'cml'},
                                {
                                    text: '陈书锋',
                                    leaf: true,
                                    sid:'csf'
                                },
                                {
                                    text: '徐有成',
                                    leaf: true,
                                    sid:'xyc'
                                },
                                {
                                    text: '杨世兵',
                                    leaf: true,
                                    sid:'ysb'
                                },
                                {
                                    text: '周宝森',
                                    leaf: true,
                                    sid:'zbs'
                                },
                                {
                                    text: '张民强',
                                    leaf: true,
                                    sid:'zmq'
                                },
                                {
                                    text: '朱奚冰',
                                    leaf: true,
                                    sid:'zxb'
                                },
                                {
                                    text: '章香雅',
                                    leaf: true,
                                    sid:'zxy'
                                }
                            ]
                        },
                        {
                            text: '副处调、副总工',
                            items: [
                                {
                                    text: '包增军',
                                    leaf: true,
                                    sid:'bzj'
                                },
                                {
                                    text: '贺海洪',
                                    leaf: true,
                                    sid:'hhh'
                                },
                                {
                                    text: '梁民阳',
                                    leaf: true,
                                    sid:'lmy'
                                },
                                {
                                    text: '王正红',
                                    leaf: true,
                                    sid:'wangzh'
                                },
                                {
                                    text: '周素芳',
                                    leaf: true,
                                    sid:'zsf'
                                }
                            ]
                        }
                    ]
                }
            ]
        }
    }
})