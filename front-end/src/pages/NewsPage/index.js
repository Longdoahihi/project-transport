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
                                        "url(" + require("assets/img/bg1.jpg") + ")"
                                }}>
                                    <div class="card-body mx-0 " style={{ maxWidth: '100%' }}>
                                        <div style={{ position: 'absolute', bottom: 20 }}>
                                            <div class="card-title text-left m-0" >
                                                <h3 className="mb-0 font-weight-bold" >How wild Animals live in the National Forest</h3>
                                            </div>

                                            <div class="card-footer text-left">
                                                <div class="stats">
                                                    <span>
                                                        <i class="now-ui-icons media-2_sound-wave"></i>SPACE.com
                                                    </span>

                                                    <span>
                                                        <i class="now-ui-icons tech_watch-time"></i> 20min ago
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
                                            src={require("assets/img/examples/card-blog10.jpg")}
                                        ></img>
                                    </div>
                                </Col>
                                <Col md="8">
                                    <CardTitle tag="h3">
                                        <a href="#pablo" onClick={(e) => e.preventDefault()}>
                                            KẾT QUẢ TRÚNG THƯỞNG GAME BĂNG CHUYỀN KỲ DIỆU
                                        </a>
                                    </CardTitle>
                                    <p className="card-description">
                                        Kết quả trúng thưởng game băng chuyền kỳ diệu Viettel Post xin công bố danh sách thuê bao khách hàng trúng các giải thưởng cao nhất của game tương tác...{" "}
                                        <a href="#pablo" onClick={(e) => e.preventDefault()}>
                                            Read More
                                        </a>
                                    </p>
                                    <div className="author">
                                        <img
                                            alt="..."
                                            className="avatar img-raised"
                                            src={require("assets/img/olivia.jpg")}
                                        ></img>
                                        <span>Katie Roof</span>
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
                                            KẾT QUẢ TRÚNG THƯỞNG GAME BĂNG CHUYỀN KỲ DIỆU
                                        </a>
                                    </CardTitle>
                                    <p className="card-description">
                                        Kết quả trúng thưởng game băng chuyền kỳ diệu Viettel Post xin công bố danh sách thuê bao khách hàng trúng các giải thưởng cao nhất của game tương tác...{" "}
                                        <a href="#pablo" onClick={(e) => e.preventDefault()}>
                                            Read More
                                        </a>
                                    </p>
                                    <div className="author">
                                        <img
                                            alt="..."
                                            className="avatar img-raised"
                                            src={require("assets/img/olivia.jpg")}
                                        ></img>
                                        <span>Katie Roof</span>
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
                                            KẾT QUẢ TRÚNG THƯỞNG GAME BĂNG CHUYỀN KỲ DIỆU
                                        </a>
                                    </CardTitle>
                                    <p className="card-description">
                                        Kết quả trúng thưởng game băng chuyền kỳ diệu Viettel Post xin công bố danh sách thuê bao khách hàng trúng các giải thưởng cao nhất của game tương tác...{" "}
                                        <a href="#pablo" onClick={(e) => e.preventDefault()}>
                                            Read More
                                        </a>
                                    </p>
                                    <div className="author">
                                        <img
                                            alt="..."
                                            className="avatar img-raised"
                                            src={require("assets/img/olivia.jpg")}
                                        ></img>
                                        <span>Katie Roof</span>
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
        </>
    );
}

export default NewsPage;