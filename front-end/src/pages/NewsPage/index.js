/**
 * Trang chủ
 */
import React from "react";

// reactstrap components
import {
    Button,
    Card,
    CardTitle,
    Container,
    Row,
    Col,
    CardBody,
    CardFooter,
    Pagination,
    PaginationItem,
    PaginationLink,
} from "reactstrap";

// core components
import ScrollTransparentNavbar from "components/Navbars/ScrollTransparentNavbar";
import 'assets/css/pages/home-page/index.css'
import IntroHeader from "components/Headers/IntroduceHeader";
import NewsHeader from "components/Headers/NewsHeader";
import CustomFooter from "components/CustomFooter";
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
function NewsPage() {
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
            <ScrollTransparentNavbar isOpenNavbar={true} />
            <div className="wrapper">
                {/* <NewsHeader /> */}
                <div className="section">
                    <Container>
                        <Row>
                            <Col md={12} >
                                <div class="card card-background" style={{
                                    backgroundImage:
                                        "url(" + require("assets/img/tin-tuc/cm-banner1.jpg") + ")"
                                }}>
                                    <div class="card-body mx-0 " style={{ maxWidth: '100%' }}>
                                        <div style={{ position: 'absolute', bottom: 20 }}>
                                            <div class="card-title text-left m-0" >
                                                <h3 className="mb-0 font-weight-bold" >CHÀO MỪNG NGÀY GIẢI PHÓNG MIỀN NAM 30/4 VÀ QUỐC TẾ LAO ĐỘNG 1/5</h3>
                                            </div>

                                            <div class="card-footer text-left">
                                                <div class="stats">
                                                    <span>
                                                        <i class="now-ui-icons media-2_sound-wave"></i>MienBacTransport.com
                                                    </span>

                                                    <span>
                                                        <i class="now-ui-icons tech_watch-time"></i> 20 phút trước
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                    <Container>
                        <h3 className="text-left font-weight-bold"> <i class="now-ui-icons location_bookmark"></i> Tin tức</h3>
                        <Card className="card-raised card-plain card-blog ">
                            <Row>
                                <Col md="4">
                                    <div className="card-image">
                                        <img
                                            alt="..."
                                            className="img img-raised rounded"
                                            src={require("assets/img/tin-tuc/cm-banner2.jpg")}
                                        ></img>
                                    </div>
                                </Col>
                                <Col md="8">
                                    <CardTitle tag="h3">
                                        <a href="#pablo" onClick={(e) => e.preventDefault()}>
                                            ĐỔI ĐIỂM LIỀN TAY, “RINH” NGAY VOUCHER
                                        </a>
                                    </CardTitle>
                                    <p className="card-description">
                                        MienBac Transport hân hoan gửi đến Quý khách hàng hàng ngàn voucher giảm giá cước vận chuyển có giá trị lên đến 25.000 đồng. Nhanh tay đổi điểm thưởng để.
                                        {" "}
                                        <a href="#pablo" onClick={(e) => e.preventDefault()}>
                                            Xem thêm
                                        </a>
                                    </p>
                                    <div className="description">
                                        <span>10:25 01/05/2023</span>
                                    </div>
                                </Col>
                            </Row>
                        </Card>
                        <Card className="card-raised card-plain card-blog ">
                            <Row>
                                <Col md="4">
                                    <div className="card-image">
                                        <img
                                            alt="..."
                                            className="img img-raised rounded"
                                            src={require("assets/img/tin-tuc/cm-banner3.jpg")}
                                        ></img>
                                    </div>
                                </Col>
                                <Col md="8">
                                    <CardTitle tag="h3">
                                        <a href="#pablo" onClick={(e) => e.preventDefault()}>
                                            NHẬN NGAY QUÀ TẶNG HẤP DẪN KHI GỬI HÀNG MIENBAC TRANSPORT TẠI HỆ THỐNG CỬA HÀNG...
                                        </a>
                                    </CardTitle>
                                    <p className="card-description">
                                        NHẬN NGAY QUÀ TẶNG HẤP DẪN KHI GỬI HÀNG MIENBAC TRANSPORT TẠI HỆ THỐNG CỬA HÀNG TRỰC TIẾP  Với mong muốn luôn mang đến cho Qúy khách hàng những trải nghiệm hài lòng.
                                        {" "}
                                        <a href="#pablo" onClick={(e) => e.preventDefault()}>
                                            Xem thêm
                                        </a>
                                    </p>
                                    <div className="description">
                                        <span>10:25 01/05/2023</span>
                                    </div>
                                </Col>
                            </Row>
                        </Card>
                        <Card className="card-raised card-plain card-blog ">
                            <Row>
                                <Col md="4">
                                    <div className="card-image">
                                        <img
                                            alt="..."
                                            className="img img-raised rounded"
                                            src={require("assets/img/examples/card-blog10.jpg")}
                                        ></img>
                                    </div>
                                </Col>
                                <Col md="8">
                                    <CardTitle tag="h3">
                                        <a href="#pablo" onClick={(e) => e.preventDefault()}>
                                            NHẬN NGAY VOUCHER GIẢM CƯỚC VẬN CHUYỂN KHI ĐĂNG KÝ SỬ DỤNG DỊCH VỤ HOÀN CƯỚC
                                        </a>
                                    </CardTitle>
                                    <p className="card-description">
                                        HOÀN CƯỚC NHƯ Ý – THỎA CHÍ LÊN ĐƠN NHẬN NGAY VOUCHER GIẢM 10K CƯỚC VẬN CHUYỂN KHI ĐĂNG KÝ SỬ DỤNG DỊCH VỤ HOÀN CƯỚC MienBac Transport tặng ngay...
                                        {" "}
                                        <a href="#pablo" onClick={(e) => e.preventDefault()}>
                                            Xem thêm
                                        </a>
                                    </p>
                                    <div className="description">
                                        <span>10:25 01/05/2023</span>
                                    </div>
                                </Col>
                            </Row>
                        </Card>
                        <div className="d-flex justify-content-center">
                            <Pagination>
                                <PaginationItem>
                                    <PaginationLink
                                        aria-label="Previous"
                                        href="#pablo"
                                        onClick={(e) => e.preventDefault()}
                                    >
                                        <span aria-hidden={true}>
                                            <i
                                                aria-hidden={true}
                                                className="fa fa-angle-double-left"
                                            ></i>
                                        </span>
                                    </PaginationLink>
                                </PaginationItem>
                                <PaginationItem>
                                    <PaginationLink
                                        href="#pablo"
                                        onClick={(e) => e.preventDefault()}
                                    >
                                        1
                                    </PaginationLink>
                                </PaginationItem>
                                <PaginationItem className="active">
                                    <PaginationLink
                                        href="#pablo"
                                        onClick={(e) => e.preventDefault()}
                                    >
                                        2
                                    </PaginationLink>
                                </PaginationItem>
                                <PaginationItem>
                                    <PaginationLink
                                        href="#pablo"
                                        onClick={(e) => e.preventDefault()}
                                    >
                                        3
                                    </PaginationLink>
                                </PaginationItem>
                                <PaginationItem>
                                    <PaginationLink
                                        aria-label="Next"
                                        href="#pablo"
                                        onClick={(e) => e.preventDefault()}
                                    >
                                        <span aria-hidden={true}>
                                            <i
                                                aria-hidden={true}
                                                className="fa fa-angle-double-right"
                                            ></i>
                                        </span>
                                    </PaginationLink>
                                </PaginationItem>
                            </Pagination>
                        </div>
                    </Container>
                </div>
            </div>
            <CustomFooter />
        </>
    );
}

export default NewsPage;