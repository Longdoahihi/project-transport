const billOfLadingRouter  = require('./admin/billOfLadings');
function route ( app) {
    // app.use('/bill-of-ladings',billOfLadingRouter);
    app.use('/bill-of-ladings',billOfLadingRouter);
}

module.exports = route;
