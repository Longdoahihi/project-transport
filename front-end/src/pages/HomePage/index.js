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
    CardFooter
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
function HomePage() {
    const [horizontalTabs, setHorizontalTabs] = React.useState("1");
    const [verticalTabs, setVerticalTabs] = React.useState("1");
    const [iconHorizontalTabs, setIconHorizontalTabs] = React.useState("1");
    const [iconVerticalTabs, setIconVerticalTabs] = React.useState("1");
    const [justIconHorizontalTabs, setJustIconHorizontalTabs] = React.useState(
        "1"
    );
    const [justIconVerticalTabs, setJustIconVerticalTabs] = React.useState("1");
    return (
        <>
            <ScrollTransparentNavbar />
            <div className="wrapper">
                <HomeHeader />
                <div className="section">
                    <Container  >
                        <Card>
                            <Nav
                                className="nav-pills-info nav-pills-icons d-flex"
                                pills
                                role="tablist"
                            >
                                <NavItem className="px-0 flex-fill">
                                    <NavLink
                                        className={classNames([{
                                            "active": iconHorizontalTabs === "1"
                                        }, "rounded-0", "text-center", "mr-0"])}
                                        href="#pablo"
                                        onClick={(e) => {
                                            e.preventDefault();
                                            setIconHorizontalTabs("1");
                                        }}
                                    >
                                        Ước tính cước phí
                                    </NavLink>
                                </NavItem>
                                <NavItem className="px-0 flex-fill">
                                    <NavLink
                                        className={classNames([{
                                            "active": iconHorizontalTabs === "2"
                                        }, "rounded-0", "text-center", "mr-0"])}
                                        href="#pablo"
                                        onClick={(e) => {
                                            e.preventDefault();
                                            setIconHorizontalTabs("2");
                                        }}
                                    >
                                        Tìm kiếm bưu cục
                                    </NavLink>
                                </NavItem>
                            </Nav>
                            <TabContent
                                className="tab-space"
                                activeTab={"iconHorizontalTabs" + iconHorizontalTabs}
                            >
                                <TabPane tabId="iconHorizontalTabs1" >
                                    <Container>
                                        <Row>
                                            <Col md={6}>
                                                <form>
                                                    <div className="form-group row">
                                                        <label htmlFor="staticEmail require" className="col-md-3 col-form-label">Gửi từ</label>
                                                        <div className=" col-md-9">
                                                            <Select
                                                                className="react-select react-select-info mt-2 rounded-0"
                                                                onChange={(value) => { }}
                                                                classNamePrefix="react-select"
                                                                placeholder="Single Select"
                                                                value={{ label: "", value: "" }}
                                                                name=""
                                                                onInputChange={(e) => { console.log(e) }}
                                                                options={[
                                                                    {
                                                                        value: "",
                                                                        label: "Single Option",
                                                                        isDisabled: true,
                                                                    },
                                                                    { value: "2", label: "Foobar" },
                                                                    { value: "3", label: "Is great" },
                                                                ]}
                                                            ></Select>
                                                        </div>
                                                    </div>
                                                    <div className="form-group row">
                                                        <label htmlFor="staticEmail require" className="col-md-3 col-form-label">Quận, huyện</label>
                                                        <div className=" col-md-9">
                                                            <Select
                                                                className="react-select react-select-info mt-2 rounded-0"
                                                                onChange={(value) => { }}
                                                                classNamePrefix="react-select"
                                                                placeholder="Single Select"
                                                                value={{ label: "", value: "" }}
                                                                name=""
                                                                onInputChange={(e) => { console.log(e) }}
                                                                options={[
                                                                    {
                                                                        value: "",
                                                                        label: "Single Option",
                                                                        isDisabled: true,
                                                                    },
                                                                    { value: "2", label: "Foobar" },
                                                                    { value: "3", label: "Is great" },
                                                                ]}
                                                            ></Select>
                                                        </div>
                                                    </div>
                                                    <div className="form-group row">
                                                        <label htmlFor="staticEmail require" className="col-md-3 col-form-label">Giao đến</label>
                                                        <div className=" col-md-9">
                                                            <Select
                                                                className="react-select react-select-info mt-2 rounded-0"
                                                                onChange={(value) => { }}
                                                                classNamePrefix="react-select"
                                                                placeholder="Single Select"
                                                                value={{ label: "", value: "" }}
                                                                name=""
                                                                onInputChange={(e) => { console.log(e) }}
                                                                options={[
                                                                    {
                                                                        value: "",
                                                                        label: "Single Option",
                                                                        isDisabled: true,
                                                                    },
                                                                    { value: "2", label: "Foobar" },
                                                                    { value: "3", label: "Is great" },
                                                                ]}
                                                            ></Select>
                                                        </div>
                                                    </div>
                                                    <div className="form-group row">
                                                        <label htmlFor="staticEmail require" className="col-md-3 col-form-label">Quận huyện</label>
                                                        <div className=" col-md-9">
                                                            <Select
                                                                className="react-select react-select-info mt-2 rounded-0"
                                                                onChange={(value) => { }}
                                                                classNamePrefix="react-select"
                                                                placeholder="Single Select"
                                                                value={{ label: "", value: "" }}
                                                                name=""
                                                                onInputChange={(e) => { console.log(e) }}
                                                                options={[
                                                                    {
                                                                        value: "",
                                                                        label: "Single Option",
                                                                        isDisabled: true,
                                                                    },
                                                                    { value: "2", label: "Foobar" },
                                                                    { value: "3", label: "Is great" },
                                                                ]}
                                                            ></Select>
                                                        </div>
                                                    </div>
                                                    <InputCustom
                                                        title="Trọng lượng"
                                                        type="number"
                                                        wrapInputClassName={"col-md-9"}
                                                        labelClassName={"col-md-3"}
                                                    />
                                                    <InputCustom
                                                        title="Số tiền thu hộ"
                                                        type="number"
                                                        wrapInputClassName={"col-md-9 mt-2"}
                                                        labelClassName={"col-md-3"}
                                                    />
                                                    <Button type="submit" style={{
                                                        backgroundColor: 'green',
                                                        color: 'white',
                                                        width: 200
                                                    }} >Tra cứu</Button>
                                                </form>
                                            </Col>
                                            <Col md={6}>
                                                <img
                                                    src={require("assets/img/pages/3696913.jpg")}
                                                    alt="..."
                                                />
                                            </Col>
                                        </Row>
                                    </Container>
                                </TabPane>
                                <TabPane tabId="iconHorizontalTabs2" className="mt-2">
                                    <Container >
                                        <Row className="mb-3">
                                            <Col md={12}>
                                                <SelectCustom

                                                />
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col md={12} style={{
                                                maxHeight: 500,
                                                overflowY: 'scroll'
                                            }}>
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
                                                    <h5 className="font-weight-bold mb-1"> Bưu cục đào tạo Hà Nội</h5>
                                                    <div> <i className="now-ui-icons location_pin mr-1"></i>Số 12 BT4 - 1 Vinaconext 3 Trung Văn</div>
                                                    <div> <i className="now-ui-icons tech_mobile mr-1"></i>Phone: 84981222268</div>
                                                    <div className="text-uppercase" > <i className="now-ui-icons shopping_tag-content mr-1"></i>Q.NAM TỪ LIÊM,TP.HÀ NỘI</div>
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
                                                    <h5 className="font-weight-bold mb-1"> Bưu cục đào tạo Hà Nội</h5>
                                                    <div> <i className="now-ui-icons location_pin mr-1"></i>Số 12 BT4 - 1 Vinaconext 3 Trung Văn</div>
                                                    <div> <i className="now-ui-icons tech_mobile mr-1"></i>Phone: 84981222268</div>
                                                    <div className="text-uppercase" > <i className="now-ui-icons shopping_tag-content mr-1"></i>Q.NAM TỪ LIÊM,TP.HÀ NỘI</div>
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
                                                    <h5 className="font-weight-bold mb-1"> Bưu cục đào tạo Hà Nội</h5>
                                                    <div> <i className="now-ui-icons location_pin mr-1"></i>Số 12 BT4 - 1 Vinaconext 3 Trung Văn</div>
                                                    <div> <i className="now-ui-icons tech_mobile mr-1"></i>Phone: 84981222268</div>
                                                    <div className="text-uppercase" > <i className="now-ui-icons shopping_tag-content mr-1"></i>Q.NAM TỪ LIÊM,TP.HÀ NỘI</div>
                                                </div>
                                            </Col>
                                        </Row>
                                    </Container>
                                </TabPane>
                            </TabContent>
                        </Card>
                    </Container>
                    <Container className="mt-5" >
                        <Row className="justify-content-center">
                            <Col md={9} >
                                <CardTitle tag="h3" className="font-weight-bold text-center">Tin tức mới cập nhật</CardTitle>
                                <Card className="card-profile card-plain mt-2">
                                    <Row>
                                        <Col md="4">
                                            <div className="card-image">
                                                <a href="#pablo" onClick={(e) => e.preventDefault()}>
                                                    <img
                                                        alt="..."
                                                        className="img rounded"
                                                        src={require("assets/img/pages/n1.jpg")}
                                                    ></img>
                                                </a>
                                            </div>
                                        </Col>
                                        <Col md="7">
                                            <CardBody className="text-left py-0">
                                                <CardTitle tag="h5" className="font-weight-bold">Viettel Post đảm bảo cung cấp dịch vụ chuyển phát trong dịp lễ Giỗ tổ Hùng Vương.</CardTitle>
                                                <span>
                                                    <i className="now-ui-icons tech_watch-time mr-1"></i>
                                                    12/02/2021
                                                </span>
                                                <p className="mt-2 card-description text-line-clamp-2">
                                                    Dịch vụ hoàn cước là gói dịch vụ Viettel Post cung cấp nhằm bồi thường cho khách hàng các tổn thất về cước phí vận chuyển phát sinh mà khách hàng phải chịu từ việc đơn hàng giao không thành công đến người nhận.
                                                </p>
                                            </CardBody>
                                        </Col>
                                    </Row>
                                </Card>
                                <Card className="card-profile card-plain mt-2">
                                    <Row>
                                        <Col md="4">
                                            <div className="card-image">
                                                <a href="#pablo" onClick={(e) => e.preventDefault()}>
                                                    <img
                                                        alt="..."
                                                        className="img rounded"
                                                        src={require("assets/img/pages/n1.jpg")}
                                                    ></img>
                                                </a>
                                            </div>
                                        </Col>
                                        <Col md="7">
                                            <CardBody className="text-left py-0">
                                                <CardTitle tag="h5" className="font-weight-bold">Viettel Post đảm bảo cung cấp dịch vụ chuyển phát trong dịp lễ Giỗ tổ Hùng Vương.</CardTitle>
                                                <span>
                                                    <i className="now-ui-icons tech_watch-time mr-1"></i>
                                                    12/02/2021
                                                </span>
                                                <p className="mt-2 card-description text-line-clamp-2">
                                                    Dịch vụ hoàn cước là gói dịch vụ Viettel Post cung cấp nhằm bồi thường cho khách hàng các tổn thất về cước phí vận chuyển phát sinh mà khách hàng phải chịu từ việc đơn hàng giao không thành công đến người nhận.
                                                </p>
                                            </CardBody>
                                        </Col>
                                    </Row>
                                </Card>
                                <Card className="card-profile card-plain mt-2">
                                    <Row>
                                        <Col md="4">
                                            <div className="card-image">
                                                <a href="#pablo" onClick={(e) => e.preventDefault()}>
                                                    <img
                                                        alt="..."
                                                        className="img rounded"
                                                        src={require("assets/img/pages/n1.jpg")}
                                                    ></img>
                                                </a>
                                            </div>
                                        </Col>
                                        <Col md="7">
                                            <CardBody className="text-left py-0">
                                                <CardTitle tag="h5" className="font-weight-bold">Viettel Post đảm bảo cung cấp dịch vụ chuyển phát trong dịp lễ Giỗ tổ Hùng Vương.</CardTitle>
                                                <span>
                                                    <i className="now-ui-icons tech_watch-time mr-1"></i>
                                                    12/02/2021
                                                </span>
                                                <p className="mt-2 card-description text-line-clamp-2">
                                                    Dịch vụ hoàn cước là gói dịch vụ Viettel Post cung cấp nhằm bồi thường cho khách hàng các tổn thất về cước phí vận chuyển phát sinh mà khách hàng phải chịu từ việc đơn hàng giao không thành công đến người nhận.
                                                </p>
                                            </CardBody>
                                        </Col>
                                    </Row>
                                </Card>
                            </Col>
                            <Col xs={12} className="d-flex justify-content-center">
                                <Button className="btn-lg">Xem thêm <i className="now-ui-icons arrows-1_minimal-right"></i></Button>
                            </Col>
                        </Row>
                    </Container>
                </div>
                <FooterBlack />
            </div>
        </>
    );
}

export default HomePage;