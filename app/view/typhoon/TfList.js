/**
 * Created by USER on 14-5-9.
 */

Ext.define('GeMobile.view.typhoon.TfList', {
    extend: 'Ext.List',

    xtype: 'tflist',

    requires: [
        'Ext.plugin.PullRefresh'
    ],

    config: {
        title: '台风列表',

        loadingText: '努力加载中...',
        scrollToTopOnRefresh: false,

        plugins: [
            {
                xclass: 'Ext.plugin.PullRefresh',
                pullText: '下拉刷新...',

                releaseText: '松开进行刷新...',

                loadingText: '正在刷新...',

                loadedText: '刷新完成.',

                lastUpdatedText: '刷新时间:&nbsp;'
            }
        ],

        cls: 'tidelist',
        store: 'TfStore',
//        grouped: true,
        itemTpl: [
            '<div class="contact2"><div style="float:left;width:25%;text-align:center;"><strong>{tfname}</strong></div>', '<div style="float:left;width:40%;text-align:center;">{tfbh}</div>', '<div style="float:left;width:35%;text-align:center;">{tfactive}</div></div>'
        ].join('')
    }

//    loadstore: function(year) {
//        var me = this;
//        this.store_list = Ext.getStore('TfStore');
//        this.store_list.getProxy().setExtraParams({
//            t: 'GetTflist',
//            tfyear: year
//        });
//        this.store_list.load(
//            function(records, operation, success) {
//
//                if(records.length==0)
//                {
//                    alert("该年暂无台风数据");
//                }
//            }
//        );
//
//
//    }

});


