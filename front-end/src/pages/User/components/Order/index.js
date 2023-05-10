import InputCustom from "components/InputCustom";
import SelectCustom from "components/SelectCustom";
import { Table } from "reactstrap";

/**
 * 
 * mã đơn hàng
 * tên đơn hàng
 * người nhận
 * Số lượng 
 * trọng lượng
 * giá trị 
 * số tiền thu hộ 
 * Y/c giao hàng
 * T/c lấy hàng
 */
function Order() {
    return (<>
        <h3>Danh sách vận đơn</h3>
        <div className="row">
            <div className="col-md-4">
                <InputCustom
                    placeholder={"Nhập để tìm kiếm"}
                />
            </div>
            <div className="col-md-2" >
                <SelectCustom
                    placeholder={"Chọn trạng thái"}
                    options={[
                        {
                            label: 'Khởi tạo',
                            value: 0
                        },
                        {
                            label: 'Đang vận chuyển',
                            value: 0
                        },
                        {
                            label: 'Hoàn thành',
                            value: 0
                        }
                    ]}
                />
            </div>
        </div>
        <Table hover responsive>
            <thead>
                <tr>
                    <th className="h2" style={{ fontWeight: 'bold' }}>Mã đơn hàng</th>
                    <th className="h2" style={{ fontWeight: 'bold' }}>Tên đơn hàng</th>
                    <th className="h2" style={{ fontWeight: 'bold' }}>Người nhận</th>
                    <th className="h2 text-right" style={{ fontWeight: 'bold' }}>Số lượng</th>
                    <th className="h2 text-right" style={{ fontWeight: 'bold' }}>Trọng lượng(kg)</th>
                    <th className="h2 text-right" style={{ fontWeight: 'bold' }}>Giá trị</th>
                    <th className="h2 text-right" style={{ fontWeight: 'bold' }}>Số tiền thu hộ</th>
                    <th className="h2 text-right" style={{ fontWeight: 'bold' }}>Thời gian dự kiến</th>
                    <th className="h2 text-right" style={{ fontWeight: 'bold' }}>Tổng tiền</th>
                    <th className="h2" style={{ fontWeight: 'bold' }}></th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>DH001</td>
                    <td>Áo thun</td>
                    <td>Phạm Thanh Hưng</td>
                    <td className="text-right" >12</td>
                    <td className="text-right">32</td>
                    <td className="text-right">56</td>
                    <td className="text-right">44</td>
                    <td className="text-right">12/12/2029</td>
                    <td className="text-right">12.000 VND</td>
                    <td class="td-actions text-right">
                        <button type="button" rel="tooltip" class="btn btn-info">
                            <i class="now-ui-icons users_single-02"></i>
                        </button>
                        <button type="button" rel="tooltip" class="btn btn-success">
                            <i class="now-ui-icons ui-2_settings-90"></i>
                        </button>
                        <button type="button" rel="tooltip" class="btn btn-danger">
                            <i class="now-ui-icons ui-1_simple-remove"></i>
                        </button>
                    </td>
                </tr>
                <tr>
                    <td>DH001</td>
                    <td>Áo thun</td>
                    <td>Phạm Thanh Hưng</td>
                    <td className="text-right" >12</td>
                    <td className="text-right">32</td>
                    <td className="text-right">56</td>
                    <td className="text-right">44</td>
                    <td className="text-right">12/12/2029</td>
                    <td className="text-right">12.000 VND</td>
                    <td class="td-actions text-right">
                        <button type="button" rel="tooltip" class="btn btn-info">
                            <i class="now-ui-icons users_single-02"></i>
                        </button>
                        <button type="button" rel="tooltip" class="btn btn-success">
                            <i class="now-ui-icons ui-2_settings-90"></i>
                        </button>
                        <button type="button" rel="tooltip" class="btn btn-danger">
                            <i class="now-ui-icons ui-1_simple-remove"></i>
                        </button>
                    </td>
                </tr>
                <tr>
                    <td>DH001</td>
                    <td>Áo thun</td>
                    <td>Phạm Thanh Hưng</td>
                    <td className="text-right" >12</td>
                    <td className="text-right">32</td>
                    <td className="text-right">56</td>
                    <td className="text-right">44</td>
                    <td className="text-right">12/12/2029</td>
                    <td className="text-right">12.000 VND</td>
                    <td class="td-actions text-right">
                        <button type="button" rel="tooltip" class="btn btn-info">
                            <i class="now-ui-icons users_single-02"></i>
                        </button>
                        <button type="button" rel="tooltip" class="btn btn-success">
                            <i class="now-ui-icons ui-2_settings-90"></i>
                        </button>
                        <button type="button" rel="tooltip" class="btn btn-danger">
                            <i class="now-ui-icons ui-1_simple-remove"></i>
                        </button>
                    </td>
                </tr>
                <tr>
                    <td>DH001</td>
                    <td>Áo thun</td>
                    <td>Phạm Thanh Hưng</td>
                    <td className="text-right" >12</td>
                    <td className="text-right">32</td>
                    <td className="text-right">56</td>
                    <td className="text-right">44</td>
                    <td className="text-right">12/12/2029</td>
                    <td className="text-right">12.000 VND</td>
                    <td class="td-actions text-right">
                        <button type="button" rel="tooltip" class="btn btn-info">
                            <i class="now-ui-icons users_single-02"></i>
                        </button>
                        <button type="button" rel="tooltip" class="btn btn-success">
                            <i class="now-ui-icons ui-2_settings-90"></i>
                        </button>
                        <button type="button" rel="tooltip" class="btn btn-danger">
                            <i class="now-ui-icons ui-1_simple-remove"></i>
                        </button>
                    </td>
                </tr>
            </tbody>
        </Table>
        <div className="row" >
            <div className="col-md-6">
                <SelectCustom
                    row={true}
                    placeholder={"Chọn số"}
                    options={[
                        {
                            label: '10',
                            value: 10
                        },
                        {
                            label: '25',
                            value: 25
                        },
                        {
                            label: '50',
                            value: 50
                        },
                        {
                            label: '100',
                            value: 100
                        },
                    ]}
                    label={"Số bản ghi"}
                    labelWidth={100}
                    maxWidth={120}
                />
            </div>
            <div className="col-md-6 position-relative" >
                <nav aria-label=" navigation pull-right"
                    style={{
                        position: 'absolute',
                        right: 0,
                        top: 0
                    }}
                >
                    <ul class="pagination">
                        <li class="page-item"><a class="page-link" href="#">&lt;</a></li>
                        <li class="page-item"><a class="page-link" href="#">1</a></li>
                        <li class="page-item"><a class="page-link" href="#">2</a></li>
                        <li class="page-item"><a class="page-link" href="#">3</a></li>
                        <li class="page-item"><a class="page-link" href="#">&gt;</a></li>
                    </ul>
                </nav>
            </div>
        </div>
    </>);
}

export default Order;