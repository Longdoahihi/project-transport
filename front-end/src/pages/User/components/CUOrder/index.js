import InputCustom from "components/InputCustom";
import SelectCustom from "components/SelectCustom";
import { Button, Card, CardBody, Col, Row, Table } from "reactstrap";
import { CardTitle } from "reactstrap/es";

function CUOrder() {
    return (
        <Card className="card-no-shadow mt-3">
            <Row>
                <Col md={6} >
                    <Card className="card-rounded card-no-shadow">
                        <CardTitle className="px-4">
                            <h5 className="mb-0" ><i className="now-ui-icons users_single-02" style={{ lineHeight: "16px" }} ></i> Người gửi</h5>
                        </CardTitle>
                        <CardBody className="mt-0 pt-0">
                            <SelectCustom />
                        </CardBody>
                    </Card>
                </Col>
                <Col md={6}>
                    <Card className="card-rounded card-no-shadow">
                        <CardTitle className="px-4">
                            <h5 className="mb-0" ><i className="now-ui-icons users_single-02" style={{ lineHeight: "16px" }} ></i> Người nhận</h5>
                        </CardTitle>
                        <CardBody className="mt-0 pt-0">
                            <SelectCustom />
                        </CardBody>
                    </Card>
                </Col>
            </Row>
            <Row>
                <Col md={12}>
                    <Card className="card-rounded card-no-shadow">
                        <CardTitle className="px-4">
                            <h5 className="mb-0" ><i className="now-ui-icons users_single-02" style={{ lineHeight: "16px" }} ></i> Thông tin hàng hóa</h5>
                        </CardTitle>
                        <CardBody className="mt-0 pt-0">
                            <Row>
                                <Col md={4}>
                                    <InputCustom
                                        title="Mã đơn hàng"
                                        type="text"
                                        isRequired={true}
                                        labelWidth={120}
                                        placeholder="Nhập mã đơn hàng tự tạo"
                                        labelClassName=""
                                        wrapInputClassName=""
                                    />
                                </Col>
                                <Col md={8}>
                                    <InputCustom
                                        title="Tên đơn hàng"
                                        type="text"
                                        isRequired={true}
                                        labelWidth={140}
                                        placeholder="Nhập tên đơn hàng"
                                        labelClassName=""
                                        wrapInputClassName=""
                                    />
                                </Col>
                            </Row>
                            <Row>
                                <Col md={4}>
                                    <InputCustom
                                        title="Số lượng"
                                        type="number"
                                        isRequired={true}
                                        labelWidth={120}
                                        placeholder="Nhập số lượng"
                                        labelClassName=""
                                        wrapInputClassName=""
                                    />
                                </Col>
                                <Col md={4}>
                                    <InputCustom
                                        title="Trọng lượng (kg)"
                                        type="number"
                                        isRequired={true}
                                        labelWidth={140}
                                        placeholder="Nhập trọng lượng"
                                        labelClassName=""
                                        wrapInputClassName=""
                                    />
                                </Col>
                                <Col md={4}>
                                    <InputCustom
                                        title="Giá trị (VND)"
                                        type="number"
                                        isRequired={true}
                                        labelWidth={120}
                                        placeholder="Nhập giá trị thành tiền"
                                        labelClassName=""
                                        wrapInputClassName=""
                                    />
                                </Col>
                            </Row>
                        </CardBody>
                    </Card>
                </Col>
            </Row>
            <Row>
                <Col md={4}>
                    <Card className="card-rounded card-no-shadow">
                        <CardBody className="mt-0 pt-0">
                            <CardTitle>
                                <h5 className="mb-0">Chọn dịch vụ</h5>
                            </CardTitle>
                            <CardBody>

                            </CardBody>
                        </CardBody>
                    </Card>
                </Col>
                <Col md={4}>
                    <Card className="card-rounded card-no-shadow">
                        <CardBody className="mt-0 pt-0">
                            <CardTitle>
                                <h5 className="mb-0">Yêu cầu giao hàng</h5>
                            </CardTitle>
                            <CardBody>

                            </CardBody>
                        </CardBody>
                    </Card>
                </Col>
                <Col md={4}>
                    <Card className="card-rounded card-no-shadow">
                        <CardBody className="mt-0 pt-0">
                            <CardTitle>
                                <h5 className="mb-0">Yêu cầu lấy hàng</h5>
                            </CardTitle>
                            <CardBody>

                            </CardBody>
                        </CardBody>
                    </Card>
                </Col>
            </Row>
            <Row>
                <Col md={6}>
                    <label>Tiền trả người gửi: </label> <br />
                    <label>Tiền thu hộ: </label> <br />
                    <label>Thời gian dự kiến: </label> <br />
                    <label>Tổng tiền: </label> <br />
                </Col>
                <Col md={6} >
                    <div className="d-flex justify-content-end  ">
                        <button
                            className="btn btn-success btn-lg"
                        ><i class="now-ui-icons ui-1_send"></i> Gửi ngay</button>
                        <button
                            class="btn-info btn-lg btn"
                        ><i class="now-ui-icons arrows-1_refresh-69"></i> Làm mới</button>
                    </div>
                </Col>
            </Row>
        </Card>
    )

    // return (
    //     <Row>
    //         <Col md={12}>
    //             <h5 className="my-4">Danh sách đơn hàng</h5>
    //         </Col>
    //         <Col md={12}>
    //             <Card className="card-plain ml-auto mr-auto">
    //                 <CardBody className="pt-0">
    //                     <table class="table table table-bordered table-hover pt-0 ">
    //                         <thead>
    //                             <tr>
    //                                 <th class="text-center">#</th>
    //                                 <th>Name</th>
    //                                 <th>Job Position</th>
    //                                 <th>Since</th>
    //                                 <th class="text-right">Salary</th>
    //                                 <th class="text-right">Actions</th>
    //                             </tr>
    //                         </thead>
    //                         <tbody>
    //                             <tr>
    //                                 <td class="text-center">1</td>
    //                                 <td>Andrew Mike</td>
    //                                 <td>Develop</td>
    //                                 <td>2013</td>
    //                                 <td class="text-right">&euro; 99,225</td>
    //                                 <td class="td-actions text-right">
    //                                     <button type="button" rel="tooltip" class="btn btn-info">
    //                                         <i class="now-ui-icons users_single-02"></i>
    //                                     </button>
    //                                     <button type="button" rel="tooltip" class="btn btn-success">
    //                                         <i class="now-ui-icons ui-2_settings-90"></i>
    //                                     </button>
    //                                     <button type="button" rel="tooltip" class="btn btn-danger">
    //                                         <i class="now-ui-icons ui-1_simple-remove"></i>
    //                                     </button>
    //                                 </td>
    //                             </tr>
    //                             <tr>
    //                                 <td class="text-center">2</td>
    //                                 <td>John Doe</td>
    //                                 <td>Design</td>
    //                                 <td>2012</td>
    //                                 <td class="text-right">&euro; 89,241</td>
    //                                 <td class="td-actions text-right">
    //                                     <button type="button" rel="tooltip" class="btn btn-info">
    //                                         <i class="now-ui-icons users_single-02"></i>
    //                                     </button>
    //                                     <button type="button" rel="tooltip" class="btn btn-success">
    //                                         <i class="now-ui-icons ui-2_settings-90"></i>
    //                                     </button>
    //                                     <button type="button" rel="tooltip" class="btn btn-danger">
    //                                         <i class="now-ui-icons ui-1_simple-remove"></i>
    //                                     </button>
    //                                 </td>
    //                             </tr>
    //                             <tr>
    //                                 <td class="text-center">3</td>
    //                                 <td>Alex Mike</td>
    //                                 <td>Design</td>
    //                                 <td>2010</td>
    //                                 <td class="text-right">&euro; 92,144</td>
    //                                 <td class="td-actions text-right">
    //                                     <button type="button" rel="tooltip" class="btn btn-info">
    //                                         <i class="now-ui-icons users_single-02"></i>
    //                                     </button>
    //                                     <button type="button" rel="tooltip" class="btn btn-success">
    //                                         <i class="now-ui-icons ui-2_settings-90"></i>
    //                                     </button>
    //                                     <button type="button" rel="tooltip" class="btn btn-danger">
    //                                         <i class="now-ui-icons ui-1_simple-remove"></i>
    //                                     </button>
    //                                 </td>
    //                             </tr>
    //                         </tbody>
    //                     </table>
    //                 </CardBody>
    //             </Card>
    //         </Col>
    //     </Row>
    // );
}

export default CUOrder;