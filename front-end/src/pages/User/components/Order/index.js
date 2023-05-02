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
        <h2>Danh sách đơn hàng</h2>
        <Table hover responsive>
            <thead>
                <tr>
                    <th className="h2" style={{ fontWeight: 'bold' }}>Mã đơn hàng</th>
                    <th className="h2" style={{ fontWeight: 'bold' }}>Tên đơn hàng</th>
                    <th className="h2" style={{ fontWeight: 'bold' }}>Người nhận</th>
                    <th className="h2" style={{ fontWeight: 'bold' }}>Số lượng</th>
                    <th className="h2" style={{ fontWeight: 'bold' }}>Trọng lượng(kg)</th>
                    <th className="h2" style={{ fontWeight: 'bold' }}>Giá trị</th>
                    <th className="h2" style={{ fontWeight: 'bold' }}>Số tiền thu hộ</th>
                    <th className="h2" style={{ fontWeight: 'bold' }}>Thời gian dự kiến</th>
                    <th className="h2" style={{ fontWeight: 'bold' }}>Tổng tiền</th>
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
        <div>
            <nav aria-label=" navigation pull-right ">
                <ul class="pagination">
                    <li class="page-item"><a class="page-link" href="#">&lt;</a></li>
                    <li class="page-item"><a class="page-link" href="#">1</a></li>
                    <li class="page-item"><a class="page-link" href="#">2</a></li>
                    <li class="page-item"><a class="page-link" href="#">3</a></li>
                    <li class="page-item"><a class="page-link" href="#">&gt;</a></li>
                </ul>
            </nav>
        </div>
    </>);
}

export default Order;