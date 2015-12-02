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



var Rate = require("./project/models/RateModel.js");
var Rates = require("./project/collections/RatesCollection.js");
var RatesView = require("./project/views/ratesView.js");

var song1 = new Rate({unitSize: "How Bizarre", monthlyRate: 45, sqft: 150});
var song2 = new Rate({unitSize: "How Bizarre", monthlyRate: 50, sqft: 250});
var song3 = new Rate({unitSize: "How Bizarre", monthlyRate: 60, sqft: 350});

var myRates = new Rates([song1, song2, song3]);
var ratesView = new RatesView({collection:myRates})

//$("#stuff").append(ratesView.render().el);

console.log( myRates.models );

// Load backboneJS router
var Workspace = require("./router");
new Workspace();