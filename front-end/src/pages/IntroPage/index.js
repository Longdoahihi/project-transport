/**
 * Trang chủ
 */
import React from "react";

// reactstrap components
import {
    Button,
    Card,
    CardTitle,
    Input,
    Media,
    Container,
    Row,
    Col,
    UncontrolledTooltip,
    Nav,
    NavItem,
    NavLink,
    TabContent,
    TabPane,
    CustomInput,
    CardBody,
    CardFooter,
    Carousel,
    CarouselIndicators,
    CarouselItem
} from "reactstrap";
import Select from 'react-select'

// core components
import ScrollTransparentNavbar from "components/Navbars/ScrollTransparentNavbar";
import 'assets/css/pages/home-page/index.css'
import IntroHeader from "components/Headers/IntroduceHeader";
import CustomFooter from "components/CustomFooter";

function IntroPage() {
    return (
        <>
            <ScrollTransparentNavbar />
            <div className="wrapper">
                <IntroHeader />
                <div className="section">
                    <Container>
                        <Card className="card-no-shadow">
                            <CardTitle className="text-center">
                                <h4 className="font-weight-bold mb-0 " >LẤY KHÁCH HÀNG LÀM TRUNG TÂM</h4>
                                <h5>KINH DOANH BẰNG SỰ TỬ TẾ</h5>
                            </CardTitle>
                            <CardBody>
                                <Row>
                                    <Col xs={12} md={5}>
                                        <img
                                            src={require('assets/img/gioi-thieu/gt5.png')}
                                            alt="Hình ảnh"
                                        />
                                    </Col>
                                    <Col xs={12} md={7} className="text-center d-flex flex-column justify-content-center">
                                        <p className="d-flex align-items-center h3 mt-3">
                                            <i class="now-ui-icons design_app mr-3"></i>
                                            Tư duy quản trị tử tế.
                                        </p>
                                        <p className="d-flex align-items-center h3">
                                            <i class="now-ui-icons design_app mr-3"></i>
                                            Sản phẩm và dịch vụ tử tế
                                        </p>
                                        <p className="d-flex align-items-center h3">
                                            <i class="now-ui-icons design_app mr-3"></i>
                                            Nhân viên tử tế.
                                        </p>
                                    </Col>
                                </Row>
                            </CardBody>
                        </Card>
                    </Container>
                </div>
                <div className="section">
                    <Container>
                        <Card className="card-no-shadow">
                            <CardTitle className="text-center">
                                <h4 className="font-weight-bold mb-0 text-uppercase" >Giới thiệu</h4>
                            </CardTitle>
                            <CardBody>
                                <Row>
                                    <Col xs={12} md={4} className="">
                                        <Card className="card-blog">
                                            <div className="card-image">
                                                <a href="#pablo" onClick={(e) => e.preventDefault()}>
                                                    <img
                                                        alt="..."
                                                        className="img rounded"
                                                        src={require("assets/img/gioi-thieu/gt1.jpg")}
                                                    ></img>
                                                </a>
                                            </div>
                                            <CardBody>
                                                <CardTitle tag="h5" className="font-weight-bold text-center text-uppercase  ">
                                                    MienBac Transport là gì?
                                                </CardTitle>
                                                <p className="h5" >
                                                    MienBac Transport – Tổng Công ty Cổ phần Bưu Chính MienBac Transport là đơn vị thành viên của Tập đoàn Công nghiệp Viễn thông Quân đội MienBac Transport, với 24 năm xây dựng và phát triển cùng nhiều danh hiệu,.....
                                                </p>
                                                <CardFooter>
                                                    <Button className="btn-sm float-right" >
                                                        Xem thêm
                                                    </Button>
                                                </CardFooter>
                                            </CardBody>
                                        </Card>
                                    </Col>
                                    <Col xs={12} md={4} className="">
                                        <Card className="card-blog">
                                            <div className="card-image">
                                                <a href="#pablo" onClick={(e) => e.preventDefault()}>
                                                    <img
                                                        alt="..."
                                                        className="img rounded"
                                                        src={require("assets/img/gioi-thieu/gt1.jpg")}
                                                    ></img>
                                                </a>
                                            </div>
                                            <CardBody>
                                                <CardTitle tag="h5" className="font-weight-bold text-center text-uppercase  ">
                                                    TẦM NHÌN
                                                </CardTitle>
                                                <p className="h5" >
                                                    Trở thành Công ty Logistics công nghệ cao, nằm trong nhóm 5 doanh nghiệp hàng đầu tại Việt Nam vào năm 2025.Chiến lược của MienBac Transport vẫn là phát triển kinh doanh đa dịch vụ, đưa dịch vụ đến gần khách hàng đối với cả thị trường trong nước và quốc tế, đồng thời luôn khẳng định là một doanh nghiệp hoàn thành tốt nghĩa vụ đối với cộng đồng......
                                                </p>
                                                <CardFooter>
                                                    <Button className="btn-sm float-right" >
                                                        Xem thêm
                                                    </Button>
                                                </CardFooter>
                                            </CardBody>
                                        </Card>
                                    </Col>
                                    <Col xs={12} md={4} className="">
                                        <Card className="card-blog">
                                            <div className="card-image">
                                                <a href="#pablo" onClick={(e) => e.preventDefault()}>
                                                    <img
                                                        alt="..."
                                                        className="img rounded"
                                                        src={require("assets/img/gioi-thieu/gt1.jpg")}
                                                    ></img>
                                                </a>
                                            </div>
                                            <CardBody>
                                                <CardTitle tag="h5" className="font-weight-bold text-center text-uppercase  ">
                                                    SỨ MỆNH MIENBAC TRANSPORT
                                                </CardTitle>
                                                <p className="h5" >
                                                    Không ngừng sáng tạo cách thức cung cấp dịch vụ, nâng cao tiêu chuẩn chất lượng, khai thác tối đa nguồn lực dựa trên nền tảng số đảm bảo cung cấp đầy đủ dịch vụ Logistics với hiệu quả cao nhất cho toàn xã hộiSong song với việc không ngừng nâng cao chất lượng đội ngũ nhân lực, mở rộng mạng lưới. Trong suốt những năm qua, MienBac Transport luôn kiên trì với triết lý phục vụ khách hàng của mình:
                                                    1. LẤY KHÁCH HÀNG LÀM TRUNG TÂM:
                                                    2. KINH DOANH BẰNG SỰ TỬ TẾ:+ Tư duy quản trị tử tế.+ Sản phẩm và dị......
                                                </p>
                                                <CardFooter>
                                                    <Button className="btn-sm float-right" >
                                                        Xem thêm
                                                    </Button>
                                                </CardFooter>
                                            </CardBody>
                                        </Card>
                                    </Col>
                                </Row>
                            </CardBody>
                        </Card>
                    </Container>
                </div>
                <Container>
                    <Card className="card-no-shadow">
                        <CardTitle className="text-center">
                            <h4 className="font-weight-bold mb-0 text-uppercase" >Hình ảnh về công ty</h4>
                            <h5>TỔNG CÔNG TY CỔ PHẦN BƯU CHÍNH MIENBAC TRANSPORT</h5>
                        </CardTitle>
                        <CardBody>
                            <Row>
                                <Col md={3}>
                                    <img
                                        alt="..."
                                        className="rounded-circle"
                                        src={require("assets/img/gioi-thieu/gt2.jpg")}
                                        style={{
                                            width: 200,
                                            height: 200
                                        }}
                                    ></img>
                                </Col>
                                <Col md={3}>
                                    <img
                                        alt="..."
                                        className="rounded-circle"
                                        src={require("assets/img/gioi-thieu/gt3.jpg")}
                                        style={{
                                            width: 200,
                                            height: 200
                                        }}
                                    ></img>
                                </Col>
                                <Col md={3}>
                                    <img
                                        alt="..."
                                        className="rounded-circle"
                                        src={require("assets/img/gioi-thieu/gt4.jpg")}
                                        style={{
                                            width: 200,
                                            height: 200
                                        }}
                                    ></img>
                                </Col>
                                <Col md={3}>
                                    <img
                                        alt="..."
                                        className="rounded-circle"
                                        src={require("assets/img/gioi-thieu/gt2.jpg")}
                                        style={{
                                            width: 200,
                                            height: 200
                                        }}
                                    ></img>
                                </Col>
                            </Row>
                            <p className="text-center mt-3">MienBac Transport là một đơn vị thành viên của Tập đoàn Công nghiệp Viễn thông Quân đội MienBac Transport chuyên kinh doanh các dịch vụ Chuyển phát nhanh trong nước và quốc tế; Dịch vụ Logistics; Dịch vụ Fulfillment; Dịch vụ Thương mại;...</p>
                        </CardBody>
                    </Card>
                </Container>
            </div>
            <CustomFooter />
        </>
    );
}

export default IntroPage;