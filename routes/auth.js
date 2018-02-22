const passport = require('passport');

module.exports = app => {
    app.get('/auth/google', passport.authenticate('google', {
        scope: ['profile', 'email']
    }));

    app.get('/auth/google/callback', passport.authenticate('google'), (req, res) => {
        res.redirect('/')
    });

    app.get('/api/logout', (req, res) => {
        req.logout();
        res.send(req.user);
    });

    app.get('/api/is-user', (req, res) => {
        if(req.user){
            return res.send({isUser: true});
        }

        res.send({ isUser: false });
    });

    app.get('/api/current-user', (req, res) => {
        res.send(req.user);
    });
}
