/**
 * Created by USER on 14-5-9.
 */

Ext.define('GeMobile.view.radar.Radar', {

    extend: 'Ext.Container',
    xtype: 'radar',

    requires: ['Ext.XTemplate'],

    config: {
        title: '气象雷达',
        itemId: 'radar',
        items: [
            {
                xtype: 'toolbar',
                docked: 'bottom',
                items: [
                    {
                        iconCls: 'arrow_right',
                        itemId: 'radarstart',
                        iconMask: true
                    },
                    {
                        xtype: 'sliderfield',
                        name: 'single_slider',
                        itemId: 'radarslider',
                        value: 0,
                        listeners: {
                            change: function(thisSlider, slider, thumb, newValue, oldValue, eOpts) {
                                Ext.ComponentQuery.query('#radar')[0].sliderChangePic(newValue);
                            }
                        }
                    }
                ]
            }
        ],
        cls: 'detail-card',
        styleHtmlContent: true,
        scrollable: {
            direction: 'vertical',
            directionLock: true
        },
        tpl: Ext.create('Ext.XTemplate',
            '<div style="width:100%; height:100%;text-align:center;"><img width="100%" height="73%" src="{img}" alt="暂无图片数据"/></div>'
        )
    },
    loadstore: function() {
        var me = this;
        me.currentIndex = 0;
        me.imgsLength = 0;
        me.store = Ext.getStore('RadarStore');
        me.store.getProxy().setExtraParams({
            t: 'GetHtmlSource',
            weixingyuntuType: 'qxld',
            diquQxld: 'hangzhou'
        });
        me.store.load(function(records, operation, success) {
            me.store.sort("index", "desc");
            me.imgsLength = me.store.getData().all.length;
            for (var i = 0; i < me.store.getCount(); i++) {
                me.checkimgload(me.store.getAt(i).get('img'));
            }
            me.imgloadsj(me.store.getCount());
            me.setData(me.store.getData().all[me.currentIndex].data);
        }, this);
    },

    imgloadsj: function(count) {
        var me = this;
        if (this.imgloadindex < count) {
            window.setTimeout(function() { me.imgloadsj(count); }, 200);
        }
    },

    checkimgload: function(url) {
        var img = new Image();
        img.src = url;
        if (img.complete) {
            this.imgloadindex++;
        } else {
            img.onload = function() {
                img.onload = null;
            }
        }
    },


    changePic: function(that) {
        that.currentIndex++;
        if (that.currentIndex == that.imgsLength) {
            if (this.stopIntervalQxld != undefined) {
                window.clearInterval(this.stopIntervalQxld);
            }
            Ext.ComponentQuery.query('#radarstart')[0].enable();
            that.currentIndex = 0;
        }
        that.setData(that.store.getData().all[that.currentIndex % that.imgsLength].data);
        Ext.ComponentQuery.query('#radarslider')[0].setValue(that.currentIndex == that.imgsLength ? 0 : that.currentIndex * 110 / that.imgsLength);
    },

    clickStartToChangePic: function() {
        Ext.ComponentQuery.query('#radarstart')[0].disable();
        var that = this;
        if (this.stopIntervalQxld != undefined) {
            window.clearInterval(this.stopIntervalQxld);
        }
        this.stopIntervalQxld = window.setInterval(function() { that.changePic(that) }, 1000);
    },

    sliderChangePic: function(newValue) {
        var currentSliderValue = Math.floor(newValue / 100 * this.imgsLength) == this.imgsLength ? this.imgsLength - 1 : Math.floor(newValue / 100 * this.imgsLength);
        this.currentIndex = currentSliderValue;
        this.setData(this.store.getData().all[this.currentIndex].data);
    },

    changePicToLeft: function() {
        if (this.stopIntervalQxld != undefined) {
            window.clearInterval(this.stopIntervalQxld);
        }
        this.setData(this.store.getData().all[this.currentIndex = (((this.currentIndex - 1) == -1 ? this.imgsLength - 1 : this.currentIndex - 1) % this.imgsLength)].data);
    },

    changePicToRight: function() {
        if (this.stopIntervalQxld != undefined) {
            window.clearInterval(this.stopIntervalQxld);
        }
        this.currentIndex++;
        this.setData(this.store.getData().all[(this.currentIndex) % this.imgsLength].data);
    },

    loadDataQxldFromHtmlSource: function(leidaDiQuData) {
        Ext.ComponentQuery.query('#radarstart')[0].enable();
        this.currentIndex = 0;
        if (this.store != undefined) {
            this.store.clearFilter();
        }
        this.store = Ext.getStore('HtmlSource');
        this.store.getProxy().setExtraParams({
            t: 'GetHtmlSource',
            weixingyuntuType: 'qxld',
            diquQxld: leidaDiQuData
        });

        this.store.load(function(records, operation, success) {
            this.imgsLength = this.store.getData().all.length;
            for (var i = 0; i < this.store.getCount(); i++) {
                this.checkimgload(this.store.getAt(i).get('img'));
            }
            this.imgloadsj(this.store.getCount());
            this.setData(this.store.getData().all[this.currentIndex].data);
        }, this);

        var that = this;
        if (that.stopIntervalQxld != undefined) {
            window.clearInterval(that.stopIntervalQxld);
        }
        Ext.ComponentQuery.query('#radarslider')[0].setValue(0);
    },


    stopIntervalQxldToBack: function() {
        Ext.ComponentQuery.query('#radarslider')[0].setValue(0);
        Ext.ComponentQuery.query('#radarstart')[0].enable();
        if (this.store != undefined) {
            this.store.clearFilter();
        }
        if (this.stopIntervalQxld != undefined) {
            window.clearInterval(this.stopIntervalQxld);
        }
    }
});

