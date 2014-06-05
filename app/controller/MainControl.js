/**
 * Created by USER on 14-4-28.
 */

Ext.define('GeMobile.controller.MainControl',{
    extend: 'Ext.app.Controller',
    config:{
        refs: {
            main: 'main',
            functionmain: 'main functionmain',
            info: 'main info',
            infofunction: '[itemId=infofunction]',
            infosearch: '[itemId=infosearch]'
        },
        control: {
            main: {
                initialize:'onMainInit'
            },
            'info':{
                back: 'onInfoBackTap'
            },
            '#confirm': {
                tap: 'onLoginTap'
            },

            '#functionlist': {
                itemtap: 'onFunctionListTap'
            },
            'infofunction': {
                tap: 'onInfoFunctionBackTap'
            },
            infosearch: {
                tap: 'onInfoSearchTap'
            }

        }
    },

    onMainInit: function(){
        var me = this;
        GeMobile.app.mainthis = this;
//        this.bpush = false;///默认是直接点击软件进去的
//        this.bpindex = 0;///默认请求
//        this.beindex = 2;///默认请求总数

//        window.setTimeo/ut(function(){me.checkJpush(me);},100);
//        document.addEventListener('deviceready',function(){me.onJpushReady(me);}, false);

        me.onBtnConfirm();
//        android返回键事件监听
//        document.addEventListener("backbutton", me.onBackKeyDown, false);
    },

    onBtnConfirm: function(){ ////////////////////重写Confirm////////////////////

        if(Ext.MessageBox) {
            var MB = Ext.MessageBox;
            Ext.apply(MB, {
                YES: { text: '确认', itemId: 'yes', ui: 'action' },
                NO:  { text: '取消', itemId: 'no' },
                OK:  { text: '确定', itemId: 'ok' }
            });
            Ext.apply(MB, {
                YESNO: [Ext.MessageBox.NO, Ext.MessageBox.YES]
            });
        }
    },

    //登录
    onLoginTap: function(){
        var me = this;
        GeMobile.app.user.sid = Ext.getCmp('name').getValue();
        GeMobile.app.user.password = Ext.getCmp('password').getValue();
//        plugins.jPush.setAlias(WebInspect.app.user.sid,function(success){});//////推送标识，以用户名区分
        me.onUserCheck(1,''); ////////测试的时候有
    },

    //用户验证 //////////////////1正常登陆,0为推送//////////////////////////////////////
    onUserCheck: function(num,data){

        var me = this;
        Ext.Viewport.setMasked({xtype: 'loadmask',message: '登录验证中...'});
//        if(GeMobile.app.user.sid && GeMobile.app.user.password){
//            //用户名、密码输入完整
//            var store = Ext.getStore('UserStore');
//
//            var results = GeMobile.app.user.sid + '$' + GeMobile.app.user.password
//                + '$' + GeMobile.app.user.name + "$" + GeMobile.app.user.version;
//
//            store.getProxy().setExtraParams({
//                t: 'CheckUser',
//                results: results
//            });
//
//            store.load(function(records, operation, success) {
//
//                if(records.length == 0){
//                    Ext.Viewport.setMasked(false);
//                    Ext.Msg.alert('用户名或密码错误！');
////                    plugins.Toast.ShowToast("验证失败！请重新输入！",3000);
//                }
//                else{
//                    Ext.Viewport.setMasked({xtype: 'loadmask',message: '验证成功，页面加载中...'});
//
//                    GeMobile.app.user.name = records[0].data.name;
//                    GeMobile.app.user.mobile = records[0].data.mobile;
//                    GeMobile.app.user.taskcount = records[0].data.taskcount;
//                    GeMobile.app.user.rtxcount = records[0].data.rtxcount;

//                    me.onFuncitonLoad(); //加载模块页面
                    me.onWeatherStoreLoad();  //加载“天气预报”信息
//                    me.onPushStoreSet(); //加载“待办事项”和“离线消息”数量

//                    if(num == 1)
//                    {
                        Ext.Viewport.setMasked(false);
                        me.getMain().setActiveItem(me.getFunctionmain());
//                        me.onUserWriteJson(); //将验证成功的用户信息，存在本地
//                        me.onCheckVesion(me);  /////////////////判断是否有新版本/////////////////////
//                    }
//                    else
//                    {
//                        me.onMessagePush(data);/////////////////////推送的消息
//                    }
//                }
//
//            });
//        }
//        else{
//            //用户名、密码输入不完整
//            Ext.Viewport.setMasked(false);
//            plugins.Toast.ShowToast("用户名和密码不能为空！",3000);
//        }
    },

    //加载“天气预报”信息，当num=0时，表示是“推送信息”， 当num=1时，表示是：应用程序正常启动
    onWeatherStoreLoad: function(){
        var me = this;
        var store = Ext.getStore('WeatherStore');
//        store.removeAll();
//        store.getProxy().setExtraParams({
//            t: 'GetWeather',
//            results: 'jsonp'
//        });
//        store.load(function(records, operation, success) {

            Ext.getCmp('maintitle').onDataSet(store.getAt(0), GeMobile.app.user.name, GeMobile.app.user.mobile);
//        });
    },

    onPushStoreSet: function(){
        var pushstore = Ext.getStore('PushStore');
        pushstore.getAt(0).data.num = GeMobile.app.user.taskcount;
        pushstore.getAt(1).data.num = GeMobile.app.user.rtxcount;
        Ext.getCmp('noticelist').refresh();
    },

    //“主功能”页面的事件，判断进入选择的模块
    onFunctionListTap: function(list, index, target, record, e, eOpts ){

        var me = this;

        me.info = me.getInfo();
        if(!me.info){
            me.info = Ext.create('GeMobile.view.Info');
        }

        me.getMain().add(me.info);

        var titlestr = ['rain', 'water', 'project', 'contacts', 'schedule', 'warning', 'report', 'typhoon', 'cloud', 'radar', 'assignment', 'settings'];

        switch(record.data.name){
            case titlestr[0]:
                me.getApplication().getController('RainControl').onRainInitialize();
                break;
            case titlestr[1]:
                me.getApplication().getController('WaterControl').onWaterInitialize();
                break;
            case titlestr[2]:
                me.getApplication().getController('ProjectControl').onProjectInitialize();
                break;
            case titlestr[3]:
                me.getApplication().getController('ContactControl').onContactInitialize();
                break;
            case titlestr[4]:
                me.getApplication().getController('ScheduleControl').onScheduleInitialize();
                break;

            case titlestr[5]:
                me.getApplication().getController('WarningControl').onWarningInitialize();
                break;
            case titlestr[6]:
                me.getApplication().getController('ReportControl').onReportInitialize();
                break;
            case titlestr[7]:
                me.getApplication().getController('TfControl').onTyphoonInitialize();
                break;
            case titlestr[8]:
                me.getApplication().getController('CloudControl').onCloudInitialize();
                break;
            case titlestr[9]:
                me.getApplication().getController('RadarControl').onRadarInitialize();
                break;

            case titlestr[10]:
                me.getApplication().getController('AssignControl').onAssignInitialize();
                break;

            case titlestr[11]:
                me.getApplication().getController('SettingsControl').onSettingsInitialize();
                break;
        }
        me.getMain().setActiveItem(me.getInfo());
    },

    //info的“返回键”事件，当只有一张页面时，显示“主页面”按钮
    onInfoBackTap: function(view, eOpts){

        var me = this;
        if(view.getActiveItem() == view.getAt(1)){

            me.getInfofunction().show();
            switch(view.getActiveItem().xtype){
                case 'rain':
                    me.getInfosearch().hide();
                    break;
                case 'water':
                    me.getInfosearch().hide();
                    break;
                case 'tfmap':
                    me.getInfosearch().show();
                    break;
            }
        }
    },

    //监听info页面的“主页面”按钮，点击后，返回“主功能”页面
    onInfoFunctionBackTap: function(){
        var me = this;
        if(me.getInfo().getActiveItem().xtype == 'schedule'){
            me.getApplication().getController('ScheduleControl').getSchedulecarousel().removeAll();
        }
        me.getMain().setActiveItem(me.getFunctionmain());
        me.getInfo().destroy();
    },

    onInfoSearchTap: function(){
        var me = this;
        var type = me.getInfo().getActiveItem().xtype;
        switch(type){
            case 'waterline':
                me.getApplication().getController('WaterControl').onWaterDayPick();
                break;
            case 'rainbar':
                me.getApplication().getController('RainControl').onRainDayPick();
                break;
            case 'tfmain':
                me.getApplication().getController('TfControl').onTfListShow();
                break;
        }
    }
})