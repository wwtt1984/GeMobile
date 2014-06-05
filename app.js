/*
    This file is generated and updated by Sencha Cmd. You can edit this file as
    needed for your application, but these edits will have to be merged by
    Sencha Cmd when it performs code generation tasks such as generating new
    models, controllers or views and when running "sencha app upgrade".

    Ideally changes to this file would be limited and most work would be done
    in other places (such as Controllers). If Sencha Cmd cannot merge your
    changes and its generated code, it will produce a "merge conflict" that you
    will need to resolve manually.
*/

Ext.Loader.setPath({
    'Ext': 'touch/src',
    'GeMobile': 'app',
    'Ext.data.proxy.SkProxy': 'app/lib/SkProxy.js',
    'Ext.data.proxy.SkJsonp': 'app/lib/SkJsonp.js'
});

Ext.ClassManager.setAlias('Ext.data.proxy.SkProxy', 'proxy.sk');

Ext.application({
    name: 'GeMobile',

    mainthis: '',

    mapCenter: [30.24, 122.21, 6],
    zhujimapCenter: [30.24, 122.21],

    user: {sid:'', name: '', password: '', mobile: '15999999999', tel:'', sms:'', mail:'11111',
        sexy:'', ITEM_Id: '', DeptId: '', rtxsession: '',version:'1.0.0.85', taskcount: 0, rtxcount: 0},

    requires: [
        'Ext.MessageBox',
        'Ext.data.proxy.SkProxy',
        'Ext.data.proxy.SkJsonp'
    ],

    views: [
        'Main',
        'Login',
        'Function',
        'Title',
        'Info',
        'TouchTreeGrid',
        'Load',

        'rain.Rain',
        'rain.RainBar',
        'water.Water',
        'water.WaterLine',

        'schedule.Schedule',
//        'schedule.Calendar',

        'project.ProjectList',
        'project.ProjectDetail',

        'contact.ContactList',
        'contact.PopUp',

        'cloud.Cloud',
        'radar.Radar',

        'assign.Assignment',
        'assign.AssignList',

        'typhoon.TfMain',
        'typhoon.TfMap',
        'typhoon.popDetail.TfPopDetailList',
        'typhoon.popDetail.TfPopDetailList',
        'typhoon.PopUp',
        'typhoon.TfList',

        'schedule.Schedule',
        'schedule.ScheduleList',
        'schedule.ScheduleCarousel',
        'schedule.ScheduleDetail',

        'warning.Warning',
        'report.ReportList',
        'report.ReportDetail',

        'notice.Procedure',

        'settings.Setting',
        'settings.Module',
        'settings.Version'
    ],

    models: [
        'UserModel',
        'PushModel',
        'FunctionModel',
        'WeatherModel',

        'RainModel',
        'RainDetailModel',

        'WaterModel',

        'TreeModel',
        'ProjectDetailModel',

        'ContactModel',

        'CloudModel',

        'TfForeModel',
        'TfModel',
        'TfDetailModel',

        'ScheduleModel',

        'WarningModel',

        'ReportModel',

        'ProcedureModel',

        'SettingModel',
        'ModuleModel'
    ],

    stores:[
        'UserStore',
        'PushStore',
        'FunctionStore',
        'WeatherStore',

        'RainStore',
        'RainDetailStore',
        'RainDayStore',

        'WaterStore',
        'WaterDetailStore',
        'WaterDayStore',

        'ProjectTreeStore',
        'ProjectDetailStore',

        'ContactTreeStore',
        'ContactStore',

        'CloudStore',
        'RadarStore',

        'SegmentTreeStore',

        'TfForeStore',
        'TfStore',
        'TfDetailStore',

        'ScheduleStore',
        'PreScheduleStore',
        'NextScheduleStore',
        'WarningStore',

        'ReportStore',

        'ProcedureStore',

        'SettingStore',
        'ModuleStore'
    ],

    controllers: [
        'MainControl',
        'RainControl',
        'WaterControl',
        'ScheduleControl',
        'ProjectControl',
        'ContactControl',
        'CloudControl',
        'RadarControl',
        'AssignControl',
        'TfControl',
        'WarningControl',
        'ReportControl',
        'SettingsControl',
        'NoticeControl'
    ],

    icon: {
        '57': 'resources/icons/Icon.png',
        '72': 'resources/icons/Icon~ipad.png',
        '114': 'resources/icons/Icon@2x.png',
        '144': 'resources/icons/Icon~ipad@2x.png'
    },

    isIconPrecomposed: true,

    startupImage: {
        '320x460': 'resources/startup/320x460.jpg',
        '640x920': 'resources/startup/640x920.png',
        '768x1004': 'resources/startup/768x1004.png',
        '748x1024': 'resources/startup/748x1024.png',
        '1536x2008': 'resources/startup/1536x2008.png',
        '1496x2048': 'resources/startup/1496x2048.png'
    },

    launch: function() {
        // Destroy the #appLoadingIndicator element
        Ext.fly('appLoadingIndicator').destroy();

        // Initialize the main view
        Ext.Viewport.add(Ext.create('GeMobile.view.Main'));
    },

    onUpdated: function() {
        Ext.Msg.confirm(
            "Application Update",
            "This application has just successfully been updated to the latest version. Reload now?",
            function(buttonId) {
                if (buttonId === 'yes') {
                    window.location.reload();
                }
            }
        );
    }
});
