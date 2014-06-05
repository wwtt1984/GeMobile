/**
 * Created by USER on 14-5-8.
 */

Ext.define('GeMobile.store.ProjectDetailStore', {
    extend: 'Ext.data.Store',

    config: {
        model: 'GeMobile.model.ProjectDetailModel',

//        proxy: {
//            type: 'sk'
//        }
        data: [
            {"type":"丁坝工程编码","value":"Z3301060163"},
            {"type":"工程名称","value":"珊瑚沙顺坝"},
            {"type":"丁坝位置","value":"之江防洪堤"},
            {"type":"丁坝长度","value":"250"},
            {"type":"所属海塘桩号","value":"26+504"},
            {"type":"始建时间","value":""},
            {"type":"加固时间","value":"1996.02"},
            {"type":"平均低潮位","value":"3.94"},
            {"type":"坝型","value":"堆石"},
            {"type":"坝顶宽","value":"6"},
            {"type":"坝面结构","value":"砼护面"},
            {"type":"坝顶高程","value":"6.06～5.46"},
            {"type":"坝根脚底防冲结构","value":"装石钢筋笼底高程2.56～1.56"},
            {"type":"坝身脚底防冲结构","value":"装石钢筋笼底高程1.56"},
            {"type":"坝头脚底防冲结构","value":"装石钢筋笼底高程1.56"},
            {"type":"典型结构图","value":"Z3301060163"}
        ]
    }
});