import { Col, Row } from "reactstrap";
import 'assets/css/pages/timeline.css'
function TimeLine({ data }) {

    // if (Array.isArray(data) || !data)
    //     return <></>
    return (
        <Row style={{ padding: '8px 16px' }}>
            <Col xs={12}>
                <ul className="pl-0">
                    <li className="py-2 active"  style={{borderBottom: '1px solid rgba(1,1,1,0.1)'}}>
                        <div className="h6">Đang xử lý</div>
                        <div className=""> Đang lấy hàng</div>
                        <div className="">14:27, Thứ sáu 23-07-2021</div>
                    </li>
                    <li className="py-2" style={{borderBottom: '1px solid rgba(1,1,1,0.1)'}}>
                        <div className="h6">Đang xử lý</div>
                        <div className=""> Đang lấy hàng</div>
                        <div className="">14:27, Thứ sáu 23-07-2021</div>
                    </li>
                </ul>
            </Col>
        </Row>);
}

export default TimeLine;