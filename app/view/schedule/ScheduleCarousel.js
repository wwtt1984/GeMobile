/**
 * Created by USER on 14-5-14.
 */

Ext.define('GeMobile.view.schedule.ScheduleCarousel',{
    extend: 'Ext.carousel.Carousel',

    xtype: 'schedulecarousel',

    config: {
        indicator: false,
        enableSwipeNavigate: true,
        currentDate: '',
        preStore: 'ScheduleStore',
        currentStore: 'PreScheduleStore',
        nextStore: 'NextScheduleStore',
        scheHeader: ''
    },

    initialize: function(){

//        this.viewConfig = Ext.applyIf(this.viewConfig || {}, this.defaultViewConfig);
//
//        this.viewConfig.currentDate = this.viewConfig.currentDate || this.viewConfig.value || new Date();
//
//        this.setViewMode(this.viewConfig.viewMode.toUpperCase());
//        this.viewConfig = Ext.applyIf(this.viewConfig || {}, this.defaultViewConfig);

        this.initViews();

//        Ext.apply(this, {
//            cls: 'touch-calendar',
//            activeItem: (this.getEnableSwipeNavigate() ? 1: 0),
//            direction: 'horizontal'
//        });

//        this.setIndicator(false); // for some reason, indicator: false is not being applied unless explicitly set.
        this.setActiveItem(1); // for some reason, activeItem: 1 is not being applied unless explicitly set.

//        this.on('selectionchange', this.onSelectionChange);
        this.on('activeitemchange', this.onActiveItemChange);
//
//        if (this.getEnableSwipeNavigate()) {
//            // Bind the required listeners
//            this.on(this.element, {
//                drag: this.onDrag,
//                dragThreshold: 5,
//                dragend: this.onDragEnd,
//                direction: this.direction,
//                scope: this
//            });
//
//            this.element.addCls(this.baseCls + '-' + this.direction);
//        }
    },

    initViews: function(){

        var me = this;
        var items = [];
        var config = this.config;

        if(Ext.getStore(config.preStore).getCount()){
            var prestore = Ext.create('Ext.data.Store',{
                model: 'GeMobile.model.ScheduleModel',
                data: Ext.getStore(config.preStore).getData().all
            });
            var pre = Ext.create('GeMobile.view.schedule.ScheduleList', Ext.applyIf({
                store: prestore,
                currentDate: config.currentDate-1
            }));
            items.push(pre);
        }


        if(Ext.getStore(config.currentStore).getCount()){
            var nowstore = Ext.create('Ext.data.Store',{
                model: 'GeMobile.model.ScheduleModel',
                data: Ext.getStore(config.currentStore).getData().all
            });
            var now = Ext.create('GeMobile.view.schedule.ScheduleList', Ext.applyIf({
                store: nowstore,
                currentDate: config.currentDate
            }));
            items.push(now);
        }

        if(Ext.getStore(config.nextStore).getCount()){
            var nextstore = Ext.create('Ext.data.Store',{
                model: 'GeMobile.model.ScheduleModel',
                data: Ext.getStore(config.nextStore).getData().all
            });
            var next = Ext.create('GeMobile.view.schedule.ScheduleList', Ext.applyIf({
                store: nextstore,
                currentDate: config.currentDate+1
            }));
            items.push(next);
        }


        this.setItems(items);
    },

    getViewDate: function(date, i){

        return Ext.Date.add(date, 'MONTH', i)
    },

    /**
     * Override of the onCardSwitch method which adds a new card to the end/beginning of the carousel depending on the direction configured with the next period's
     * dates.
     * @method
     * @private
     */
    onActiveItemChange: function(container, newCard, oldCard){

        var me = this;
        if (this.getEnableSwipeNavigate()) {
            var items = this.getItems();
            var length = items.length;
            var newIndex = items.indexOf(newCard), oldIndex = items.indexOf(oldCard), direction = (newIndex > oldIndex) ? 'forward' : 'backward';

            this.counter = (this.counter || 0) + 1;

            if (direction === 'forward') {
                if(length > 2){
                    this.remove(items.get(0));
                }

                var store = Ext.create('Ext.data.Store',{
                    model: 'GeMobile.model.ScheduleModel',
                    proxy: {
                        type: 'sk'
                    }
                });
                store.getProxy().setExtraParams({
                    t: 'GetTflist',
                    tfyear: newCard.config.currentDate + 1
                });
                store.load(function(records, operation, success) {

                    if(records.length)
                    {
                        var nextstore = Ext.create('Ext.data.Store',{
                            model: 'GeMobile.model.ScheduleModel',
                            data: store.getData().all
                        });
                        var next = Ext.create('GeMobile.view.schedule.ScheduleList', Ext.applyIf({
                            store: nextstore,
                            currentDate: newCard.config.currentDate + 1
                        }));
                        me.add(next);
                    }
                });

            }
            else {
                if(length > 2){
                    this.remove(items.get(items.getCount() - 1));
                }

                var store = Ext.create('Ext.data.Store',{
                    model: 'GeMobile.model.ScheduleModel',
                    proxy: {
                        type: 'sk'
                    }
                });
                store.getProxy().setExtraParams({
                    t: 'GetTflist',
                    tfyear: newCard.config.currentDate - 1
                });
                store.load(function(records, operation, success) {

                    if(records.length)
                    {
                        var prestore = Ext.create('Ext.data.Store',{
                            model: 'GeMobile.model.ScheduleModel',
                            data: store.getData().all
                        });
                        var pre = Ext.create('GeMobile.view.schedule.ScheduleList', Ext.applyIf({
                            store: prestore,
                            currentDate: newCard.config.currentDate - 1
                        }));
                        me.insert(0, pre);
                    }
                });
            }
            Ext.ComponentQuery.query(me.config.scheHeader)[0].setData({header: newCard.config.currentDate});

//            this.view = newCard;
//
//            var dateRange = this.view.getPeriodMinMaxDate();
//            this.fireEvent('periodchange', this.view, dateRange.min.get('date'), dateRange.max.get('date'), direction);
        }
    }
})