import InputCustom from "components/InputCustom";
import SelectCustom from "components/SelectCustom";
import { Col, Row } from "reactstrap";

function PostOffice() {
    return (<>
        <div className="mt-4">
            <Row>
                <Col md={12}>
                    <SelectCustom
                        type="search"
                        placeholder={"Nhập để tìm kiếm đại chỉ kho hàng..."}
                    />
                </Col>
                <Col md={12} className="mt-3">
                    <div className="mb-2 pb-2" style={{
                        borderBottom: '1px solid #ccc'
                    }}>
                        <h5 className="font-weight-bold mb-1"> Bưu cục Mỗ Lao - HNI</h5>
                        <div> <i className="now-ui-icons location_pin mr-1"></i>SỐ 12LK6B C17 BỘ CÔNG AN, PHƯỜNG MỖ LAO</div>
                        <div> <i className="now-ui-icons tech_mobile mr-1"></i>Phone: 84334373639</div>
                        <div className="text-uppercase" > <i className="now-ui-icons shopping_tag-content mr-1"></i>Q.HÀ ĐÔNG,TP.HÀ NỘI</div>
                    </div>
                    <div className="mb-2 pb-2" style={{
                        borderBottom: '1px solid #ccc'
                    }}>
                        <h5 className="font-weight-bold mb-1"> Bưu cục đào tạo Hà Nội</h5>
                        <div> <i className="now-ui-icons location_pin mr-1"></i>Số 12 BT4 - 1 Vinaconext 3 Trung Văn</div>
                        <div> <i className="now-ui-icons tech_mobile mr-1"></i>Phone: 84981222268</div>
                        <div className="text-uppercase" > <i className="now-ui-icons shopping_tag-content mr-1"></i>Q.NAM TỪ LIÊM,TP.HÀ NỘI</div>
                    </div>
                    <div className="mb-2 pb-2" style={{
                        borderBottom: '1px solid #ccc'
                    }}>
                        <h5 className="font-weight-bold mb-1"> Bưu cục Phú La - HNI</h5>
                        <div> <i className="now-ui-icons location_pin mr-1"></i>101 Lacasta Văn Phú, Hà Đông Duyệt Hoàn Gọi 02463261999 , CSKH Ngân 0986316836</div>
                        <div> <i className="now-ui-icons tech_mobile mr-1"></i>Phone: 84981003232</div>
                        <div className="text-uppercase" > <i className="now-ui-icons shopping_tag-content mr-1"></i>Q.HÀ ĐÔNG,TP.HÀ NỘI</div>
                    </div>
                    <div className="mb-2 pb-2" style={{
                        borderBottom: '1px solid #ccc'
                    }}>
                        <h5 className="font-weight-bold mb-1"> Bưu cục Văn Quán - HNI</h5>
                        <div> <i className="now-ui-icons location_pin mr-1"></i>SỐ 190 ĐƯỜNG CHIẾN THẮNG,PHƯỜNG VĂN QUÁN,QUẬN HÀ ĐÔNG,THÀNH PHỐ HÀ NỘI</div>
                        <div> <i className="now-ui-icons tech_mobile mr-1"></i>Phone: 84972066102</div>
                        <div className="text-uppercase" > <i className="now-ui-icons shopping_tag-content mr-1"></i>Q.HÀ ĐÔNG,TP.HÀ NỘI</div>
                    </div>
                    <div className="mb-2 pb-2" style={{
                        borderBottom: '1px solid #ccc'
                    }}>
                        <h5 className="font-weight-bold mb-1"> Bưu cục Phúc La - HNI</h5>
                        <div> <i className="now-ui-icons location_pin mr-1"></i>Số LK-VT4, Dự Án Tổ Hợp Chung Cư Bemes Sau CT6 Xa La</div>
                        <div> <i className="now-ui-icons tech_mobile mr-1"></i>Phone: 19008095</div>
                        <div className="text-uppercase" > <i className="now-ui-icons shopping_tag-content mr-1"></i>Q.HÀ ĐÔNG,TP.HÀ NỘI</div>
                    </div>
                    <div className="mb-2 pb-2" style={{
                        borderBottom: '1px solid #ccc'
                    }}>
                        <h5 className="font-weight-bold mb-1"> Bưu cục đào tạo Hà Nội</h5>
                        <div> <i className="now-ui-icons location_pin mr-1"></i>Số 12 BT4 - 1 Vinaconext 3 Trung Văn</div>
                        <div> <i className="now-ui-icons tech_mobile mr-1"></i>Phone: 84981222268</div>
                        <div className="text-uppercase" > <i className="now-ui-icons shopping_tag-content mr-1"></i>Q.NAM TỪ LIÊM,TP.HÀ NỘI</div>
                    </div>
                </Col>
            </Row>
        </div>
    </>);
}

export default PostOffice;