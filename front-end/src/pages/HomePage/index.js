/**
 * Trang chủ
 */
import React, { useState } from "react";

// reactstrap components
import {
    Button,
    Card,
    CardTitle,
    Container,
    Row,
    Col,
    Nav,
    NavItem,
    NavLink,
    TabContent,
    TabPane,
    CardBody,
    ModalHeader,
    ModalBody,
    ModalFooter,
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
import CustomFooter from "components/CustomFooter";
import CustomModal from "components/CustomModal";

function HomePage() {
    const [iconHorizontalTabs, setIconHorizontalTabs] = React.useState("1");
    const [isOpenModal, setIsOpenModal] = useState(false);
    //input value
    const [provinceFromValue, setProvinceFromValue] = useState({label: "",value: ""});
    const [provinceToValue, setProvinceToValue] = useState(null);
    const [districFromValue, setDistrictFromValue] = useState(null);
    const [districToValue, setDistrictToValue] = useState(null);
    const [weight, setWeight] = useState("");
    const [collectionMoney, setCollectionMoney] = useState("");
    return (
        <>
            <CustomModal
                isOpen={isOpenModal}
                toggle={() => { setIsOpenModal(!isOpenModal) }}
                component={(
                    <>
                        <ModalHeader>
                            <h5 class="modal-title text-uppercase ">THÔNG TIN TRẠNG THÁI</h5>
                            <button type="button" class="close">
                                <i class="now-ui-icons ui-1_simple-remove"></i>
                            </button>
                        </ModalHeader>
                        <ModalBody>
                            <Row>
                                <Col md={4} className="pr-4" style={{
                                    borderRight: '2px solid #eee'
                                }}>
                                    <div className="my-1" >
                                        <span>Mã phiếu gửi:</span>
                                        <span className="pull-right font-weight-bold">17144578067</span>
                                    </div>
                                    <div className="my-1">
                                        <span>Địa chỉ gửi:</span>
                                        <span className="pull-right font-weight-bold">T.Thái Nguyên - H.Võ Nhai</span>
                                    </div>
                                    <div className="my-1">
                                        <span>Địa chỉ người nhận:</span>
                                        <span className="pull-right font-weight-bold">TP.Cần Thơ - H.Phong</span>
                                    </div>
                                </Col>
                                <Col md={4} className="pr-4" style={{
                                    borderRight: '2px solid #eee'
                                }}>
                                    <div className="my-1">
                                        <span>Khối lượng(Gram):</span>
                                        <span className="pull-right font-weight-bold">1500</span>
                                    </div>
                                    <div className="my-1">
                                        <span>Dịch vụ:</span>
                                        <span className="pull-right font-weight-bold">Chuyển phát tiết kiệm hàng hóa</span>
                                    </div>
                                    <div className="my-1">
                                        <span>Trạng thái:</span>
                                        <span className="pull-right font-weight-bold">Giao thành công</span>
                                    </div>
                                </Col>
                                <Col md={4} className="pr-4">
                                    <div className="my-1">
                                        <span>Ngày tạo:</span>
                                        <span className="pull-right font-weight-bold">20/12/2022</span>
                                    </div>
                                    <div className="my-1">
                                        <span>Ngày nhận hàng:</span>
                                        <span className="pull-right font-weight-bold">20/12/2022</span>
                                    </div>
                                    <div className="my-1">
                                        <span>Ngày giao hàng dự kiến:</span>
                                        <span className="pull-right font-weight-bold">24/12/2022</span>
                                    </div>
                                </Col>
                            </Row>
                            <Row style={{
                                maxHeight: '300px',
                                overflowY: 'scroll',
                                marginTop: 16
                            }} >
                                <Col md={12} className="d-flex">
                                    <div
                                        style={{
                                            marginRight: 16,
                                            width: "3px",
                                            backgroundColor: '#eee',
                                            height: '100%',
                                            position: "relative"
                                        }}
                                    >
                                        <input type="radio"
                                            style={{
                                                position: 'absolute',
                                                top: 0,
                                                right: "-170%"
                                            }}
                                            checked={true}
                                            className="timelineActive"
                                            value={"timelineActive"}
                                        />
                                    </div>
                                    <div>
                                        <h6 style={{ color: "green" }} >Giao hàng thành công</h6>
                                        <div >Nhận tại Trung tâm khai thác - Q.Bình Thủy - TP.Cần Thơ</div>
                                        <div >23/12/2022 07:13:04</div>
                                    </div>
                                </Col>
                                <Col md={12} className="d-flex">
                                    <div
                                        style={{
                                            marginRight: 16,
                                            width: "3px",
                                            backgroundColor: '#eee',
                                            height: '100%',
                                            position: "relative"
                                        }}
                                    >
                                        <input type="radio"
                                            style={{
                                                position: 'absolute',
                                                top: 16,
                                                right: "-170%"
                                            }}
                                            checked={true}
                                            className="timeline"
                                        />
                                    </div>
                                    <div className="pt-3">
                                        <h6 style={{ color: "green" }} >Giao hàng</h6>
                                        <div >Bưu cục Võ Nhai - TNN - T.Thái Nguyên đến Đội vận chuyển</div>
                                        <div >20/12/2022 16:59:11</div>
                                    </div>
                                </Col>
                                <Col md={12} className="d-flex">
                                    <div
                                        style={{
                                            marginRight: 16,
                                            width: "3px",
                                            backgroundColor: '#eee',
                                            height: '100%',
                                            position: "relative"
                                        }}
                                    >
                                        <input type="radio"
                                            style={{
                                                position: 'absolute',
                                                top: 16,
                                                right: "-170%"
                                            }}
                                            checked={true}
                                            className="timeline"
                                        />
                                    </div>
                                    <div className="pt-3">
                                        <h6 style={{ color: "green" }} >Giao hàng thành công</h6>
                                        <div >Nhận tại Trung tâm khai thác - Q.Bình Thủy - TP.Cần Thơ</div>
                                        <div >23/12/2022 07:13:04</div>
                                    </div>
                                </Col>
                                <Col md={12} className="d-flex">
                                    <div
                                        style={{
                                            marginRight: 16,
                                            width: "3px",
                                            backgroundColor: '#eee',
                                            height: '100%',
                                            position: "relative"
                                        }}
                                    >
                                        <input type="radio"
                                            style={{
                                                position: 'absolute',
                                                top: 16,
                                                right: "-170%"
                                            }}
                                            checked={true}
                                            className="timeline"
                                        />
                                    </div>
                                    <div className="pt-3">
                                        <h6 style={{ color: "green" }} >Giao hàng thành công</h6>
                                        <div >Nhận tại Trung tâm khai thác - Q.Bình Thủy - TP.Cần Thơ</div>
                                        <div >23/12/2022 07:13:04</div>
                                    </div>
                                </Col>
                                <Col md={12} className="d-flex">
                                    <div
                                        style={{
                                            marginRight: 16,
                                            width: "3px",
                                            backgroundColor: '#eee',
                                            height: '100%',
                                            position: "relative"
                                        }}
                                    >
                                        <input type="radio"
                                            style={{
                                                position: 'absolute',
                                                top: 16,
                                                right: "-170%"
                                            }}
                                            checked={true}
                                            className="timeline"
                                        />
                                    </div>
                                    <div className="pt-3">
                                        <h6 style={{ color: "green" }} >Giao hàng thành công</h6>
                                        <div >Nhận tại Trung tâm khai thác - Q.Bình Thủy - TP.Cần Thơ</div>
                                        <div >23/12/2022 07:13:04</div>
                                    </div>
                                </Col>
                            </Row>
                        </ModalBody>
                        <ModalFooter></ModalFooter>
                    </>
                )}
            />
            <ScrollTransparentNavbar />
            <div className="wrapper">
                <HomeHeader
                    setIsOpenModal={setIsOpenModal}
                />
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
                                className="tab-space pb-3"
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
                                                                classNamePrefix="react-select"
                                                                value={provinceFromValue}
                                                                placeholder={"Chọn tỉnh/thành phố"}
                                                                onInputChange={(e) => { console.log(e) }}
                                                                onChange={(e) => {
                                                                    setProvinceFromValue(e);
                                                                }}
                                                                options={[
                                                                    {
                                                                        value: "0",
                                                                        label: "TP.Hà Nội",
                                                                    },
                                                                ]}
                                                            ></Select>
                                                        </div>
                                                    </div>
                                                    <div className="form-group row">
                                                        <label htmlFor="staticEmail require" className="col-md-3 col-form-label">Quận, huyện</label>
                                                        <div className=" col-md-9">
                                                            <Select
                                                                className="react-select react-select-info mt-2 rounded-0"
                                                                classNamePrefix="react-select"
                                                                onInputChange={(e) => { console.log(e) }}
                                                                placeholder={"Chọn quận/ huyện"}
                                                                value={districFromValue}
                                                                onChange={(e) => {
                                                                    setDistrictFromValue(e);
                                                                }}
                                                                options={[
                                                                    { value: "2", label: "Quận Hai Bà Trưng" },
                                                                    { value: "3", label: "Quận Nam Từ Liêm" },
                                                                ]}
                                                            ></Select>
                                                        </div>
                                                    </div>
                                                    <div className="form-group row">
                                                        <label htmlFor="staticEmail require" className="col-md-3 col-form-label">Giao đến</label>
                                                        <div className=" col-md-9">
                                                            <Select
                                                                className="react-select react-select-info mt-2 rounded-0"
                                                                classNamePrefix="react-select"
                                                                placeholder={"Chọn tỉnh/thành phố"}
                                                                value={provinceToValue}
                                                                onChange={(e) => {
                                                                    setProvinceToValue(e);
                                                                }}
                                                                onInputChange={(e) => { console.log(e) }}
                                                                options={[
                                                                    { value: "2", label: "Ninh Bình" },
                                                                ]}
                                                            ></Select>
                                                        </div>
                                                    </div>
                                                    <div className="form-group row">
                                                        <label htmlFor="staticEmail require" className="col-md-3 col-form-label">Quận huyện</label>
                                                        <div className=" col-md-9">
                                                            <Select
                                                                className="react-select react-select-info mt-2 rounded-0"
                                                                classNamePrefix="react-select"
                                                                value={districToValue}
                                                                placeholder={"Chọn quận/huyện"}
                                                                onChange={(e) => {
                                                                    setDistrictToValue(e);
                                                                }}
                                                                onInputChange={(e) => { console.log(e) }}
                                                                options={[
                                                                    { value: "2", label: "Yên Khánh" },
                                                                ]}
                                                            ></Select>
                                                        </div>
                                                    </div>
                                                    <InputCustom
                                                        title="Trọng lượng (Gram)"
                                                        type="number"
                                                        placeholder="Nhập trọng lượng(Gram) = Dài * Rộng * Cao / 5000"
                                                        wrapInputClassName={"col-md-9"}
                                                        labelClassName={"col-md-3"}
                                                    />
                                                    <InputCustom
                                                        title="Số tiền thu hộ (VND)"
                                                        type="number"
                                                        placeholder={"Nhập số tiền thu hộ"}
                                                        wrapInputClassName={"col-md-9 mt-2"}
                                                        labelClassName={"col-md-3"}
                                                    />
                                                    {/* <div>
                                                        <span style={{
                                                            fontStyle: 'italic',
                                                            color: 'red'
                                                        }} >*Lưu ý: Hiện tại chúng tôi chỉ cung cấp dịch vụ chuyển phát tiết kiệm</span>
                                                        <h5 style={{
                                                            fontWeight: 'bold',
                                                            color: 'red'
                                                        }}>Số tiền cước phí: 42000 (VND) </h5>
                                                    </div> */}
                                                    <Button type="submit" style={{
                                                        backgroundColor: 'green',
                                                        color: 'white',
                                                        width: 250,
                                                        display: 'flex',
                                                        justifyContent: "center"
                                                    }} className="text-icon btn-lg" >
                                                        <i class="now-ui-icons ui-1_zoom-bold"></i>
                                                        <h6 className="mb-0">Tra cứu</h6>
                                                    </Button>
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
                                                    type={"search"}
                                                    value={{
                                                        label: 'Hà Nội',
                                                        value: '0'
                                                    }}
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
                                                    <h5 className="font-weight-bold mb-1"> Bưu cục Mỗ Lao - HNI</h5>
                                                    <div> <i className="now-ui-icons location_pin mr-1"></i>SỐ 12LK6B C17 BỘ CÔNG AN, PHƯỜNG MỖ LAO</div>
                                                    <div> <i className="now-ui-icons tech_mobile mr-1"></i>Phone: 84334373639</div>
                                                    <div className="text-uppercase" > <i className="now-ui-icons shopping_tag-content mr-1"></i>Q.HÀ ĐÔNG,TP.HÀ NỘI</div>
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
                                                    <h5 className="font-weight-bold mb-1"> Bưu cục đào tạo Hà Nội</h5>
                                                    <div> <i className="now-ui-icons location_pin mr-1"></i>Số 12 BT4 - 1 Vinaconext 3 Trung Văn</div>
                                                    <div> <i className="now-ui-icons tech_mobile mr-1"></i>Phone: 84981222268</div>
                                                    <div className="text-uppercase" > <i className="now-ui-icons shopping_tag-content mr-1"></i>Q.NAM TỪ LIÊM,TP.HÀ NỘI</div>
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
                <CustomFooter />
            </div>
        </>
    );
}

export default HomePage;