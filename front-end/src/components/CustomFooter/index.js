/*eslint-disable*/
import React from "react";

// reactstrap components
import { Button, Container, Row, Col } from "reactstrap";

// core components

function CustomFooter() {
    return (
        <>
            <footer className="footer" data-background-color="black">
                <Container>
                    <div className="content">
                        <Row>
                            <Col md="2">
                                <h5 className="text-justify">MienBac Transport</h5>
                            </Col>
                            <Col md="2">
                                <h5>Liên kết</h5>
                                <ul className="links-vertical">
                                    <li>
                                        <a
                                            className="text-muted"
                                            href="#pablo"
                                            onClick={(e) => e.preventDefault()}
                                        >
                                            Trang chủ
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            className="text-muted"
                                            href="#pablo"
                                            onClick={(e) => e.preventDefault()}
                                        >
                                            Tin tức
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            className="text-muted"
                                            href="#pablo"
                                            onClick={(e) => e.preventDefault()}
                                        >
                                            Giới thiệu
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            className="text-muted"
                                            href="#pablo"
                                            onClick={(e) => e.preventDefault()}
                                        >
                                            Liên hệ
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            className="text-muted"
                                            href="#pablo"
                                            onClick={(e) => e.preventDefault()}
                                        >
                                            Đăng nhập
                                        </a>
                                    </li>
                                </ul>
                            </Col>
                            <Col md="4">
                                <h5>Liên hệ</h5>
                                <div className="social-feed">
                                    <div className="feed-line">
                                        <i class="now-ui-icons tech_mobile"></i>
                                        <p>
                                            030987667 - Quách Văn Long
                                        </p>
                                    </div>
                                    <div className="feed-line">
                                        <i class="now-ui-icons location_pin"></i>
                                        <p>
                                            Đường Cầu Diễn, Phường Minh Khai, Quận Bắc Từ Liêm,
                                            TP. Hà Nội
                                        </p>
                                    </div>
                                </div>
                            </Col>
                            <Col md="4">
                                <h5>Kết nối cùng MienBac Transport</h5>
                                <ul className="social-buttons">
                                    <li>
                                        <Button
                                            className="btn-icon btn-neutral btn-round mr-1"
                                            color="twitter"
                                            href="#pablo"
                                            onClick={(e) => e.preventDefault()}
                                        >
                                            <i className="fab fa-twitter"></i>
                                        </Button>
                                    </li>
                                    <li>
                                        <Button
                                            className="btn-icon btn-neutral btn-round mr-1"
                                            color="facebook"
                                            href="#pablo"
                                            onClick={(e) => e.preventDefault()}
                                        >
                                            <i className="fab fa-facebook-square"></i>
                                        </Button>
                                    </li>
                                    <li>
                                        <Button
                                            className="btn-icon btn-neutral btn-round mr-1"
                                            color="dribbble"
                                            href="#pablo"
                                            onClick={(e) => e.preventDefault()}
                                        >
                                            <i className="fab fa-dribbble"></i>
                                        </Button>
                                    </li>
                                    <li>
                                        <Button
                                            className="btn-icon btn-neutral btn-round mr-1"
                                            color="google"
                                            href="#pablo"
                                            onClick={(e) => e.preventDefault()}
                                        >
                                            <i className="fab fa-google-plus"></i>
                                        </Button>
                                    </li>
                                    <li>
                                        <Button
                                            className="btn-icon btn-neutral btn-round"
                                            color="instagram"
                                            href="#pablo"
                                            onClick={(e) => e.preventDefault()}
                                        >
                                            <i className="fab fa-instagram"></i>
                                        </Button>
                                    </li>
                                </ul>
                            </Col>
                        </Row>
                    </div>
                    <hr></hr>
                    <div className="copyright" id="copyright">
                        © {new Date().getFullYear()}, Thiết kế và triển khai bởi{" "}
                        <a
                            href="#"
                            target="_blank"
                        >
                            MienBac Transport
                        </a>
                        .
                    </div>
                </Container>
            </footer>
        </>
    );
}

export default CustomFooter;
