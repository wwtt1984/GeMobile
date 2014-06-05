Ext.define('Ext.data.proxy.SkProxy', {
    extend: 'Ext.data.proxy.JsonP',
    alias: 'proxy.sk',
		
    config: {
//        url: 'http://localhost/WebSerAn/Data.ashx',
//		url: 'http://bpm.qgj.cn/test/Data.ashx',
        url: 'http://61.153.36.134/MobileWebService/Data.ashx',
        callbackKey: 'callback'
    },
	
    buildRequest: function(operation) {
    	
        var request = this.callParent(arguments);
        return request;
    }
});