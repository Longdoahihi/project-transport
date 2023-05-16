const { dynamoClient } = require("../config/db");
const { v4: uuidv4 } = require('uuid');
class BillOfLadingsController {
    createBillOfLadings(req, res) {
        console.log(req.body)
        // return;
        const {
            customerID,
            billOfLadingName,
            receiptDate,
            deliveryDate,
            billOfLadingStatus,
            width,
            height,
            length,
            description,
            currentAddress,
            cost,
        } = req.body;
        const params = {
            TableName: "BillOfLading",
            Item: {
                billOfLadingID: uuidv4(),
                customerID,
                billOfLadingName,
                receiptDate,
                deliveryDate,
                billOfLadingStatus,
                width,
                height,
                length,
                description,
                currentAddress,
                cost,
            }
        }
        dynamoClient.put(params, (err, data) => {
            if (err)
                res.send({
                    code: 500,
                    message: "Thêm mới vận đơn thất bại! Lỗi: " + err
                })
            else
                res.send({
                    code: 200,
                    message: "Thêm mới vận đơn thành công!"
                })
        })
    }

}
module.exports = new BillOfLadingsController;