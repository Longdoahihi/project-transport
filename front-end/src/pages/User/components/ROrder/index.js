import React from "react";
import LabelValueCustom from "components/LabelValue";
import { Col, Row } from "reactstrap";
import 'assets/css/pages/rorder/index.css'
import SelectCustom from "components/SelectCustom";
import TimeLine from "components/TimeLine";
function ROrder() {
    return (
        <>
            <Row className="mt-3">
                <Col xs={6}>
                    <SelectCustom
                        placeholder="Nhập để tìm kiếm..."
                        type="search"
                    />
                </Col>
            </Row>
            <Row className="mt-4">
                <Col ms={6} style={{
                    borderRight: '1px solid #eee'
                }} >
                    <Row>
                        <Col md={6} className="custom-input-search" >
                            <LabelValueCustom
                                label={"Mã đơn hàng"}
                                value={"DH001"}
                            />
                            <LabelValueCustom
                                label={"Khối lượng"}
                                value={"DH001"}
                            />
                            <LabelValueCustom
                                label={"Ngày gửi"}
                                value={"12/01/2023"}
                            />
                        </Col>
                        <Col md={6} className="custom-input-search" >
                            <LabelValueCustom
                                label={"Mã đơn hàng"}
                                value={"DH001"}
                            />
                            <LabelValueCustom
                                label={"Dịch vụ"}
                                value={"Chuyển phát nhanh"}
                            />
                            <LabelValueCustom
                                label={"Ngày nhận"}
                                value={"23/03/2023"}
                            />
                        </Col>
                        <Col md={12}>
                            <LabelValueCustom
                                label={"Người gửi"}
                                value={"Đoàn văn A - Việt Yên - Bắc Giang"}
                            />
                            <LabelValueCustom
                                label={"Người nhận"}
                                value={"Đoàn văn B - Hoài Đức - Hà Nội"}
                            />
                            <LabelValueCustom
                                label={"Trạng thái"}
                                value={"Đang chuyển"}
                            />
                        </Col>
                    </Row>
                </Col>
                <Col md={6}>
                    <TimeLine />
                </Col>
            </Row>
        </>);
}

export default React.memo(ROrder);