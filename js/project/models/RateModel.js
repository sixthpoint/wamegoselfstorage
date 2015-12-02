var RateModel = Backbone.Model.extend({
    defaults: {
        unitSize: "Not specified",
        monthlyRate: 0,
        sqft: 0
    }
});

module.exports = RateModel;