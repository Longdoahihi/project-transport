import UserSVG from 'assets/svgs/user1.svg'
import InputCustom from 'components/InputCustom';
import SelectCustom from 'components/SelectCustom';
import { Button, Card, CardBody, Col, Row } from 'reactstrap';
function CostEstimate() {
    return (
        <>
            <Row>
                <Col xs={6}>
                    <Row>
                        <Col md={12}>
                            <h5 className='text-icon' >
                                <img src={UserSVG} alt='...' />
                                <span>Người gửi</span>
                            </h5>
                        </Col>
                        <Col md={12}>
                            <SelectCustom
                                options={[]}
                                value={null}
                                label={"Tỉnh / Thành phố"}
                                type=""
                                placeholder="Tỉnh / Thành phố..."
                            />
                        </Col>
                        <Col md={12}>
                            <SelectCustom
                                options={[]}
                                value={null}
                                label={"Quận / Huyện"}
                                type=""
                                placeholder="Quận / Huyện..."
                            />
                        </Col>
                    </Row>

                </Col>
                <Col xs={6}>
                    <Row>
                        <Col md={12}>
                            <h5 className='text-icon' >
                                <img src={UserSVG} alt='...' />
                                <span>Người nhận</span>
                            </h5>
                        </Col>
                        <Col md={12}>
                            <SelectCustom
                                options={[]}
                                value={null}
                                label={"Tỉnh / Thành phố"}
                                type=""
                                placeholder="Tỉnh / Thành phố..."
                            />
                        </Col>
                        <Col md={12}>
                            <SelectCustom
                                options={[]}
                                value={null}
                                label={"Quận / Huyện"}
                                type=""
                                placeholder="Quận / Huyện..."
                            />
                        </Col>
                    </Row>
                </Col>
            </Row>
            <hr  />
            <Row>
                <Col md={12}>
                    <h5 className='text-icon' >
                        <img src={UserSVG} alt='...' />
                        <span>Thông tin bưu phẩm</span>
                    </h5>
                </Col>
                <Col md={6}>
                    <InputCustom
                        title={"Trọng lượng (kg)"}
                        row={false}
                        type="number"
                        placeholder="Nhập trọng lượng (kg)..."
                    />
                </Col>
                <Col md={6}>
                    <InputCustom
                        title={"Số tiền thu hộ (VND)"}
                        row={false}
                        type="number"
                        placeholder="Nhập số tiền..."
                    />
                </Col>
            </Row>
            <Row>
                <Col md={12}>
                    <Button 
                        color='success'
                        title='Tra cứu'
                        className='btn-lg text-icon'
                    >
                        <i class="now-ui-icons ui-1_zoom-bold"></i>
                        <span>Tra cứu</span>
                    </Button>
                </Col>
            </Row>
            <Row>
                <Col md={6}>
                    <table border={1} width={"100%"} className='padding-cell-table' >
                        <thead>
                            <tr>
                                <td>Tên dịch vụ</td>
                                <td>Tiền cước</td>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Chuyển phát tiết kiệm</td>
                                <td>120.000 VNĐ</td>
                            </tr>
                        </tbody>
                    </table>
                </Col>
            </Row>
        </>
    );
}

export default CostEstimate;