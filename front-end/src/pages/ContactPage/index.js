import React from "react";

// reactstrap components
import {
    Button,
    FormGroup,
    Form,
    Input,
    InputGroupAddon,
    InputGroupText,
    InputGroup,
    Container,
    Row,
    Col,
} from "reactstrap";

// core components
import DropdownWhiteNavbar from "components/Navbars/DropdownWhiteNavbar.js";
import ContactUsHeader from "components/Headers/ContactUsHeader.js";
import Footer from "components/Footers/Footer.js";
import ScrollTransparentNavbar from "components/Navbars/ScrollTransparentNavbar";
import CustomFooter from "components/CustomFooter";

const MapWrapper = () => {
    const mapRef = React.useRef(null);
    React.useEffect(() => {
        let google = window.google;
        let map = mapRef.current;
        let lat = "40.748817";
        let lng = "-73.985428";
        const myLatlng = !!google?.maps ? new google.maps.LatLng(lat, lng) : "";
        const mapOptions = {
            zoom: 13,
            center: myLatlng,
            scrollwheel: false,
            zoomControl: true,
            styles: [
                {
                    featureType: "water",
                    elementType: "geometry",
                    stylers: [{ color: "#e9e9e9" }, { lightness: 17 }],
                },
                {
                    featureType: "landscape",
                    elementType: "geometry",
                    stylers: [{ color: "#f5f5f5" }, { lightness: 20 }],
                },
                {
                    featureType: "road.highway",
                    elementType: "geometry.fill",
                    stylers: [{ color: "#ffffff" }, { lightness: 17 }],
                },
                {
                    featureType: "road.highway",
                    elementType: "geometry.stroke",
                    stylers: [{ color: "#ffffff" }, { lightness: 29 }, { weight: 0.2 }],
                },
                {
                    featureType: "road.arterial",
                    elementType: "geometry",
                    stylers: [{ color: "#ffffff" }, { lightness: 18 }],
                },
                {
                    featureType: "road.local",
                    elementType: "geometry",
                    stylers: [{ color: "#ffffff" }, { lightness: 16 }],
                },
                {
                    featureType: "poi",
                    elementType: "geometry",
                    stylers: [{ color: "#f5f5f5" }, { lightness: 21 }],
                },
                {
                    featureType: "poi.park",
                    elementType: "geometry",
                    stylers: [{ color: "#dedede" }, { lightness: 21 }],
                },
                {
                    elementType: "labels.text.stroke",
                    stylers: [
                        { visibility: "on" },
                        { color: "#ffffff" },
                        { lightness: 16 },
                    ],
                },
                {
                    elementType: "labels.text.fill",
                    stylers: [
                        { saturation: 36 },
                        { color: "#333333" },
                        { lightness: 40 },
                    ],
                },
                { elementType: "labels.icon", stylers: [{ visibility: "off" }] },
                {
                    featureType: "transit",
                    elementType: "geometry",
                    stylers: [{ color: "#f2f2f2" }, { lightness: 19 }],
                },
                {
                    featureType: "administrative",
                    elementType: "geometry.fill",
                    stylers: [{ color: "#fefefe" }, { lightness: 20 }],
                },
                {
                    featureType: "administrative",
                    elementType: "geometry.stroke",
                    stylers: [{ color: "#fefefe" }, { lightness: 17 }, { weight: 1.2 }],
                },
            ],
        };

        map = new google.maps.Map(map, mapOptions);

        const marker = new google.maps.Marker({
            position: myLatlng,
            map: map,
            animation: google.maps.Animation.DROP,
            title: "Now UI Kit PRO React!",
        });

        const contentString =
            '<div class="info-window-content"><h2>Now UI Kit PRO React</h2>' +
            "<p>A premium Admin for React, Reactstrap, and React Hooks.</p></div>";

        const infowindow = new google.maps.InfoWindow({
            content: contentString,
        });

        google.maps.event.addListener(marker, "click", function () {
            infowindow.open(map, marker);
        });
    });
    return (
        <>
            <div style={{ height: `100%` }} ref={mapRef}></div>
        </>
    );
};

