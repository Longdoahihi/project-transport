class BillOfLadingsController {
    getBillOfLadings(req,res){
        res.render("bill-of-lading");
    }
    getBillOfLadingsByID(req,res){
        res.render("bill-of-lading");
    }
    createBillOfLadings(req,res){
        res.render("bill-of-lading");
    }
    
}
module.exports = new BillOfLadingsController;