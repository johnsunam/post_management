Template.postSubmit.events({
    'submit form': function(e) {
        e.preventDefault();

        var post = {
            url: $(e.target).find('[name=url]').val(),
            title: $(e.target).find('[name=title]').val(),
            message: $(e.target).find('[name=message]').val()
        }
        Meteor.call('postInsert', post, function(error,result) {
                  // display the error to the user and abort
                  if (error){
                   return throwError(error.reason);
                  }
            else{
                      //alert(result);
                  Router.go('postPage', {_id: result});
                  }
                });
    }
});
