var RegistrationView = Backbone.View.extend({
    events: {
        'click #sendRegistration': function (e) {
            e.preventDefault();
            this.register();
        }
    },
    initialize: function () {
        // This hooks up the validation
        Backbone.Validation.bind(this);
    },
    register: function () {
        var data = this.$el.serializeObject();
         console.log(this.$el);
        console.log(data);
        this.model.set(data);
        
        // Check if the model is valid before saving
        // See: http://thedersen.com/projects/backbone-validation/#methods/isvalid
        if(this.model.isValid(true)){
            // this.model.save();
            alert('Great Success!');
        }
    },
    remove: function() {
        // Remove the validation binding
        Backbone.Validation.unbind(this);
        return Backbone.View.prototype.remove.apply(this, arguments);
    }
});



module.exports = RegistrationView;