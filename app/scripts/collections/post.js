/*global Crud, Backbone*/

Crud.Collections = Crud.Collections || {};

(function () {
    'use strict';

    Crud.Collections.Post = Backbone.Collection.extend({

        model: Crud.Models.Post,
        url: 'getPosts/',
        initialize:function(){
  			//this.fetch();
        }


    });

})();
