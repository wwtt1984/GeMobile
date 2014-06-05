/**
 * Created by USER on 14-5-9.
 */

var ibLabel = [];
var num = 0;
Ext.define('GeMobile.view.typhoon.TfMap', {
//    id: 'TfMap',
    extend: 'Ext.Map',
    xtype: 'tfmap',
    id: 'tfmap',

    config: {
//        itemId: 'tfmap',
        height: '100%',

        tpl: Ext.create('Ext.XTemplate',
            '<div style="position:absolute;width:71px;top:45px;right:5px;padding:0px 0px 0px 0px;">',
            '<div style="height:100%;"><img src="resources/images/typhoon/ybxx.png"/></div>',
            '</div>'
        )
    },

    ssss: function()
    {
        var me = this;

        me.map = me.getMap();
        me.map.setCenter(new google.maps.LatLng(GeMobile.app.mapCenter[0], GeMobile.app.mapCenter[1]));
        me.map.setZoom(GeMobile.app.mapCenter[2]);

        google.maps.event.addListener(me.map, 'click', function(event) {
            me.changelatlng();
        });
//        me.mytflist(new Date().getFullYear());
        me.setData([]);
    },


//取得台风数据(年份列表)
    mytflist: function(year) {
        var me = this;
        me.store_list = Ext.getStore('TfStore');
        me.store_list.getProxy().setExtraParams({
            t: 'GetTflist2'
//        tfyear: year
        });
        var tfbh = null, tfname = null, tfactive = null;
        me.store_list.load(function(records, operation, success) {
            if (me.store_list.getCount() > 0) {
                tfbh = me.store_list.getAt(0).get('tfbh');
                tfname = me.store_list.getAt(0).get('tfname');
                tfactive = me.store_list.getAt(0).get('tfactive');
//                me.setTitle(tfname + "（" + tfbh + "）");

                me.mydate(tfname,tfbh,tfactive);
//            this.getTfForecast();
            }
            else
            {
                alert("该年到当前暂无台风!");
            }
        }, this);

    },

//    getTfForecast: function(){
//    	var forestore = Ext.getStore('TfForeStore');
//        forestore.getProxy().setExtraParams({
//            t: 'GetTfyblist'
//        });
//        forestoret.load();
//    },

//取得台风编号,绘制路径
    mydate: function(tfname,tfbh,tfactive) {
        var me = this;
        if(tfbh!=null){
//            me.setTitle(tfname + "（" + tfbh + "）");
            Ext.ComponentQuery.query('#tfmain')[0].setTitle(tfname + "（" + tfbh + "）");
            me.store = Ext.getStore('TfDetailStore');
            me.store.getProxy().setExtraParams({
                t: 'GetTfsj',
                tfbh: tfbh
            });
            me.store.load(function(records, operation, success) {

                me.addpolyline(me.store);
                if(tfactive == '活动台风')
                {
                    var forestore = Ext.getStore('TfForeStore');
                    forestore.getProxy().setExtraParams({
                        t: 'GetTfyblist'
                    });
                    if(forestore.getCount() == 0){

                        forestore.load(function(records, operation, success) {
                            Ext.ComponentQuery.query('#tfmap')[0].getForecastPath(tfbh);
                        });
                    }
                    else{
                        Ext.ComponentQuery.query('#tfmap')[0].getForecastPath(tfbh);
                    }
                }
            }, this);
        }
    },

    getForecastPath: function(tfbh){

        for(var i = 0; i < 5; i++){
            switch(i){
                case 0:
                    this.makerarr1 = [];
                    this.setForecastPath(tfbh,'中国','#983132',i);
                    break;
                case 1:
                    this.makerarr2 = [];
                    this.setForecastPath(tfbh,'香港','#cfb46f',i);
                    break;
                case 2:
                    this.makerarr3 = [];
                    this.setForecastPath(tfbh,'台湾','#b23cae',i);
                    break;
                case 3:
                    this.makerarr4 = [];
                    this.setForecastPath(tfbh,'日本','#589b4c',i);
                    break;
                case 4:
                    this.makerarr5 = [];
                    this.setForecastPath(tfbh,'美国','#170a74',i);
                    break;
            }
        }
    },

    setForecastPath: function(tfbh,ybt,color,a){

        var time = [];

        var flightPlanCoordinates = [];
        var image;

        var store = Ext.getStore('TfForeStore');
        var tfstore = Ext.getStore('TfDetailStore');

        store.clearFilter();
        store.filter('tfbh',tfbh);
        store.filter('ybt',ybt);
        if(store.getCount()>0){
            flightPlanCoordinates.push(new google.maps.LatLng(tfstore.getAt(tfstore.getCount()-1).get('wd'), tfstore.getAt(tfstore.getCount()-1).get('jd')));

            for (var i = 0; i < store.getCount(); i++) {
                record = store.getAt(i);
                flightPlanCoordinates.push(new google.maps.LatLng(record.get('wd'), record.get('jd')));
                time.push("预报台:" + record.get('ybt') + "<br>时间:" + record.get('sj') + "<br>预报时间:" + record.get('ybsj') + "<br>经度:" + record.get('wd') + "<br>纬度" + record.get('jd'));
                image = 'resources/images/typhoon/001.png';
                marker = new google.maps.Marker({
                    position: flightPlanCoordinates[i+1],
                    map: this.map,
                    visible: true,
                    optimized: false,
                    icon: image,
                    title: "wd:" + record.get('wd') + "jd" + record.get('jd')
                });
                switch(a){
                    case 0:
                        this.makerarr1.push(marker);
                        break;
                    case 1:
                        this.makerarr2.push(marker);
                        break;
                    case 2:
                        this.makerarr3.push(marker);
                        break;
                    case 3:
                        this.makerarr4.push(marker);
                        break;
                    case 4:
                        this.makerarr5.push(marker);
                        break;
                }
//        	makerarr.push(marker);
                this.infowindow(marker, time[i]);
            }

            var symbolOne = {
                path: 'M 0,-2 0,2',
                strokeOpacity: 1,
                scale: 2
            };
            switch(a){
                case 0:
                    this.flightPath1 = new google.maps.Polyline({
                        path: flightPlanCoordinates,
                        strokeColor: color,
                        icons:[{
                            icon: symbolOne,
                            offset: '0',
                            repeat: '20px'
                        }],
                        strokeOpacity: 0,
                        strokeWeight: 2
                    });
                    this.flightPath1.setMap(this.map);
                    break;
                case 1:
                    this.flightPath2 = new google.maps.Polyline({
                        path: flightPlanCoordinates,
                        strokeColor: color,
                        icons:[{
                            icon: symbolOne,
                            offset: '0',
                            repeat: '20px'
                        }],
                        strokeOpacity: 0,
                        strokeWeight: 2
                    });
                    this.flightPath2.setMap(this.map);
                    break;
                case 2:
                    this.flightPath3 = new google.maps.Polyline({
                        path: flightPlanCoordinates,
                        strokeColor: color,
                        icons:[{
                            icon: symbolOne,
                            offset: '0',
                            repeat: '20px'
                        }],
                        strokeOpacity: 0,
                        strokeWeight: 2
                    });
                    this.flightPath3.setMap(this.map);
                    break;
                case 3:
                    this.flightPath4 = new google.maps.Polyline({
                        path: flightPlanCoordinates,
                        strokeColor: color,
                        icons:[{
                            icon: symbolOne,
                            offset: '0',
                            repeat: '20px'
                        }],
                        strokeOpacity: 0,
                        strokeWeight: 2
                    });
                    this.flightPath4.setMap(this.map);
                    break;
                case 4:
                    this.flightPath5 = new google.maps.Polyline({
                        path: flightPlanCoordinates,
                        strokeColor: color,
                        icons:[{
                            icon: symbolOne,
                            offset: '0',
                            repeat: '20px'
                        }],
                        strokeOpacity: 0,
                        strokeWeight: 2
                    });
                    this.flightPath5.setMap(this.map);
                    break;
            }
        }
    },

//生成台风路径以及台风数据点上的提示信息
    addpolyline: function(store) {
        var date;
        var record, map, marker;

        var flightPlanCoordinates = [];
        var time = [];
        this.makerarr = []; //markers集合
        var infoarr = [];
        var image;
        this.infosel = []; //选择info集合
        //store.sort("sj", "asc");
        store.sort([
            {
                property : 'sj',
                direction: 'ASC'
            }]);
        for (var i = 0; i < store.getCount(); i++) {
            record = store.getAt(i);
            flightPlanCoordinates.push(new google.maps.LatLng(record.get('wd'), record.get('jd')));
            time.push("时间:" + record.get('sj') + "<br>经度:" + record.get('wd') + "<br>纬度" + record.get('jd'));
            image = 'resources/images/typhoon/001.png';
            if (i == store.getCount() - 1) {
                date = store.getAt(i).data;
                this.tfwd = store.getAt(i).data.wd;
                this.tfjd = store.getAt(i).data.jd;
                image = new google.maps.MarkerImage(
                    'resources/images/typhoon/sw.gif',
                    new google.maps.Size(32, 32),
                    new google.maps.Point(0, 0),
                    new google.maps.Point(16, 16)
                )
            }
            marker = new google.maps.Marker({
                position: flightPlanCoordinates[i],
                map: this.map,
                visible: true,
                optimized: false,
                icon: image,
                title: "wd:" + record.get('wd') + "jd" + record.get('jd')
            });
            this.makerarr.push(marker);
            this.infowindow(marker, time[i]);
        }
        this.circle(date.wd, date.jd, date.qjfq, date.sjfq);
        var symbolOne = {
            path: 'M -2,0 0,-2 2,0 0,2 z',
            strokeColor: '#F00',
            fillColor: '#F00',
            fillOpacity: 1
        };
        this.flightPath = new google.maps.Polyline({
            path: flightPlanCoordinates,
            strokeColor: "#FF0000",
            strokeOpacity: 1.0,
            strokeWeight: 2
        });
        this.flightPath.setMap(this.map);
    },
//弹出提示信息
    infowindow: function(marker, content) {
        var infowindow = new google.maps.InfoWindow(
            { content: content,
                size: new google.maps.Size(50, 50)
            });
        google.maps.event.addListener(marker, 'click', function() {
            infowindow.open(this.map, marker);
        });
    },
    circle: function(wd, jd, qjfq, sjfq) {
        //生成区域信息
        //十级风圈
        var populationOptions = {
            strokeColor: "#dea439",
            strokeOpacity: 0.5,
            strokeWeight: 1,
            fillColor: "#b6a773",
            fillOpacity: 0.6,
            map: this.map,
            center: new google.maps.LatLng(wd, jd),
            radius: sjfq * 1000
        };
        //七级风圈
        var populationOptions7 = {
            strokeColor: "#dea439",
            strokeOpacity: 0.5,
            strokeWeight: 1,
            fillColor: "#98ad9d",
            fillOpacity: 0.7,
            map: this.map,
            center: new google.maps.LatLng(wd, jd),
            radius: qjfq * 1000
        };
        this.circle7 = new google.maps.Circle(populationOptions7);
        this.circle10 = new google.maps.Circle(populationOptions);
        this.map.panTo(new google.maps.LatLng(wd, jd));
        //十级风圈上的提示功能
        google.maps.event.addListener(this.circle10, 'click', function(event) {
            var labelText = "十级风圈,半径" + sjfq + "公里";
            var myOptions = {
                content: labelText
                , zIndex: 100
                , boxStyle: {
                    background: "#F0E68C"
                    , opacity: 0.75
                    , border: "1px solid black"
                    , textAlign: "center"
                    , fontSize: "12pt"
                    , height: "20px"
                    , width: "170px"
                    , color: '#0000FF'
                }
                , disableAutoPan: true
                , pixelOffset: new google.maps.Size(5, 0)
                , position: event.latLng
                , closeBoxURL: ""
                , isHidden: false
                , pane: "mapPane"
                , enableEventPropagation: true
            };
            ibLabel.push(new InfoBox(myOptions));
            ibLabel[num].open(this.map);
            Ext.defer(function() {
                ibLabel[num].close();
                num++;
            }, 2000);
        });
        //七级风圈上的提示功能
        google.maps.event.addListener(this.circle7, 'click', function(event) {
            var labelText = "七级风圈,半径" + qjfq + "公里";
            var myOptions = {
                content: labelText
                , zIndex: 100
                , boxStyle: {
                    background: "#F0E68C"
                    , opacity: 0.75
                    , border: "1px solid black"
                    , textAlign: "center"
                    , fontSize: "12pt"
                    , height: "20px"
                    , width: "170px"
                    , color: '#0000FF'
                }
                , disableAutoPan: true
                , pixelOffset: new google.maps.Size(5, 0)
                , position: event.latLng
                , closeBoxURL: ""
                , isHidden: false
                , pane: "mapPane"
                , enableEventPropagation: true
            };
            ibLabel.push(new InfoBox(myOptions));
            ibLabel[num].open(this.map);
            Ext.defer(function() {
                ibLabel[num].close();
                num++;
            }, 2000);
        });

    },
//半屏提示功能
    infoLastTfvalue: function(toZhuJiDistance) {
        var data = "";
        if (this.store.getCount() > 0) {
            this.store.sort("sj", "desc");
            data = this.store.getAt(0).data;
            //为台风当前点到诸暨的距离赋值
            if (toZhuJiDistance != null) {
                data.toZhuJiDistance = toZhuJiDistance;
            }
            if (this.view) {
                this.view.hide();
            }
            this.view = Ext.create('GeMobile.view.typhoon.PopUp');
            this.view.setLoan(data);
            if (Ext.os.deviceType.toLowerCase() == "phone") {
                this.view.setWidth(null);
                this.view.setHeight('40%');
                this.view.setTop(null);
                this.view.setLeft(0);
            }
            if (!this.view.getParent()) {
                Ext.Viewport.add(this.view);
            }
            this.view.show();
        }
    },
//二次进入地图页面,数据清空,及重新加载
    reloadtfsj: function(record) {
        if (this.makerarr) {
            for (i in this.makerarr) {
                this.makerarr[i].setMap(null);
            }
            this.makerarr.length = 0;
        }
        if (this.makerarr1) {
            for (i in this.makerarr1) {
                this.makerarr1[i].setMap(null);
            }
            this.makerarr1.length = 0;
        }
        if (this.makerarr2) {
            for (i in this.makerarr2) {
                this.makerarr2[i].setMap(null);
            }
            this.makerarr2.length = 0;
        }
        if (this.makerarr3) {
            for (i in this.makerarr3) {
                this.makerarr3[i].setMap(null);
            }
            this.makerarr3.length = 0;
        }
        if (this.makerarr4) {
            for (i in this.makerarr4) {
                this.makerarr4[i].setMap(null);
            }
            this.makerarr4.length = 0;
        }
        if (this.makerarr5) {
            for (i in this.makerarr5) {
                this.makerarr5[i].setMap(null);
            }
            this.makerarr5.length = 0;
        }
        if (this.infosel) {
            for (i in this.infosel) {
                this.infosel[i].close();
            }
            this.infosel.length = 0;
        }
        if(this.circle7){
            this.circle7.setMap(null);
        }
        if(this.circle10){
            this.circle10.setMap(null);
        }
        if(this.flightPath){
            this.flightPath.setMap(null);
        }
        if(this.flightPath1){
            this.flightPath1.setMap(null);
        }
        if(this.flightPath2){
            this.flightPath2.setMap(null);
        }
        if(this.flightPath3){
            this.flightPath3.setMap(null);
        }
        if(this.flightPath4){
            this.flightPath4.setMap(null);
        }
        if(this.flightPath5){
            this.flightPath5.setMap(null);
        }
        if (this.line != null) {
            this.line.setMap(null);
            this.line = null;
        }
        if (this.pointMarkerZhuJi != null) {
            this.pointMarkerZhuJi.setMap(null);
            this.pointMarkerZhuJi = null;
        }
        this.map.setZoom(GeMobile.app.mapCenter[2]);
        this.mydate(record.data.tfname,record.data.tfbh,record.data.tfactive);
    },
//半屏台风历史数据对应的标签
    hideview: function(record) {
        this.map.setZoom(GeMobile.app.mapCenter[2]);
        this.view.hide();
        this.map.panTo(new google.maps.LatLng(record._data.wd, record._data.jd));
        marker = new google.maps.Marker({
            position: new google.maps.LatLng(record._data.wd, record._data.jd),
            map: this.map,
            visible: false,
            title: "wd:" + record._data.wd + "jd" + record._data.jd
        });
        infowindow = new google.maps.InfoWindow(
            { content: "时间:" + record._data.sj + "<br>经度:" + record._data.jd + "<br>纬度" + record._data.wd,
                size: new google.maps.Size(50, 50)
            });

        this.infosel.push(infowindow);
        infowindow.open(this.map, marker);
    },
//计算当前台风中心点到诸暨的距离.
    changelatlng: function() {
        google.maps.LatLng.prototype.distanceFrom = function(latlng) {
            var lat = [this.lat(), latlng.lat()]
            var lng = [this.lng(), latlng.lng()]
            var R = 6378137;
            var dLat = (lat[1] - lat[0]) * Math.PI / 180;
            var dLng = (lng[1] - lng[0]) * Math.PI / 180;
            var a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
                Math.cos(lat[0] * Math.PI / 180) * Math.cos(lat[1] * Math.PI / 180) *
                    Math.sin(dLng / 2) * Math.sin(dLng / 2);
            var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
            var d = R * c;
            return Math.round(d);
        }
        var loc1 = new google.maps.LatLng(this.tfwd, this.tfjd);
        var loc2 = new google.maps.LatLng(GeMobile.app.zhujimapCenter[0], GeMobile.app.zhujimapCenter[1]);
        var dist = loc2.distanceFrom(loc1);
        this.infoLastTfvalue(dist / 1000);
    },
//两坐标点之间的线路(虚线路径)
    route: function() {
        if (this.line != null && this.pointMarkerZhuJi != null) {
            this.line.setMap(null);
            this.line = null;
            this.pointMarkerZhuJi.setMap(null);
            this.pointMarkerZhuJi = null;
            this.map.panTo(new google.maps.LatLng(this.tfwd, this.tfjd));
            this.map.setZoom(GeMobile.app.mapCenter[2]);
        } else {
            this.map.setZoom(11);
            this.map.panTo(new google.maps.LatLng(GeMobile.app.zhujimapCenter[0], GeMobile.app.zhujimapCenter[1]));
            var lineCoordinates = [
                new google.maps.LatLng(this.tfwd, this.tfjd),
                new google.maps.LatLng(GeMobile.app.zhujimapCenter[0], GeMobile.app.zhujimapCenter[1])
            ];
            var lineSymbol = {
                path: 'M 0,-1 0,1',
                strokeOpacity: 1,
                scale: 2
            };
            this.line = new google.maps.Polyline({
                path: lineCoordinates,
                strokeOpacity: 0,
                icons: [{
                    icon: lineSymbol,
                    offset: '0',
                    repeat: '20px'
                }],
                map: this.map
            });

            this.pointMarker();
        }
    },
    //生成针状图标
    pointMarker: function() {
        image = new google.maps.MarkerImage(
            'resources/images/typhoon/point.png',
            new google.maps.Size(32, 31),
            new google.maps.Point(0, 0),
            new google.maps.Point(16, 31)
        ),
            shadow = new google.maps.MarkerImage(
                'resources/images/typhoon/shadow.png',
                new google.maps.Size(64, 52),
                new google.maps.Point(0, 0),
                new google.maps.Point(-5, 42)
            ),
            this.pointMarkerZhuJi = new google.maps.Marker({
                position: new google.maps.LatLng(GeMobile.app.zhujimapCenter[0], GeMobile.app.zhujimapCenter[1]),
                map: this.map,
                visible: true,
                title: "该点位置为岱山",
                shadow: shadow,
                icon: image
            });
    }
});