function ContactPage() {
    const [nameFocus, setNameFocus] = React.useState(false);
    const [emailFocus, setEmailFocus] = React.useState(false);
    const [numberFocus, setNumberFocus] = React.useState(false);
    React.useEffect(() => {
        document.body.classList.add("contact-page");
        document.body.classList.add("sidebar-collapse");
        document.documentElement.classList.remove("nav-open");
        window.scrollTo(0, 0);
        document.body.scrollTop = 0;
        return function cleanup() {
            document.body.classList.remove("contact-page");
            document.body.classList.remove("sidebar-collapse");
        };
    }, []);
    return (
        <>
            <ScrollTransparentNavbar />
            <div className="wrapper">
                <ContactUsHeader />
                <div className="main">
                    <div className="contact-content">
                        <Container>
                            <Row>
                                <Col className="ml-auto mr-auto" md="5">
                                    <h2 className="title">Tin nhắn</h2>
                                    <p className="description">
                                        Bạn có thể liên hệ với chúng tôi nếu có bất kỳ điều gì liên quan đến dịch vụ vận chuyển của chúng tôi. Chúng tôi sẽ liên lạc với bạn ngay khi có thể! <br></br>
                                        <br></br>
                                    </p>
                                    <Form id="contact-form" method="post" role="form">
                                        <label>Họ tên</label>
                                        <InputGroup
                                            className={nameFocus ? "input-group-focus" : ""}
                                        >
                                            <InputGroupAddon addonType="prepend">
                                                <InputGroupText>
                                                    <i className="now-ui-icons users_circle-08"></i>
                                                </InputGroupText>
                                            </InputGroupAddon>
                                            <Input
                                                aria-label="Nhập họ tên..."
                                                autoComplete="name"
                                                placeholder="Nhập họ tên..."
                                                type="text"
                                                onFocus={() => setNameFocus(true)}
                                                onBlur={() => setNameFocus(false)}
                                            ></Input>
                                        </InputGroup>
                                        <label>Địa chỉ Email</label>
                                        <InputGroup
                                            className={emailFocus ? "input-group-focus" : ""}
                                        >
                                            <InputGroupAddon addonType="prepend">
                                                <InputGroupText>
                                                    <i className="now-ui-icons ui-1_email-85"></i>
                                                </InputGroupText>
                                            </InputGroupAddon>
                                            <Input
                                                aria-label="Email Here..."
                                                autoComplete="email"
                                                placeholder="Nhập địa chỉ email. VD: abc@gmail.com"
                                                type="email"
                                                onFocus={() => setEmailFocus(true)}
                                                onBlur={() => setEmailFocus(false)}
                                            ></Input>
                                        </InputGroup>
                                        <label>Số điện thoại</label>
                                        <InputGroup
                                            className={numberFocus ? "input-group-focus" : ""}
                                        >
                                            <InputGroupAddon addonType="prepend">
                                                <InputGroupText>
                                                    <i className="now-ui-icons tech_mobile"></i>
                                                </InputGroupText>
                                            </InputGroupAddon>
                                            <Input
                                                autoComplete="number"
                                                placeholder="Nhập số điện thoại... VD: 0982982208"
                                                type="text"
                                                onFocus={() => setNumberFocus(true)}
                                                onBlur={() => setNumberFocus(false)}
                                            ></Input>
                                        </InputGroup>
                                        <FormGroup>
                                            <label>Lời nhắn</label>
                                            <Input
                                                id="message"
                                                name="message"
                                                rows="6"
                                                type="textarea"
                                            ></Input>
                                        </FormGroup>
                                        <div className="submit text-center">
                                            <Button
                                                className="btn-raised btn-round"
                                                color="info"
                                                defaultValue="Contact Us"
                                                type="submit"
                                                onClick={() => {
                                                    window.alert("Cảm ơn phản hồi của bạn về chúng tôi! Chúng tôi sẽ liên hệ với bạn ngay khi có thể!")
                                                }}
                                            >
                                                Gửi
                                            </Button>
                                        </div>
                                    </Form>
                                </Col>
                                <Col className="ml-auto mr-auto" md="5">
                                    <div className="info info-horizontal mt-5">
                                        <div className="icon icon-info">
                                            <i className="now-ui-icons location_pin"></i>
                                        </div>
                                        <div className="description">
                                            <h4 className="info-title">Địa chỉ liên hệ</h4>
                                            <p>
                                                Đường Cầu Diễn, phường Minh Khai, Quận Bắc Từ Liêm, <br></br>
                                                TP. Hà Nội,
                                            </p>
                                        </div>
                                    </div>
                                    <div className="info info-horizontal">
                                        <div className="icon icon-info">
                                            <i className="now-ui-icons tech_mobile"></i>
                                        </div>
                                        <div className="description">
                                            <h4 className="info-title">Số điện thoại liên hệ</h4>
                                            <p>
                                                Quách Văn Long<br></br>
                                                030987667 <br></br>
                                                T2 - CN, 8:00-23:00
                                            </p>
                                        </div>
                                    </div>
                                    <div className="info info-horizontal">
                                        <div className="icon icon-info">
                                            <i className="business_briefcase-24 now-ui-icons"></i>
                                        </div>
                                        <div className="description">
                                            <h4 className="info-title">Thông tin hợp pháp</h4>
                                            <p>
                                                MienBac Transport Ltd. <br></br>
                                                VAT · EN2341241 <br></br>
                                                IBAN · EN8732ENGB2300099123 <br></br>
                                                Bank · Viettin Bank
                                            </p>
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                        </Container>
                    </div>
                </div>
                <div className="big-map" id="contactUs2Map">
                    <MapWrapper />
                </div>
                <CustomFooter />
            </div>
        </>
    );
}

export default ContactPage;
