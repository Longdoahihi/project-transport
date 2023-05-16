const { dynamoClient } = require("../config/db");
const bcrypt = require('bcrypt');
class WarehouseController {
    async createWarehouse(req, res) {
        const {
            wareHouseID,
            warehouseName,
            employee,
            province,
            district,
            type
        } = req.body;
        console.log({
            wareHouseID,
            warehouseName,
            employee,
            province,
            district,
            type
        })
        var params = {
            TableName: 'Warehouse',
            Item: {
                wareHouseID,
                warehouseName,
                employee,
                province,
                district,
                type
            }
        };
        dynamoClient.put(params, function (err, data) {
            //Thêm mới
            if (err) {
                res.send({
                    code: 500,
                    message: `create ware house failed! : ${err}`
                });
            }
            else {
                res.send({
                    code: 200,
                    message: "Success!",
                });
            }
        });
    }

}
module.exports = new WarehouseController;
