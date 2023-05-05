import InputCustom from "components/InputCustom";
import SelectCustom from "components/SelectCustom";
import {  Card, CardBody, Col, FormGroup, Input, Label, Row } from "reactstrap";
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
                                <h5 className="mb-0">Tiền thu hộ</h5>
                            </CardTitle>
                            <div >
                                <InputCustom
                                    title="Số tiền thu hộ"
                                    type="text"
                                    isRequired={true}
                                    labelWidth={120}
                                    placeholder="Nhập số tiền thu hộ"
                                    labelClassName=""
                                    wrapInputClassName=""
                                />
                                <InputCustom
                                    title="Ghi chú"
                                    type="textarea"
                                    row
                                    isRequired={true}
                                    placeholder="Nhập ghi chú"
                                    labelClassName=""
                                    wrapInputClassName=""
                                />
                            </div>
                        </CardBody>
                    </Card>
                </Col>
                <Col md={4}>
                    <Card className="card-rounded card-no-shadow">
                        <CardBody className="mt-0 pt-0">
                            <CardTitle>
                                <h5 className="mb-0">Yêu cầu giao hàng</h5>
                            </CardTitle>
                            <div>
                                <FormGroup check defaultValue={false}>
                                    <Label check>
                                        <Input style={{
                                            position: 'relative', top: 2
                                        }} defaultChecked type="radio" name="delevery" value={false} />
                                        <span className="pl-2">Không cho phép kiểm hàng</span>
                                    </Label>
                                </FormGroup>
                                <FormGroup check>
                                    <Label check>
                                        <Input type="radio" name="delevery" style={{
                                            position: 'relative', top: 2
                                        }} value={true} />
                                        <span className="pl-2"> Cho phép kiểm hàng</span>
                                    </Label>
                                </FormGroup>
                            </div>
                        </CardBody>
                    </Card>
                </Col>
                <Col md={4}>
                    <Card className="card-rounded card-no-shadow">
                        <CardBody className="mt-0 pt-0">
                            <CardTitle>
                                <h5 className="mb-0">Yêu cầu lấy hàng</h5>
                            </CardTitle>
                            <div>
                            <div>
                                <FormGroup check defaultValue={false}>
                                    <Label check>
                                        <Input defaultChecked style={{
                                            position: 'relative', top: 2
                                        }} type="radio" name="request" />
                                        <span className="pl-2">Đến nhà lấy hàng</span>
                                    </Label>
                                </FormGroup>
                                <FormGroup check>
                                    <Label check>
                                        <Input type="radio" name="request" style={{
                                            position: 'relative', top: 2
                                        }} />
                                        <span className="pl-2"> Lưu tại bưu cục</span>
                                    </Label>
                                </FormGroup>
                            </div>
                            </div>
                        </CardBody>
                    </Card>
                </Col>
            </Row>
            <Row>
                <Col md={6}>  
                    <label>Thời gian dự kiến: </label> <br />
                    <label>Tổng cước: </label> <br />
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
}

export default CUOrder;