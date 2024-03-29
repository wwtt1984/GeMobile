/**
 * Created by USER on 14-5-26.
 */

Ext.define('GeMobile.store.ReportStore', {
    extend: 'Ext.data.Store',
    requires: 'Ext.DateExtras',
    config: {
        model: 'GeMobile.model.ReportModel',

        data:[
            {id: '01', sdate: '2014-03-28', scontent: '6月份以来，受高空低槽及中低切变线影响，我市一直是阴雨天气，1-7日全市平均降雨75.3毫米，最大江华县114.8毫米。其中昨天8时至今天8时，全市平均降雨30.1毫米，最大祁阳70.1毫米，江华46.3毫米，道县36.7毫米，冷水滩33.4毫米。今日8时，老埠头水位100.55米，流量2760秒立米。道县水位42.28米，流量608秒立米。涔天河水位253.11米，入库276秒立米，出库366秒立米。双牌水库水位167.54米，开闸3孔，入库1000秒立米，出库1400秒立米。潇湘电站水位96.49米，开闸5孔，入库2500秒立米，出库2530秒立米。湘江电站水位117.02米，开闸3孔，入库1053秒立米，出库1145秒立米。\r\n 据市气象台天气预报，7日我市北部中雨,南部大到暴雨,北风3级,气温19-24℃;晚上到明天,北部小到中雨,南部大到暴雨;后天,北部多云有阵雨,南部有小到中雨。由于目前降水相对集中，极易造成山洪灾害，各地迫切需要加强防范。'},
            {id: '02', sdate: '2014-03-29', scontent: '6月份以来，受高空低槽及中低切变线影响，我市一直是阴雨天气，1-7日全市平均降雨75.3毫米，最大江华县114.8毫米。其中昨天8时至今天8时，全市平均降雨30.1毫米，最大祁阳70.1毫米，江华46.3毫米，道县36.7毫米，冷水滩33.4毫米。今日8时，老埠头水位100.55米，流量2760秒立米。道县水位42.28米，流量608秒立米。涔天河水位253.11米，入库276秒立米，出库366秒立米。双牌水库水位167.54米，开闸3孔，入库1000秒立米，出库1400秒立米。潇湘电站水位96.49米，开闸5孔，入库2500秒立米，出库2530秒立米。湘江电站水位117.02米，开闸3孔，入库1053秒立米，出库1145秒立米。\r\n 据市气象台天气预报，7日我市北部中雨,南部大到暴雨,北风3级,气温19-24℃;晚上到明天,北部小到中雨,南部大到暴雨;后天,北部多云有阵雨,南部有小到中雨。由于目前降水相对集中，极易造成山洪灾害，各地迫切需要加强防范。'},
            {id: '03', sdate: '2014-04-05', scontent: '6月份以来，受高空低槽及中低切变线影响，我市一直是阴雨天气，1-7日全市平均降雨75.3毫米，最大江华县114.8毫米。其中昨天8时至今天8时，全市平均降雨30.1毫米，最大祁阳70.1毫米，江华46.3毫米，道县36.7毫米，冷水滩33.4毫米。今日8时，老埠头水位100.55米，流量2760秒立米。道县水位42.28米，流量608秒立米。涔天河水位253.11米，入库276秒立米，出库366秒立米。双牌水库水位167.54米，开闸3孔，入库1000秒立米，出库1400秒立米。潇湘电站水位96.49米，开闸5孔，入库2500秒立米，出库2530秒立米。湘江电站水位117.02米，开闸3孔，入库1053秒立米，出库1145秒立米。\r\n 据市气象台天气预报，7日我市北部中雨,南部大到暴雨,北风3级,气温19-24℃;晚上到明天,北部小到中雨,南部大到暴雨;后天,北部多云有阵雨,南部有小到中雨。由于目前降水相对集中，极易造成山洪灾害，各地迫切需要加强防范。'},
            {id: '04', sdate: '2014-04-13', scontent: '6月份以来，受高空低槽及中低切变线影响，我市一直是阴雨天气，1-7日全市平均降雨75.3毫米，最大江华县114.8毫米。其中昨天8时至今天8时，全市平均降雨30.1毫米，最大祁阳70.1毫米，江华46.3毫米，道县36.7毫米，冷水滩33.4毫米。今日8时，老埠头水位100.55米，流量2760秒立米。道县水位42.28米，流量608秒立米。涔天河水位253.11米，入库276秒立米，出库366秒立米。双牌水库水位167.54米，开闸3孔，入库1000秒立米，出库1400秒立米。潇湘电站水位96.49米，开闸5孔，入库2500秒立米，出库2530秒立米。湘江电站水位117.02米，开闸3孔，入库1053秒立米，出库1145秒立米。\r\n 据市气象台天气预报，7日我市北部中雨,南部大到暴雨,北风3级,气温19-24℃;晚上到明天,北部小到中雨,南部大到暴雨;后天,北部多云有阵雨,南部有小到中雨。由于目前降水相对集中，极易造成山洪灾害，各地迫切需要加强防范。'},
            {id: '05', sdate: '2014-04-19', scontent: '6月份以来，受高空低槽及中低切变线影响，我市一直是阴雨天气，1-7日全市平均降雨75.3毫米，最大江华县114.8毫米。其中昨天8时至今天8时，全市平均降雨30.1毫米，最大祁阳70.1毫米，江华46.3毫米，道县36.7毫米，冷水滩33.4毫米。今日8时，老埠头水位100.55米，流量2760秒立米。道县水位42.28米，流量608秒立米。涔天河水位253.11米，入库276秒立米，出库366秒立米。双牌水库水位167.54米，开闸3孔，入库1000秒立米，出库1400秒立米。潇湘电站水位96.49米，开闸5孔，入库2500秒立米，出库2530秒立米。湘江电站水位117.02米，开闸3孔，入库1053秒立米，出库1145秒立米。\r\n 据市气象台天气预报，7日我市北部中雨,南部大到暴雨,北风3级,气温19-24℃;晚上到明天,北部小到中雨,南部大到暴雨;后天,北部多云有阵雨,南部有小到中雨。由于目前降水相对集中，极易造成山洪灾害，各地迫切需要加强防范。'},

            {id: '06', sdate: '2014-04-23', scontent: '6月份以来，受高空低槽及中低切变线影响，我市一直是阴雨天气，1-7日全市平均降雨75.3毫米，最大江华县114.8毫米。其中昨天8时至今天8时，全市平均降雨30.1毫米，最大祁阳70.1毫米，江华46.3毫米，道县36.7毫米，冷水滩33.4毫米。今日8时，老埠头水位100.55米，流量2760秒立米。道县水位42.28米，流量608秒立米。涔天河水位253.11米，入库276秒立米，出库366秒立米。双牌水库水位167.54米，开闸3孔，入库1000秒立米，出库1400秒立米。潇湘电站水位96.49米，开闸5孔，入库2500秒立米，出库2530秒立米。湘江电站水位117.02米，开闸3孔，入库1053秒立米，出库1145秒立米。\r\n 据市气象台天气预报，7日我市北部中雨,南部大到暴雨,北风3级,气温19-24℃;晚上到明天,北部小到中雨,南部大到暴雨;后天,北部多云有阵雨,南部有小到中雨。由于目前降水相对集中，极易造成山洪灾害，各地迫切需要加强防范。'},
            {id: '07', sdate: '2014-04-28', scontent: '6月份以来，受高空低槽及中低切变线影响，我市一直是阴雨天气，1-7日全市平均降雨75.3毫米，最大江华县114.8毫米。其中昨天8时至今天8时，全市平均降雨30.1毫米，最大祁阳70.1毫米，江华46.3毫米，道县36.7毫米，冷水滩33.4毫米。今日8时，老埠头水位100.55米，流量2760秒立米。道县水位42.28米，流量608秒立米。涔天河水位253.11米，入库276秒立米，出库366秒立米。双牌水库水位167.54米，开闸3孔，入库1000秒立米，出库1400秒立米。潇湘电站水位96.49米，开闸5孔，入库2500秒立米，出库2530秒立米。湘江电站水位117.02米，开闸3孔，入库1053秒立米，出库1145秒立米。\r\n 据市气象台天气预报，7日我市北部中雨,南部大到暴雨,北风3级,气温19-24℃;晚上到明天,北部小到中雨,南部大到暴雨;后天,北部多云有阵雨,南部有小到中雨。由于目前降水相对集中，极易造成山洪灾害，各地迫切需要加强防范。'}
        ]
    }
});