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
import FooterBlack from "components/Footers/FooterBlack.js";
import HomeHeader from "components/Headers/HomeHeader";
import ScrollTransparentNavbar from "components/Navbars/ScrollTransparentNavbar";
import 'assets/css/pages/home-page/index.css'
import classNames from "classnames";
import InputCustom from "components/InputCustom";
import SelectCustom from "components/SelectCustom";
import IntroHeader from "components/Headers/IntroduceHeader";
import Testimonials from "views/presentation-sections/Testimonials";
import CarouselSection from "views/index-sections/Carousel";
const items = [
    {
        src: require("assets/img/bg1.jpg"),
        altText: "",
        caption: "Nature, United States"
    },
    {
        src: require("assets/img/bg3.jpg"),
        altText: "",
        caption: "Somewhere Beyond, United States"
    },
    {
        src: require("assets/img/bg4.jpg"),
        altText: "",
        caption: "Yellowstone National Park, United States"
    }]
function IntroPage() {
    const [activeIndex, setActiveIndex] = React.useState(0);
    const [animating, setAnimating] = React.useState(false);
    const onExiting = () => {
        setAnimating(true);
    };
    const onExited = () => {
        setAnimating(false);
    };
    const next = () => {
        if (animating) return;
        const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
        setActiveIndex(nextIndex);
    };
    const previous = () => {
        if (animating) return;
        const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
        setActiveIndex(nextIndex);
    };
    const goToIndex = (newIndex) => {
        if (animating) return;
        setActiveIndex(newIndex);
    };
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
                                            src={require('assets/img/bg17.jpg')}
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
                                                        src={require("assets/img/card-blog2.jpg")}
                                                    ></img>
                                                </a>
                                            </div>
                                            <CardBody>
                                                <CardTitle tag="h5" className="font-weight-bold text-center text-uppercase  ">
                                                    Viettel Post là gì?
                                                </CardTitle>
                                                <p className="h5" >
                                                    Viettel Post – Tổng Công ty Cổ phần Bưu Chính Viettel là đơn vị thành viên của Tập đoàn Công nghiệp Viễn thông Quân đội Viettel, với 24 năm xây dựng và phát triển cùng nhiều danh hiệu,.....
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
                                                        src={require("assets/img/card-blog2.jpg")}
                                                    ></img>
                                                </a>
                                            </div>
                                            <CardBody>
                                                <CardTitle tag="h5" className="font-weight-bold text-center text-uppercase  ">
                                                    TẦM NHÌN
                                                </CardTitle>
                                                <p className="h5" >
                                                    Trở thành Công ty Logistics công nghệ cao, nằm trong nhóm 5 doanh nghiệp hàng đầu tại Việt Nam vào năm 2025.Chiến lược của Viettel Post vẫn là phát triển kinh doanh đa dịch vụ, đưa dịch vụ đến gần khách hàng đối với cả thị trường trong nước và quốc tế, đồng thời luôn khẳng định là một doanh nghiệp hoàn thành tốt nghĩa vụ đối với cộng đồng......
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
                                                        src={require("assets/img/card-blog2.jpg")}
                                                    ></img>
                                                </a>
                                            </div>
                                            <CardBody>
                                                <CardTitle tag="h5" className="font-weight-bold text-center text-uppercase  ">
                                                    SỨ MỆNH VIETTELPOST
                                                </CardTitle>
                                                <p className="h5" >
                                                    Không ngừng sáng tạo cách thức cung cấp dịch vụ, nâng cao tiêu chuẩn chất lượng, khai thác tối đa nguồn lực dựa trên nền tảng số đảm bảo cung cấp đầy đủ dịch vụ Logistics với hiệu quả cao nhất cho toàn xã hộiSong song với việc không ngừng nâng cao chất lượng đội ngũ nhân lực, mở rộng mạng lưới. Trong suốt những năm qua, Viettel Post luôn kiên trì với triết lý phục vụ khách hàng của mình:
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
                    <Container className="container-fluid">
                        <Row className="justify-content-center">
                            <Col lg="8" md="12">
                                <Carousel
                                    activeIndex={activeIndex}
                                    next={next}
                                    previous={previous}
                                >
                                    <CarouselIndicators
                                        items={items}
                                        activeIndex={activeIndex}
                                        onClickHandler={goToIndex}
                                    />
                                    {items.map((item) => {
                                        return (
                                            <CarouselItem
                                                onExiting={onExiting}
                                                onExited={onExited}
                                                key={item.src}
                                            >
                                                <img
                                                    src={item.src}
                                                    alt={item.altText}
                                                    className="d-block"
                                                />
                                                <div className="carousel-caption d-none d-md-block">
                                                    <h5>{item.caption}</h5>
                                                </div>
                                            </CarouselItem>
                                        );
                                    })}
                                    <a
                                        className="carousel-control-prev"
                                        data-slide="prev"
                                        href="#pablo"
                                        onClick={(e) => {
                                            e.preventDefault();
                                            previous();
                                        }}
                                        role="button"
                                    >
                                        <i className="now-ui-icons arrows-1_minimal-left"></i>
                                    </a>
                                    <a
                                        className="carousel-control-next"
                                        data-slide="next"
                                        href="#pablo"
                                        onClick={(e) => {
                                            e.preventDefault();
                                            next();
                                        }}
                                        role="button"
                                    >
                                        <i className="now-ui-icons arrows-1_minimal-right"></i>
                                    </a>
                                </Carousel>
                            </Col>
                        </Row>
                    </Container>
                <FooterBlack />
            </div>
        </>
    );
}

export default IntroPage;