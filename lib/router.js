Router.configure({
    layoutTemplate: 'layout',

    waitOn: function() { return Meteor.subscribe('posts'); }
});
Router.map(function() {
    this.route('postsList', {path: '/'});
});
//Router.route('/submit', {name: 'postSubmit'});

var requireLogin = function() {
          if (! Meteor.user()) {
                this.render('accessDenied');
              } else {
                this.next();
              }
        }

    Router.onBeforeAction('dataNotFound', {only: 'postPage'});
Router.onBeforeAction(requireLogin, {only: 'postSubmit'});