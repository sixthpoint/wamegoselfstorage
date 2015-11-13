// Require all css
//require("bootstrap-webpack");
require("../css/css/bootstrap.css");
require("../css/styles.css");

// BootstrapJS
require("../js/bootstrap/bootstrap.js");

// Load backboneJS router
var Workspace = require("./router");
new Workspace();