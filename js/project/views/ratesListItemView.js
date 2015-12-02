var template = require("../templates/table.ejs");
var modalView = require("../views/modalView.js");

var RatesListItemView = Backbone.View.extend({
    tagName: 'tr',
    events: {
        "click input[type=checkbox]": "publish"
    },
    render: function (eventName) {
        $(this.el).append(template);
        return this;
    },
    publish: function () {
        console.log(this.model.get("Metadata").Name);
    }
});

module.exports = RatesListItemView;