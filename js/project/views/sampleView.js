var template = require("../templates/example.ejs");
var modalView = require("../views/modalView.js");

var SampleView = Backbone.View.extend({
    initialize: function () {
        _.bindAll(this, 'render');
    },
    events: {
        'click #open': 'openModal'
    },
    openModal: function () {
        var view = new modalView();
        var modal = new Backbone.BootstrapModal({
            content: view,
            allowCancel: false,
            title: 'Example modal',
            animate: true,
            escape: false
        }).open();

        modal.on('ok', function () {
            //Do some validation etc.
//            if (!isValid) {
//                modal.preventClose();
//            }
        });
    },
    render: function () {
        $(this.el).append(template({message: "Open modal"}));
        return this;
    }
});

module.exports = SampleView;