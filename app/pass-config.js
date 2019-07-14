const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;

const userAdmin = {
  id: 1,
  username: 'admin',
  password: 'admin'
};

passport.serializeUser(function(user,done) {
  done(null, user.id);
});

passport.deserializeUser(function(id, done){
  const user = (userAdmin.id == id) ? userAdmin : false;
  done(null, userAdmin);
});

passport.use(
  new LocalStrategy(function(username, password, done) {
    if(username == userAdmin.username && password == userAdmin.password) {
      return done(null, userAdmin);
    } else {
      return done(null, false);
    }
  })
);
