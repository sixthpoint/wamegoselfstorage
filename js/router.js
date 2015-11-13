var AppRouter = Backbone.Router.extend({
    routes: {
        '*actions': 'home'
    }
});

module.exports = function () {
    var appRouter = new AppRouter;

    appRouter.on('route:home', function () {
        console.log("home");
    });

    Backbone.history.start();
};