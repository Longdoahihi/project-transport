/**
 * Trang đăng nhập
 */
import React from "react";
// reactstrap components
import {
    Button,
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Form,
    Input,
    InputGroupAddon,
    InputGroupText,
    InputGroup,
    Container,
    Col,
    Row,
} from "reactstrap";
import EnvelopseIcon from 'assets/svgs/envelope-solid.svg'

// core components
import DropdownScrollNavbar from "components/Navbars/DropdownScrollNavbar.js";
import Footer from "components/Footers/Footer.js";
import DropdownFixedNavbar from "components/Navbars/DropdownFixedNavbar";
import LoginDropdownScrollNavbar from "components/Navbars/LoginDropdownScrollNavbar";

function LoginPage() {
    const [firstFocus, setFirstFocus] = React.useState(false);
    const [lastFocus, setLastFocus] = React.useState(false);
    const [isShow, setIsShow] = React.useState(false);
    React.useEffect(() => {
        document.body.classList.add("login-page");
        document.body.classList.add("sidebar-collapse");
        document.documentElement.classList.remove("nav-open");
        window.scrollTo(0, 0);
        document.body.scrollTop = 0;
        return function cleanup() {
            document.body.classList.remove("login-page");
            document.body.classList.remove("sidebar-collapse");
        };
    }, []);
    return (
        <>
            <LoginDropdownScrollNavbar />
            <div className="page-header header-filter" filter-color="blue">
                <div
                    className="page-header-image"
                    style={{
                        backgroundImage: "url(" + require("assets/img/pages/login.jpg") + ")"
                    }}
                ></div>
                <div className="content">
                    <Container>
                        <Row >
                            <Col className="ml-auto mr-auto" md="5">
                                <Card className="card-login card-plain">
                                    <Form action="" className="form" method="">
                                        <CardHeader className="text-center">
                                            <div className="logo-container">
                                                <img
                                                    alt="..."
                                                    src={require("assets/img/now-logo.png")}
                                                ></img>
                                            </div>
                                        </CardHeader>
                                        <CardBody  >
                                            <InputGroup
                                                className={
                                                    "no-border input-lg" +
                                                    (firstFocus ? " input-group-focus" : "")
                                                }
                                            >
                                                <InputGroupAddon addonType="prepend">
                                                    <InputGroupText>
                                                        <i className="now-ui-icons ui-1_email-85"></i>
                                                    </InputGroupText>
                                                </InputGroupAddon>
                                                <Input
                                                    placeholder="Email..."
                                                    type="email"
                                                    onFocus={() => setFirstFocus(true)}
                                                    onBlur={() => setFirstFocus(false)}
                                                ></Input>
                                            </InputGroup>
                                            <InputGroup
                                                className={
                                                    "no-border input-lg" +
                                                    (lastFocus ? " input-group-focus" : "")
                                                }
                                            >
                                                <InputGroupAddon addonType="prepend" style={{
                                                    cursor: 'pointer',
                                                }}
                                                onClick={()=>{
                                                    setIsShow(!isShow)
                                                }}
                                                >
                                                    <InputGroupText>
                                                        <i className="now-ui-icons ui-1_lock-circle-open"></i>
                                                    </InputGroupText>
                                                </InputGroupAddon>
                                                <Input
                                                    placeholder="Mật khẩu..."
                                                    type={isShow ? "text" : "password"}
                                                    
                                                    onFocus={() => setLastFocus(true)}
                                                    onBlur={() => setLastFocus(false)}
                                                ></Input>
                                            </InputGroup>
                                        </CardBody>
                                        <CardFooter className="text-center">
                                            <Button
                                                block
                                                className="btn-round"
                                                color="primary"
                                                href="#pablo"
                                                onClick={(e) => {
                                                    // xử lý đăng nhập
                                                }}
                                                size="lg"
                                            >
                                                <i class="now-ui-icons arrows-1_share-66 mr-2"></i>
                                                Đăng nhập
                                            </Button>
                                        </CardFooter>
                                        <div className="pull-left">
                                            <h6>
                                                <a
                                                    className="link footer-link"
                                                    href="#pablo"
                                                    onClick={(e) => e.preventDefault()}
                                                >
                                                    Tạo tài khoản
                                                </a>
                                            </h6>
                                        </div>
                                        <div className="pull-right">
                                            <h6>
                                                <a
                                                    className="link footer-link"
                                                    href="#pablo"
                                                    onClick={(e) => e.preventDefault()}
                                                >
                                                    Quên mật khẩu ?
                                                </a>
                                            </h6>
                                        </div>
                                    </Form>
                                </Card>
                            </Col>
                        </Row>
                    </Container>
                </div>
                <Footer />
            </div>
        </>
    );
}

export default LoginPage;
