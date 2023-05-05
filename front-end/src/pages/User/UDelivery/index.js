import InputCustom from "components/InputCustom";
import SelectCustom from "components/SelectCustom";
import { Col, Row } from "reactstrap";

function UDelivery() {
    return (<>
        <Row>
            <Col md={6}>
            <h4 className="text-center">Danh sách đơn hàng</h4>
            </Col>
            <Col md={6}  >
                <h4 className="text-center">Cập nhật trạng thái giao hàng</h4>
                <div className="row" style={{ borderLeft: '1px solid #eee' }}>
                    <div className="col-md-12">
                        <InputCustom
                            title="Mã đơn hàng"
                            type="text"
                            placeholder=""
                            labelClassName=""
                            wrapInputClassName=""
                            disabled
                            row={false}
                        />
                        <InputCustom
                            title="Tên đơn hàng"
                            type="text"
                            placeholder=""
                            labelClassName=""
                            wrapInputClassName=""
                            disabled
                            row={false}
                        />
                        <InputCustom
                            title="Địa chỉ hiện tại"
                            type="text"
                            placeholder=""
                            labelClassName=""
                            wrapInputClassName=""
                            disabled
                            row={false}
                        />
                        <SelectCustom
                            options={[]}
                            label="Trạng thái đơn hàng"
                            value
                            type=""
                            placeholder="Chọn trạng thái"
                        />
                        <div className="row">
                            <div className="col text-center">
                                <button className="btn btn-success ">Cập nhật</button>
                            </div>
                        </div>
                    </div>
                </div>
            </Col>
        </Row>
    </>);
}

export default UDelivery;