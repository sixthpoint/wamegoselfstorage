var template = require("../templates/table.ejs");
var modalView = require("../views/modalView.js");

var RatesListItemView = Backbone.View.extend({
    tagName: 'tr',
    events: {
        "click input[type=checkbox]": "publish"
    },
    render: function (model) {
        console.log(model);
        $(this.el).append(template(this.model.toJSON()));
        return this;
    },
    publish: function () {
        console.log(this.model.get("Metadata").Name);
    }
});

module.exports = RatesListItemView;