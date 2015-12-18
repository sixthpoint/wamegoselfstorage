var RegistrationModel = Backbone.Model.extend({
    defaults: {
        unitSize: "Not specified",
        monthlyRate: 0,
        sqft: 0
    },
    validation: {
        name: {
            required: true
        },
        street: {
            required: true
        },
        city: {
            required: true
        },
        state: {
            required: true
        },
        email: {
            required: true
        },
        phone: {
            required: true
        }
    }
});

module.exports = RegistrationModel;