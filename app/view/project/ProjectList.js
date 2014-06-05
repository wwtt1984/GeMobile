/**
 * Created by USER on 14-5-8.
 */

Ext.define('GeMobile.view.project.ProjectList', {
    extend: 'Ext.Container',
    xtype: 'projectlist',

    requires: [
        'GeMobile.view.TouchTreeGrid'
    ],

    config: {
        title: '工情列表',
        layout: 'fit',           //touchtreegrid需要

        items: [
            {
                xtype: 'touchtreegrid',
                columns: [
                    {
                        dataIndex: 'text',
                        width: '75%',
                        style: ' text-align: left; font-size: 18px;'
//                                categStyle: 'height:35px !important;'
                    },
                    {
                        dataIndex: 'num',
                        width: '15%',
                        style: ' text-align: center; font-size: 18px;'
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
                store: 'ProjectTreeStore',
                includeHeader: false,
                defaultCollapseLevel: 1,
                singleExpand: true,
                cls: [
                    'x-touchtreegrid-list',
                    'x-touchtreegrid-list-normal'
                ],
                itemId: 'projecttree'
            }
        ]
    }
});