import classNames from "classnames";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
// reactstrap components
import {
    TabContent,
    TabPane,
    Row,
    Col,
    Collapse,
    Card,
    CardHeader,
    NavLink,
    NavItem,
    Nav,
} from "reactstrap";
import 'assets/css/pages/sidebar/index.css'
import CUOrder from "pages/User/components/CUOrder";
import ROrder from "pages/User/components/ROrder";
import Order from "pages/User/components/Order";
import CostEstimate from "pages/User/CostEstimate";
import PostOffice from "pages/User/PostOffice";
import UserInfo from "pages/User/UserInfo";
import ChangePassword from "pages/User/ChangePassword";
import UDelivery from "pages/User/UDelivery";
function SideBar() {
    const [verticalTabs, setVerticalTabs] = React.useState("1");
    const [collapseOpen, setCollapseOpen] = React.useState(false);
    useEffect(() => {
        setCollapseOpen(true)
    })
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [dropdownOpen2, setDropdownOpen2] = useState(false);

    const toggle = () => setDropdownOpen(!dropdownOpen);
    const toggle2 = () => setDropdownOpen2(!dropdownOpen);
    // collapse states and functions
    const [collapses, setCollapses] = React.useState([1]);
    const changeCollapse = (collapse) => {
        if (collapses.includes(collapse)) {
            setCollapses(collapses.filter((prop) => prop !== collapse));
        } else {
            setCollapses([collapse]);
        }
    };
    return (
        <Col md="12" className="custom-sidebar" >
            <Row>
                <Col md={12}>
                    <Nav
                        className="nav-pills-info flex-column row"
                        pills
                        role="tablist"
                        style={{ maxHeight: '100vh',position: 'relative' }}
                    >
                        <Col md="2" xs="3" sm="4"
                            style={{
                                position: 'fixed',
                                zIndex: 9999,
                                maxWidth: 250
                            }}
                        >
                            <div id="collapse">
                                <Row style={{
                                    backgroundColor: 'green',
                                    minHeight: '100vh'
                                }}>
                                    <Col md="12">
                                        <NavItem>
                                            <NavItem>
                                                <h5 className="font-weight-bold content-center mb-0 py-4" style={{ color: 'white' }} >Mien Bac Transport</h5>
                                            </NavItem>
                                        </NavItem>
                                        {/* <NavItem style={{
                                            borderRadius: '0px'
                                        }}>
                                            <NavLink
                                                className={classNames(verticalTabs === "1" ? "active" : "", "px-0", "mb-0")}
                                                href="#pablo"
                                                onClick={(e) => {
                                                    e.preventDefault();
                                                    setVerticalTabs("1");
                                                    changeCollapse(-1);
                                                }}
                                                style={{
                                                    backgroundColor: 'transparent',
                                                    boxShadow: 'none',
                                                    textAlign: 'left',
                                                    color: 'white',
                                                    borderRadius: '0px',
                                                    borderBottom: '1px solid white'
                                                }}
                                            >
                                                <div className="d-flex align-content-center">
                                                    <i class="now-ui-icons business_bank custom-icon mr-2" style={{ lineHeight: '20px', fontSize: '20px' }} ></i>
                                                    <span>Tổng quan</span>
                                                </div>
                                            </NavLink>
                                        </NavItem> */}
                                        <NavItem style={{
                                            borderRadius: '0px'
                                        }}>
                                            <NavLink
                                                className={classNames(verticalTabs === "2" ? "active" : "", "px-0", "mb-0")}
                                                href="#pablo"
                                                onClick={(e) => {
                                                    e.preventDefault();
                                                    setVerticalTabs("2");
                                                    changeCollapse(-1);
                                                }}
                                                style={{
                                                    backgroundColor: 'transparent',
                                                    boxShadow: 'none',
                                                    textAlign: 'left',
                                                    color: 'white',
                                                    borderRadius: '0px',
                                                    borderBottom: '1px solid white'
                                                }}
                                            >
                                                <div className="d-flex align-content-center">
                                                    <i class="now-ui-icons design_app custom-icon mr-2" style={{ lineHeight: '20px', fontSize: '20px' }} ></i>
                                                    <span className="nav-item-text">Tạo vận đơn</span>
                                                </div>
                                            </NavLink>
                                        </NavItem>
                                        {/* <NavItem style={{
                                            borderRadius: '0px'
                                        }}>
                                            <NavLink
                                                className={classNames(verticalTabs === "9" ? "active" : "", "px-0", "mb-0")}
                                                href="#pablo"
                                                onClick={(e) => {
                                                    e.preventDefault();
                                                    setVerticalTabs("9");
                                                    changeCollapse(-1);
                                                }}
                                                style={{
                                                    backgroundColor: 'transparent',
                                                    boxShadow: 'none',
                                                    textAlign: 'left',
                                                    color: 'white',
                                                    borderRadius: '0px',
                                                    borderBottom: '1px solid white'
                                                }}
                                            >
                                                <div className="d-flex align-content-center">
                                                    <i class="now-ui-icons files_paper design_app custom-icon mr-2" style={{ lineHeight: '20px', fontSize: '20px' }} ></i>
                                                    <span className="nav-item-text">Quản lý phiếu nhập/xuất</span>
                                                </div>
                                            </NavLink>
                                        </NavItem> */}
                                        <div
                                            aria-multiselectable={true}
                                            className="card-collapse"
                                            id="accordion"
                                            role="tablist"
                                        >
                                            <NavItem>
                                                <Card className="card-plain mb-0">
                                                    <CardHeader id="headingOne" role="tab" className="py-0">
                                                        <NavLink
                                                            className="px-0"
                                                            href="#pablo"
                                                            onClick={(e) => {
                                                                e.preventDefault();
                                                                setVerticalTabs("3");
                                                                changeCollapse(1);
                                                            }}
                                                            style={{
                                                                backgroundColor: 'transparent',
                                                                boxShadow: 'none'
                                                            }}
                                                        >
                                                            <a
                                                                aria-expanded={collapses.includes(1)}
                                                                data-toggle="collapse"
                                                                href="#pablo"
                                                                onClick={(e) => {
                                                                    e.preventDefault();
                                                                    changeCollapse(1);
                                                                }}
                                                                style={{
                                                                    color: 'white'
                                                                }}
                                                                className="d-flex justify-content-between align-content-center"
                                                            >
                                                                <div className="d-flex align-content-center">
                                                                    <i class="now-ui-icons ui-1_zoom-bold custom-icon mr-2" style={{ lineHeight: '20px', fontSize: '20px', color: 'white', transform: 'none' }} ></i>
                                                                    <span className="nav-item-text">Tra cứu</span>
                                                                </div>
                                                                <i style={{
                                                                    lineHeight: "24px",
                                                                    color: 'white',
                                                                    fontSize: '16px'
                                                                }} className="now-ui-icons custom-icon about-contact arrows-1_minimal-down " ></i>
                                                            </a>
                                                        </NavLink>
                                                    </CardHeader>
                                                    <Collapse isOpen={collapses.includes(1)}>
                                                        <NavItem className="text-left">
                                                            <NavLink className={classNames(verticalTabs === "3" ? "active" : "", "mb-0", "text-left")} style={{
                                                                backgroundColor: 'transparent', color: 'white', cursor: 'pointer', borderRadius: 0, boxShadow: 'none'
                                                            }}
                                                                onClick={(e) => {
                                                                    e.preventDefault();
                                                                    setVerticalTabs("3");
                                                                }}
                                                            >
                                                                <span className="nav-item-text" >Tra cứu vận đơn</span>
                                                            </NavLink>
                                                            <NavLink className={classNames(verticalTabs === "4" ? "active" : "", "mb-0", "text-left")} style={{
                                                                backgroundColor: 'transparent', color: 'white', cursor: 'pointer', borderRadius: 0, boxShadow: 'none'
                                                            }}
                                                                onClick={(e) => {
                                                                    e.preventDefault();
                                                                    setVerticalTabs("4");
                                                                }}
                                                            >

                                                                <span className="nav-item-text" >Ước tính chi phí</span>
                                                            </NavLink>
                                                            <NavLink className={classNames(verticalTabs === "5" ? "active" : "", "mb-0", "text-left")} style={{
                                                                backgroundColor: 'transparent', color: 'white', cursor: 'pointer', borderRadius: 0, boxShadow: 'none'
                                                            }}
                                                                onClick={(e) => {
                                                                    e.preventDefault();
                                                                    setVerticalTabs("5");
                                                                }}
                                                            >

                                                                <span className="nav-item-text" >Tìm kiếm bưu cục</span>
                                                            </NavLink>
                                                        </NavItem>
                                                    </Collapse>
                                                </Card>
                                            </NavItem>
                                        </div>
                                        <div
                                            aria-multiselectable={true}
                                            className="card-collapse"
                                            id="accordion"
                                            role="tablist"
                                        >
                                            <NavItem>
                                                <Card className="card-plain mb-0">
                                                    <CardHeader id="headingTwo" role="tab" className="py-0">
                                                        <NavLink
                                                            className="px-0"
                                                            href="#pablo"
                                                            onClick={(e) => {
                                                                e.preventDefault();
                                                                setVerticalTabs("6");
                                                            }}
                                                            style={{
                                                                backgroundColor: 'transparent',
                                                                boxShadow: 'none'
                                                            }}
                                                        >
                                                            <a
                                                                aria-expanded={collapses.includes(2)}
                                                                data-toggle="collapse"
                                                                href="#pablo"
                                                                onClick={(e) => {
                                                                    e.preventDefault();
                                                                    changeCollapse(2);
                                                                }}
                                                                style={{
                                                                    color: 'white'
                                                                }}
                                                                className="d-flex justify-content-between align-content-center"
                                                            >
                                                                <div className="d-flex align-content-center">
                                                                    <i class="now-ui-icons ui-1_settings-gear-63 custom-icon mr-2" style={{ lineHeight: '20px', fontSize: '20px', color: 'white', transform: 'none' }} ></i>
                                                                    <span className="nav-item-text">Cài đặt tài khoản</span>
                                                                </div>
                                                                <i style={{
                                                                    lineHeight: "24px",
                                                                    color: 'white',
                                                                    fontSize: '16px'
                                                                }} className="now-ui-icons custom-icon about-contact arrows-1_minimal-down " ></i>
                                                            </a>
                                                        </NavLink>
                                                    </CardHeader>
                                                    <Collapse isOpen={collapses.includes(2)}>
                                                        <NavItem className="text-left">
                                                            <NavLink className={classNames(verticalTabs === "6" ? "active" : "", "mb-0", "text-left")} style={{
                                                                backgroundColor: 'transparent', color: 'white', cursor: 'pointer', borderRadius: 0, boxShadow: 'none'
                                                            }}
                                                                onClick={(e) => {
                                                                    e.preventDefault();
                                                                    setVerticalTabs("6");
                                                                }}
                                                            >
                                                                <span className="nav-item-text">Thông tin tài khoản</span>
                                                            </NavLink>
                                                        </NavItem>
                                                    </Collapse>
                                                </Card>
                                            </NavItem>
                                        </div>
                                        <NavItem style={{
                                            borderRadius: '0px'
                                        }}>
                                            <NavLink
                                                className={classNames(verticalTabs === "7" ? "active" : "", "px-0", "mb-0")}
                                                href="#pablo"
                                                onClick={(e) => {
                                                    e.preventDefault();
                                                    setVerticalTabs("7");
                                                    changeCollapse(-1);
                                                }}
                                                style={{
                                                    backgroundColor: 'transparent',
                                                    boxShadow: 'none',
                                                    textAlign: 'left',
                                                    color: 'white',
                                                    borderRadius: '0px',
                                                    borderBottom: '1px solid white'
                                                }}
                                            >
                                                <div className="d-flex align-content-center">
                                                    <i class="now-ui-icons design_app custom-icon mr-2" style={{ lineHeight: '20px', fontSize: '20px' }} ></i>
                                                    <span className="nav-item-text" >Trạng thái giao hàng</span>
                                                </div>
                                            </NavLink>
                                        </NavItem>
                                    </Col>
                                    <Col md="12" className="d-flex flex-column justify-content-end">
                                        <div style={{ display: 'flex', alignItems: 'center' }}>
                                            <img
                                                alt="avatar"
                                                src={require("assets/img/usher.jpg")}
                                                style={{
                                                    width: 40,
                                                    height: 40,
                                                    borderRadius: '50%',
                                                    marginRight: 12
                                                }}
                                            />
                                            <div
                                                style={{
                                                    color: 'white',
                                                    fontWeight: 700,

                                                }}
                                            >Quách Văn Long</div>
                                        </div>
                                        <button  className="btn btn-large btn-success d-flex justify-content-center text-icon" style={{ fontSize: 14, fontWeight: 'bold', color: 'white', padding: '12px 0px' }}>
                                            <i class="now-ui-icons arrows-1_share-66" style={{ transform: 'rotate(90deg)' }}></i>
                                            <span>Đăng xuất</span>
                                        </button>
                                    </Col>
                                </Row>
                            </div>
                        </Col>
                        <Col md="10"
                            style={{
                                marginLeft: 250
                            }}
                        >
                            <TabContent activeTab={"verticalTabs" + verticalTabs}>
                                <TabPane tabId="verticalTabs1">
                                    1
                                </TabPane>
                                <TabPane tabId="verticalTabs2">
                                    <CUOrder />
                                </TabPane>
                                <TabPane tabId="verticalTabs3">
                                    <Order />
                                </TabPane>
                                <TabPane tabId="verticalTabs4">
                                    <CostEstimate />
                                </TabPane>
                                <TabPane tabId="verticalTabs5">
                                    <PostOffice />
                                </TabPane>
                                <TabPane tabId="verticalTabs6">
                                    <UserInfo />
                                </TabPane>
                                <TabPane tabId="verticalTabs7">
                                    <UDelivery />
                                </TabPane>
                            </TabContent>
                        </Col>
                    </Nav>
                </Col>

            </Row>
        </Col>
    );
}

export default SideBar;