Router.configure({
    layoutTemplate: 'layout',

    waitOn: function() { return Meteor.subscribe('posts'); }
});
Router.map(function() {
    this.route('postsList', {path: '/'});
});
//Router.route('/submit', {name: 'postSubmit'});
Router.route('/posts/:_id/edit', {
  name: 'postEdit',
  data: function() { return Posts.findOne(this.params._id); }
});
var requireLogin = function() {
          if (! Meteor.user()) {
                this.render('accessDenied');
              } else {
                this.next();
              }
        }

    Router.onBeforeAction('dataNotFound', {only: 'postPage'});
Router.onBeforeAction(requireLogin, {only: 'postSubmit'});