import InputCustom from "components/InputCustom";
import LabelValueCustom from "components/LabelValue";
import SelectCustom from "components/SelectCustom";
import { Button, Col, Row } from "reactstrap";

function UserInfo() {
    return (
        <div className="mt-3">
            <Row>
                <Col md={6}>
                    <InputCustom
                        title="Tên khách hàng"
                        type="text"
                        isRequired={true}
                        placeholder="Nhập tên khách hàng..."
                        row={false}
                    />
                    <InputCustom
                        title="Email"
                        type="text"
                        isRequired={true}
                        placeholder="Nhập email khách hàng..."
                        row={false}
                    />
                    <InputCustom
                        title="Số điện thoại"
                        type="tel"
                        isRequired={true}
                        placeholder="Nhập số điện thoại..."
                        row={false}
                    />
                    <InputCustom
                        title="Ngày sinh"
                        type="date"
                        isRequired={true}
                        placeholder="Nhập ngày sinh..."
                        row={false}
                    />
                    <InputCustom
                        title="Chúng minh thư"
                        type="date"
                        isRequired={true}
                        placeholder="Nhập số CCCD..."
                        row={false}
                    />
                </Col>
                <Col md={6}>
                    <InputCustom
                        title="Địa chỉ thường trú/ Địa chỉ xuất hóa đơn"
                        type="text"
                        isRequired={true}
                        placeholder="Nhập địa chỉ..."
                        row={false}
                    />
                    <SelectCustom
                        label="Tỉnh/ Thành phố"
                        type="text"
                        isRequired={true}
                        placeholder="Chọn tỉnh địa chỉ..."
                        row={false}
                    />
                    <SelectCustom
                        label="Quận/ Huyện"
                        type="text"
                        isRequired={true}
                        placeholder="Chọn tỉnh địa chỉ..."
                        row={false}
                    />
                    <InputCustom
                        title="Số nhà, Đường/ Ngõ"
                        type="text"
                        isRequired={true}
                        placeholder="Nhập số nhà, tên đường..."
                        row={false}
                    />
                    <Button
                        color="success"
                        className="btn-lg"
                    >
                        <div className="d-flex align-items-center" >
                            <span className="mr-2">Lưu lại</span>
                            <i class="now-ui-icons arrows-1_cloud-upload-94"></i>
                        </div>
                    </Button>
                </Col>
            </Row>
        </div>);
}

export default UserInfo;