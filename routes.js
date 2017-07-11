Router.route('/register', {
  where: 'server',
  action: function() {
    var queryObject = this.request.body;
    this.response.writeHead(200, {'Content-Type': 'application/json'})

    Accounts.createUser(queryObject);
    var userSearchResult = Meteor.users.findOne({username: queryObject.username })

    if( userSearchResult !== {}) {
      this.response.end(JSON.stringify({"_id": userSearchResult._id}));
    } else {
      this.response.end("{}");
    }

  }
});

Router.route('/login', {
  where: 'server',
  action: function() {
    var queryObject = this.request.body;
    this.response.writeHead(200, {'Content-Type': 'application/json'});

    console.log(Accounts._server.method_handlers.login(queryObject));

  }
})
