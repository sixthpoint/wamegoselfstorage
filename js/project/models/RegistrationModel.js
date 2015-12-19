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
            required: true,
            oneOf: ['AL', 'AK', 'AZ', 'AR', 'CA', 'CO', 'CT', 'DE', 'DC', 'FL', 'GA', 'HI', 'ID', 'IL', 'IN', 'IA', 'KS', 'KY', 'LA', 'ME', 'MD', 'MA', 'MI', 'MN', 'MS', 'MO', 'MT', 'NE', 'NV', 'NH', 'NJ', 'NM', 'NY', 'NC', 'ND', 'OH', 'OK', 'OR', 'PA', 'RI', 'SC', 'SD', 'TN', 'TX', 'UT', 'VT', 'VA', 'WA', 'WV', 'WI', 'WY']
        },
        email: {
            required: true,
            pattern: 'email',
            msg: "Valid email address is required"
        },
        phone: {
            required: true
        }
    }
});

module.exports = RegistrationModel;