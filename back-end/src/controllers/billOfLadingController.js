class BillOfLadingsController {

    //[GET] bill-of-ladings
    index(req,res){
        res.render("bill-of-lading");
    }
    detail(req,res){
        res.send("bill-of-lading-detail")
    }
}
module.exports = new BillOfLadingsController;