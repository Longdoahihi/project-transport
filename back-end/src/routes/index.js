/**
 * Định nghĩa các routes dành cho các  views và dành cho các routes api
 */
const billOfLadingRouter  = require('./admin/billOfLadingsRoutes');
const billOfLadingApiRouter  = require('./api/billOfLadingsRoutes');
function route ( app) {
    app.use('/admin/bill-of-ladings',billOfLadingRouter)
    app.use('/api/bill-of-ladings',billOfLadingApiRouter)
    app.use("/",(req,res)=>{
        res.render("home")
    })
}

module.exports = route;
