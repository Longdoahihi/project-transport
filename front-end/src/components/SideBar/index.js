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
                        style={{ maxHeight: '100vh' }}
                    >
                        <Col md="2" xs="3" sm="4" >
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
                                        <NavItem style={{
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
                                        </NavItem>
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
                                                    <span>Đơn hàng</span>
                                                </div>
                                            </NavLink>
                                        </NavItem>
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
                                                                    <span>Tra cứu</span>
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
                                                                Tra cứu vận đơn
                                                            </NavLink>
                                                            <NavLink className={classNames(verticalTabs === "4" ? "active" : "", "mb-0", "text-left")} style={{
                                                                backgroundColor: 'transparent', color: 'white', cursor: 'pointer', borderRadius: 0, boxShadow: 'none'
                                                            }}
                                                                onClick={(e) => {
                                                                    e.preventDefault();
                                                                    setVerticalTabs("4");
                                                                }}
                                                            >
                                                                Ước tính chi phí
                                                            </NavLink>
                                                            <NavLink className={classNames(verticalTabs === "5" ? "active" : "", "mb-0", "text-left")} style={{
                                                                backgroundColor: 'transparent', color: 'white', cursor: 'pointer', borderRadius: 0, boxShadow: 'none'
                                                            }}
                                                                onClick={(e) => {
                                                                    e.preventDefault();
                                                                    setVerticalTabs("5");
                                                                }}
                                                            >
                                                                Tìm kiếm bưu cục
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
                                                                    <span>Cài đặt tài khoản</span>
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
                                                                Thông tin tài khoản
                                                            </NavLink>
                                                            <NavLink className={classNames(verticalTabs === "7" ? "active" : "", "mb-0", "text-left")} style={{
                                                                backgroundColor: 'transparent', color: 'white', cursor: 'pointer', borderRadius: 0, boxShadow: 'none'
                                                            }}
                                                                onClick={(e) => {
                                                                    e.preventDefault();
                                                                    setVerticalTabs("7");
                                                                }}
                                                            >
                                                                Đổi mật khẩu
                                                            </NavLink>
                                                        </NavItem>
                                                    </Collapse>
                                                </Card>
                                            </NavItem>
                                        </div>
                                    </Col>
                                </Row>
                            </div>
                        </Col>
                        <Col md="10">
                            <TabContent activeTab={"verticalTabs" + verticalTabs}>
                                <TabPane tabId="verticalTabs1">
                                    1
                                </TabPane>
                                <TabPane tabId="verticalTabs2">
                                    <CUOrder />
                                </TabPane>
                                <TabPane tabId="verticalTabs3">
                                    3
                                </TabPane>
                                <TabPane tabId="verticalTabs4">
                                    4
                                </TabPane>
                                <TabPane tabId="verticalTabs5">
                                    5
                                </TabPane>
                                <TabPane tabId="verticalTabs6">
                                    6
                                </TabPane>
                                <TabPane tabId="verticalTabs7">
                                    7
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