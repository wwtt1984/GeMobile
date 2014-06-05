/**
 * Created by USER on 14-5-26.
 */

Ext.define('GeMobile.view.warning.Warning', {
    extend: 'Ext.List',
    xtype: 'warning',

    requires: [
        'Ext.plugin.ListPaging',
        'Ext.plugin.PullRefresh'
    ],

    config: {

        title: '预警列表',
        cls: 'news-list',
        store:'WarningStore',

        plugins: [
            {
                xclass: 'Ext.plugin.ListPaging',
                loadMoreText: '加载更多...',
                noMoreRecordsText: '没有更多记录了...',
                autoPaging:true
            },
            {
                xclass: 'Ext.plugin.PullRefresh',
                pullText: '下拉刷新...',

                releaseText: '松开进行刷新...',

                loadingText: '正在刷新...',

                loadedText: '刷新完成.',

                lastUpdatedText: '刷新时间:&nbsp;'
            }],

        //emptyText: '<p class="no-searches">没有符合要求的记录</p>',

        itemTpl: Ext.create('Ext.XTemplate',
            '<div class="list-item">',
//            '    {[this.getImg(values)]}',
            '    <h1>预警级别：{type}</h1>',
            '    <div class="time">{sdate}<div style="float: right;">{stnm}</div></div>',
            '</div>'
        )
    }
});