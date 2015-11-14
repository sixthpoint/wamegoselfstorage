// Require all css
//require("bootstrap-webpack");
require("../css/bootstrap.css");
require("../css/styles.css");

// BootstrapJS
require("../js/libs/bootstrap.js");

// Load backboneJS router
var Workspace = require("./router");
new Workspace();