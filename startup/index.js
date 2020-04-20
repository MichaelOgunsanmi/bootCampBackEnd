module.exports = function (app) {
    require('./config')();
    require('./logging')();
    require('./views')(app);
    require('./routes')(app);
    require('./db')();
};