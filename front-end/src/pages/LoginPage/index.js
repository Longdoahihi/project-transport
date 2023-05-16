/**
 * Trang đăng nhập
 */
import React, { useState } from "react";
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
    Modal,
    ModalBody,
    ModalHeader,
} from "reactstrap";

// core components
import Footer from "components/Footers/Footer.js";
import LoginDropdownScrollNavbar from "components/Navbars/LoginDropdownScrollNavbar";
import InputCustom from "components/InputCustom";
import SelectCustom from "components/SelectCustom";

function LoginPage() {
    const [emailLogin,setEmailLogin] = useState("");
    const [passwordLogin,setPasswordLogin] = useState("");
    const [firstFocus, setFirstFocus] = React.useState(false);
    const [lastFocus, setLastFocus] = React.useState(false);
    const [isShow, setIsShow] = React.useState(false);
    const [formState, setFormState] = React.useState('login');
    const [provinceValue, setProvinceValue] = useState(null);
    const [districtValue, setDistrictValue] = useState(null);
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
    const [isOpenModal, setIsOpenModal] = useState(false);
    const toggle = () => setIsOpenModal(!isOpenModal);
    //Xử lý đăng nhập
    const hanleLogin = (email, password) => {
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify({
            "email": email,
            "password": password
        });

        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'manual'
        };

        fetch(`${process.env.REACT_APP_BASE_URL}/api/login`, requestOptions)
            .then(response => response.text())
            .then(result => {
                localStorage.setItem("USER_INFO",result);
            })
            .catch(error => console.log('error', error));
    }
    //Xử lý đăng xuất
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
                                                                onChange={(e)=>{
                                                                    setEmailLogin(e.target.value);
                                                                }}  
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
                                                                onChange={(e)=>{
                                                                    setPasswordLogin(e.target.value);
                                                                }}  
                                                                onFocus={() => setLastFocus(true)}
                                                                onBlur={() => setLastFocus(false)}
                                                            ></Input>
                                                        </InputGroup>
                                                    </CardBody>
                                                ) :
                                                formState === "forgot" ?
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
                                                    ) : ""
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
                                                        hanleLogin(emailLogin,passwordLogin);
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
                                                        setFormState("login");
                                                        toggle()
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
                        <Modal
                            isOpen={isOpenModal}
                            toggle={toggle}
                            centered={true}
                            size="lg"
                        >
                            <ModalHeader>
                                <h5 class="modal-title text-uppercase ">ĐĂNG KÝ TÀI KHOẢN</h5>
                                <button type="button" class="close">
                                    <i class="now-ui-icons ui-1_simple-remove"></i>
                                </button>
                            </ModalHeader>
                            <ModalBody
                                style={{
                                    lineHeight: 1.5
                                }}
                            >
                                <Row>
                                    <Col md={6}
                                        style={{
                                            borderRight: '1px solid #eee'
                                        }}
                                    >
                                        <h5 className="">Thông tin cơ bản</h5>
                                        <InputCustom
                                            title={"Họ tên"}
                                            isRequired={true}
                                            row={false}
                                            styleLabel={{
                                                color: 'black',
                                                textAlight: 'left'
                                            }}
                                            placeholder={"Nhập họ và tên..."}
                                            labelClassName={"pull-left"}
                                        />
                                        <InputCustom
                                            title={"Email"}
                                            isRequired={true}
                                            row={false}
                                            styleLabel={{
                                                color: 'black',
                                                textAlight: 'left'
                                            }}
                                            placeholder={"Nhập địa chỉ email..."}
                                            labelClassName={"pull-left"}
                                        />
                                        <InputCustom
                                            title={"Số điện thoại"}
                                            isRequired={true}
                                            type={"tel"}
                                            row={false}
                                            styleLabel={{
                                                color: 'black',
                                                textAlight: 'left'
                                            }}
                                            placeholder={"Nhập số điện thoại..."}
                                            labelClassName={"pull-left"}
                                        />
                                        <InputCustom
                                            title={"Mật khẩu"}
                                            type={"password"}
                                            isRequired={true}
                                            row={false}
                                            styleLabel={{
                                                color: 'black',
                                                textAlight: 'left'
                                            }}
                                            placeholder={"Nhập mật khẩu..."}
                                            labelClassName={"pull-left"}
                                        />
                                        <InputCustom
                                            title={"Xác nhận mật khẩu"}
                                            isRequired={true}
                                            type={"password"}
                                            row={false}
                                            styleLabel={{
                                                color: 'black',
                                                textAlight: 'left'
                                            }}
                                            placeholder={"Xác nhận mật khẩu..."}
                                            labelClassName={"pull-left"}
                                        />
                                    </Col>
                                    <Col md={6}>
                                        <h5 className="">Địa chỉ</h5>
                                        <SelectCustom
                                            label={"Tỉnh thành"}
                                            options={[
                                                {
                                                    label: 'Ninh Bình',
                                                    value: 0
                                                }
                                            ]}
                                            value={provinceValue}
                                            onChange={(e) => {
                                                setProvinceValue(e)
                                            }}
                                            row={false}
                                            placeholder={"Chọn tỉnh/thành phố"}
                                        />
                                        <SelectCustom
                                            label={"Quận huyện"}
                                            options={[
                                                {
                                                    label: 'Yên Mô',
                                                    value: 0
                                                }
                                            ]}
                                            value={districtValue}
                                            onChange={(e) => {
                                                setDistrictValue(e)
                                            }}
                                            row={false}
                                            placeholder={"Chọn quận/huyện"}
                                        />
                                        <InputCustom
                                            title={"Số nhà, Đường/ Ngõ"}
                                            row={false}
                                            placeholder={"Nhập chi tiết số nhà, Đường/ Ngõ..."}
                                        />
                                    </Col>
                                    <Col md={12} className="text-center" >
                                        <button className="btn btn-lg btn-round btn-info"
                                            onClick={() => {
                                                window.alert("Đăng ký tài khoản thành công!")
                                            }}
                                        >Đăng ký</button>
                                    </Col>
                                </Row>
                            </ModalBody>
                        </Modal>
                    </Container>
                </div>
                <Footer />
            </div>
        </>
    );
}

export default LoginPage;
