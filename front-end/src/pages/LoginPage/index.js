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

// core components
import Footer from "components/Footers/Footer.js";
import LoginDropdownScrollNavbar from "components/Navbars/LoginDropdownScrollNavbar";

function LoginPage() {
    const [firstFocus, setFirstFocus] = React.useState(false);
    const [lastFocus, setLastFocus] = React.useState(false);
    const [isShow, setIsShow] = React.useState(false);
    const [formState, setFormState] = React.useState('login'); // login,register,forgot
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
                                        {
                                            formState === "login" ?
                                                (
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
                                                                onClick={() => {
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
                                                ) :
                                                formState === "register" ?
                                                    (
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
                                                                    onClick={() => {
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
                                                            <InputGroup
                                                                className={
                                                                    "no-border input-lg" +
                                                                    (lastFocus ? " input-group-focus" : "")
                                                                }
                                                            >
                                                                <InputGroupAddon addonType="prepend" style={{
                                                                    cursor: 'pointer',
                                                                }}
                                                                    onClick={() => {
                                                                        setIsShow(!isShow)
                                                                    }}
                                                                >
                                                                    <InputGroupText>
                                                                        <i className="now-ui-icons ui-1_lock-circle-open"></i>
                                                                    </InputGroupText>
                                                                </InputGroupAddon>
                                                                <Input
                                                                    placeholder="Nhập lại mật khẩu..."
                                                                    type={isShow ? "text" : "password"}
                                                                    onFocus={() => setLastFocus(true)}
                                                                    onBlur={() => setLastFocus(false)}
                                                                ></Input>
                                                            </InputGroup>
                                                        </CardBody>
                                                    ) :
                                                    (
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
                                                                    placeholder="Nhập địa chỉ email..."
                                                                    type="email"
                                                                    onFocus={() => setFirstFocus(true)}
                                                                    onBlur={() => setFirstFocus(false)}
                                                                ></Input>
                                                            </InputGroup>
                                                        </CardBody>
                                                    )
                                        }
                                        <CardFooter className="text-center">
                                            <Button
                                                block
                                                className="btn-round"
                                                color="primary"
                                                href="#pablo"
                                                onClick={(e) => {
                                                    if (formState === "login") {
                                                        // xử lý đăng nhập
                                                    }
                                                    else if (formState === "register") {
                                                        // xử lý đăng ký
                                                    }
                                                    else if (formState === "forgot") {
                                                        // xử lý quên mật khẩu
                                                    }

                                                }}
                                                size="lg"
                                            >
                                                <i class="now-ui-icons arrows-1_share-66 mr-2"></i>
                                                {
                                                    formState === "login" ? "Đăng nhập" :
                                                        formState === "register" ? "Đăng ký" :
                                                            "Gửi"
                                                }
                                            </Button>
                                        </CardFooter>
                                        <div className="pull-left">
                                            <h6>
                                                <a
                                                    className="link footer-link"
                                                    href="#pablo"
                                                    onClick={(e) => {
                                                        if (formState === "login")
                                                            setFormState("register");
                                                        else
                                                            setFormState("login");
                                                        e.preventDefault();
                                                    }}
                                                >
                                                    {
                                                        formState === "register" ? "Đăng nhập" : "Tạo tài khoản"
                                                    }
                                                </a>
                                            </h6>
                                        </div>
                                        <div className="pull-right">
                                            <h6>
                                                <a
                                                    className="link footer-link"
                                                    href="#pablo"
                                                    onClick={(e) => {
                                                        if (formState === "login" || formState === "register")
                                                            setFormState('forgot');
                                                        else
                                                            setFormState("login");
                                                        e.preventDefault();
                                                    }}
                                                >
                                                    {
                                                        formState === "login" || formState === "register" ? "Quên mật khẩu ?" : "Đăng nhập"
                                                    }
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
