// Require all css
require("bootstrap-webpack");
require("../css/styles.css");

// Load backboneJS router
var Workspace = require("./router");
new Workspace();