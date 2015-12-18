// Require all css
require("../css/theme.less");

// BootstrapJS
require("../js/libs/bootstrap.js");

// BackboneJS Bootstrap Modal 
require("../js/libs/backbone.bootstrap.modal.js");

// Extra javascript
require("jquery.easing");

// Custom setup
require("./project/custom.js");

// Extend the callbacks to work with Bootstrap, as used in this example
// See: http://thedersen.com/projects/backbone-validation/#configuration/callbacks
_.extend(Backbone.Validation.callbacks, {
    valid: function (view, attr, selector) {
        var $el = view.$('[name=' + attr + ']'), 
            $group = $el.closest('.form-group');
        
        $group.removeClass('has-error');
        $group.find('.help-block').html('').addClass('hidden');
    },
    invalid: function (view, attr, error, selector) {
        var $el = view.$('[name=' + attr + ']'), 
            $group = $el.closest('.form-group');
        
        $group.addClass('has-error');
        $group.find('.help-block').html(error).removeClass('hidden');
    }
});


var registrationModel = require("./project/models/RegistrationModel.js");

var Rate = require("./project/models/RateModel.js");
var Rates = require("./project/collections/RatesCollection.js");
var RatesView = require("./project/views/ratesView.js");
var RegistrationView = require("./project/views/registrationView.js");

var rate1 = new Rate({unitSize: "5' x 10'", monthlyRate: "$45.00", sqft: 150});
var rate2 = new Rate({unitSize: "10' x 10'", monthlyRate: "$62.00", sqft: 250});
var rate3 = new Rate({unitSize: "15' x 10'", monthlyRate: "$73.00", sqft: 350});
var rate4 = new Rate({unitSize: "20' x 10'", monthlyRate: "$85.00", sqft: 350});
var rate5 = new Rate({unitSize: "25' x 10'", monthlyRate: "$95.00", sqft: 350});
var rate6 = new Rate({unitSize: "25' x 50'", monthlyRate: "$675.00", sqft: 350});

var myRates = new Rates([rate1, rate2, rate3, rate4, rate5, rate6]);
var ratesView = new RatesView({collection: myRates});
var registrationView = new RegistrationView({el: 'form', model: new registrationModel()});

$("#rates-section").append(ratesView.render().el);

console.log(myRates.models);

// Load backboneJS router
var Workspace = require("./router");
new Workspace();