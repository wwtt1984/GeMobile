/**
 * Created by USER on 14-5-8.
 */

Ext.define('GeMobile.store.ProjectTreeStore', {
    extend: 'Ext.data.TreeStore',
    alias: 'store.ProjectTreeStore',

    requires: [
        'GeMobile.model.TreeModel'
    ],

    config: {
        autoLoad:  true,
        model: 'GeMobile.model.TreeModel',
        storeId: 'ProjectTreeStore',
        defaultRootProperty: 'items',
//        proxy: {
//            type: 'sk',
//            reader: {
//                type: 'json'
//            }
//        },
        root: {
            id:'project',
            expanded:true,
            items:[
                {
                    "text":"海塘",
                    "num":"146",
                    items: [
                        {
                            "text":"左岸",
                            "num":"76",
                            items: [
                                {
                                    "text":"Z3301060163",
                                    leaf: true
                                },
                                {
                                    "text":"Z3301040013",
                                    leaf: true
                                }
                            ]
                        },
                        {
                            "text":"右岸",
                            "num":"67",
                            items: [
                                {
                                    "text":"Z3301060163",
                                    leaf: true
                                },
                                {
                                    "text":"Z3301040013",
                                    leaf: true
                                }
                            ]
                        }
                    ]
                }

            ]
        }
    }
})