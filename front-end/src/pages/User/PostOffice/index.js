import InputCustom from "components/InputCustom";
import SelectCustom from "components/SelectCustom";
import { Col, Row } from "reactstrap";

function PostOffice() {
    return ( <>
    <div className="mt-4">
        <Row>
            <Col md={12}>
                <SelectCustom 
                    type="search"
                    placeholder={"Nhập để tìm kiếm đại chỉ kho hàng..."}
                />
            </Col>
        </Row>
    </div>
    </> );
}

export default PostOffice;