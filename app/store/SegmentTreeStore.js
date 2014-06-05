/**
 * Created by USER on 14-5-9.
 */

Ext.define('GeMobile.store.SegmentTreeStore', {
    extend: 'Ext.data.TreeStore',
    alias: 'store.SegmentTreeStore',

    requires: [
        'GeMobile.model.TreeModel'
    ],

    config: {
        autoLoad: false,
        model: 'GeMobile.model.TreeModel',
        defaultRootProperty: 'items',
//        proxy: {
//            type: 'sk',
////            extraParams: {
////                t: 'GetXcjhTD',
////                results: 'jsonp'
////            },
//            reader: {
//                type: 'json'
//            }
//        },
        root: {
            id:'td',
            expanded:true,
            items:[
                {
                    text: '北岸',
                    items:[
                        {
                            text: '长安沙周边',
                            leaf: true ,
                            sid:'t001'
                        },
                        {
                            text: '上泗南北大塘',
                            leaf: true ,
                            sid:'t002'
                        },
                        {
                            text: '城市防洪堤',
                            leaf: true ,
                            sid:'t003'
                        },
                        {
                            text: '三堡船闸口门段',
                            leaf: true ,
                            sid:'t004'
                        },
                        {
                            text: '交通围堤',
                            leaf: true ,
                            sid:'t005'
                        },
                        {
                            text: '六堡围堤',
                            leaf: true ,
                            sid:'t006'
                        },
                        {
                            text: '北沙支堤临江段',
                            leaf: true ,
                            sid:'t007'
                        },
                        {
                            text: '四格围堤',
                            leaf: true ,
                            sid:'t008'
                        },
                        {
                            text: '乔司三号大堤延伸段',
                            leaf: true ,
                            sid:'t009'
                        },
                        {
                            text: '下沙标准塘',
                            leaf: true ,
                            sid:'t010'
                        },
                        {
                            text: '二线北沙支堤',
                            leaf: true ,
                            sid:'t011'
                        },
                        {
                            text: '乔司三号大堤非临江段',
                            leaf: true ,
                            sid:'t012'
                        },
                        {
                            text: '之江防洪堤',
                            leaf: true ,
                            sid:'t025'
                        }
                    ]
                },
                {
                    text: '南岸',
                    items:[
                        {
                            text: '西江塘', leaf: true
                        },
                        {
                            text: '南沙支堤临江段',
                            leaf: true
                        },
                        {
                            text: '浦阳江左岸进化溪口以下海塘富春江右岸鼠尾山闸以下~浦阳江口',
                            leaf: true
                        },
                        {
                            text: '江边围堤',
                            leaf: true
                        },
                        {
                            text: '西兴五号坝海塘',
                            leaf: true
                        },
                        {
                            text: '九乌大堤',
                            leaf: true
                        },
                        {
                            text: '滨江区海塘',
                            leaf: true
                        },
                        {
                            text: '萧山区海塘',
                            leaf: true
                        },
                        {
                            text: '顺坝联围',
                            leaf: true
                        },
                        {
                            text: '九上顺坝',
                            leaf: true
                        },
                        {
                            text: '萧围西线',
                            leaf: true
                        },
                        {
                            text: '南沙支堤',
                            leaf: true
                        }
                    ]
                }
            ]
        }
    }
})