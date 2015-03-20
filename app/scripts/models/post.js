/*global Crud, Backbone*/

Crud.Models = Crud.Models || {};

(function () {
    'use strict';

    Crud.Models.Post = Backbone.Model.extend({

        url: 'post/',

        initialize: function() {
        },

        defaults: {
            nombre: 'hola'
        },

        validate: function(attrs, options) {
        },

        parse: function(response, options)  {
            return response;
        }
    });

})();
