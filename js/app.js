// Require all css
require("../css/theme.less");

// BootstrapJS
require("../js/libs/bootstrap.js");

// Extra javascript
require("jquery.easing");

// Custom setup
require("./project/custom.js");

// Load backboneJS router
var Workspace = require("./router");
new Workspace();