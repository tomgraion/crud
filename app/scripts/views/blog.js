/*global Crud, Backbone, JST*/

Crud.Views = Crud.Views || {};

(function () {
    'use strict';

    Crud.Views.Blog = Backbone.View.extend({

        el: $('#main'),

        template: JST['app/scripts/templates/blog.ejs'],

        tagName: 'div',

        id: '',

        className: '',

        events: {},

        initialize: function (options) {
            //this.listenTo(this.model, 'change', this.render);
            var view = this;
            this.collection();
            this.render();
        },

        render: function () {
            return "HOLA";
        }

    });

})();
