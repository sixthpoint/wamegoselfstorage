var template = require("../templates/table.ejs");
var RateListItemView = require("../views/ratesListItemView.js");

var RatesView = Backbone.View.extend({
    tagName: 'table',
    className: 'table table-striped',
    initialize: function () {
        _.bindAll(this, 'render');
    },
//    events: {
//        'click #open': 'openModal'
//    },
//    openModal: function () {
//        var view = new modalView();
//        var modal = new Backbone.BootstrapModal({
//            content: view,
//            allowCancel: false,
//            title: 'Example modal',
//            animate: true,
//            escape: false
//        }).open();
//
//        modal.on('ok', function () {
//            //Do some validation etc.
////            if (!isValid) {
////                modal.preventClose();
////            }
//        });
//    },
    render: function () {
        this.$el.empty();
        var els = [];
        this.collection.each(function (page) {
            var pageview = new RateListItemView({model: page});
            var $tr = pageview.render().$el;
            els.push($tr);
        }, this);

        this.$el.append(els);

        return this;
        //return this;
    }
});

module.exports = RatesView;