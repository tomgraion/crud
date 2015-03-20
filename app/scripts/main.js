/*global Crud, $*/


window.Crud = {
    Models: {},
    Collections: {},
    Views: {},
    Routers: {},
    init: function () {
        var view = this;
        //Initialize Collection
        var taleOfTwoCities = new Crud.Models.Post({
            title: 'A Tale of Two Cities',
            author: 'Charles Dickens',
            publisher: 'Chapman & Hall'
        });

        var goodEarth = new Crud.Models.Post({
            title: 'The Good Earth',
            author: 'Pearl S. Buck',
            publisher: 'John Day'
        });

        view.Collection = new Crud.Collections.Post(taleOfTwoCities,goodEarth);

        Crud.Views.Blog = new Crud.Views.Blog(view.Collection);

    }
};

$(document).ready(function () {
    'use strict';
    Crud.init();
});
