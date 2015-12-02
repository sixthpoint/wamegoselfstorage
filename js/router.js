var AppRouter = Backbone.Router.extend({
    routes: {
        '10x10': '10x11',
        '*actions': 'home'
    }
});

var modalView = require("./project/views/modalView.js");

module.exports = function () {
    var appRouter = new AppRouter;

    appRouter.on('route:home', function () {
        console.log("home");
    });


    appRouter.on('route:10x11', function () {

        require.ensure([], function () {
            var template = require("./project/templates/example.ejs");
            var view = new modalView();
            var modal = new Backbone.BootstrapModal({
                content: view,
                allowCancel: false,
                title: 'Example modal',
                animate: true,
                escape: false
            }).open();
            console.log('render');
        });
    });






    Backbone.history.start();
};