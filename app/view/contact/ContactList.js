/**
 * Created by USER on 14-5-8.
 */

Ext.define('GeMobile.view.contact.ContactList', {
    extend: 'Ext.Container',
    xtype: 'contactlist',

    requires: [
        'GeMobile.view.TouchTreeGrid'
    ],

    config: {
        title: '通讯录',
        layout: 'fit',           //touchtreegrid需要

        items: [
            {
                xtype: 'touchtreegrid',
                columns: [
                    {
                        dataIndex: 'text',
                        width: '80%',
                        style: ' text-align: left; font-size: 18px;'
//                                categStyle: 'height:35px !important;'
                    }
                ],
                leafSelect: false,
                itemHeight: 40,
                arrowPctWidth: '8',
                disableSelection: false,
                includeFooter: false,
                categDepthColors: true,
                categDepthColorsArr: [
                    '#eee',
                    '#f7f7f7',
                    '#fff'
                ],
                includeFooterLevels: false,
//                        helpHtml: './resources/html/TaskExample.html',
                store: 'ContactTreeStore',
                includeHeader: false,
                defaultCollapseLevel: 1,
                singleExpand: true,
                cls: [
                    'x-touchtreegrid-list',
                    'x-touchtreegrid-list-normal'
                ],
                itemId: 'contacttree'
            }
        ]
    }
});