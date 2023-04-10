/**
 * Định nghĩa các routes dành cho các  views và dành cho các routes api
 */
const billOfLadingRouter  = require('./admin/billOfLadingsRoutes');
function route ( app) {
    app.use('/api/bill-of-ladings',billOfLadingRouter)
    app.use("/",(req,res)=>{
        res.render("home")
    })
}

module.exports = route;
