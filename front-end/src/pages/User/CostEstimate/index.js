import UserSVG from 'assets/svgs/user1.svg'
import InputCustom from 'components/InputCustom';
import SelectCustom from 'components/SelectCustom';
import { Button, Card, CardBody, Col, Row } from 'reactstrap';
function CostEstimate() {
    return (
        <>
            <h1>Uớc tính cước phí</h1>
            <Row>
                <Col xs={6}>
                    <Row>
                        <Col md={12}>
                            <h4 className='head1 text-icon' >
                                <img src={UserSVG} alt='...' />
                                <span>Người gửi</span>
                            </h4>
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
                            <h4 className='head1 text-icon' >
                                <img src={UserSVG} alt='...' />
                                <span>Người nhận</span>
                            </h4>
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
            <Row>
                <Col md={12}>
                    <h4 className='head1 text-icon' >
                        <img src={UserSVG} alt='...' />
                        <span>Thông tin bưu phẩm</span>
                    </h4>
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
                        className='btn-lg'
                    >
                        Tra cứu
                    </Button>
                </Col>
            </Row>
            <Row>
                <Col md={12}>
                    <Card>
                        <CardBody>
                            <h5>Dịch vụ của chúng tôi</h5>
                        </CardBody>
                    </Card>
                </Col>
            </Row>
        </>
    );
}

export default CostEstimate;