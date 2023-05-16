import React from "react";

// reactstrap components
import { Row, Col, Card, CardHeader, CardBody, Form, InputGroup, InputGroupAddon, InputGroupText, Input, FormGroup, Button, Container } from "reactstrap";

// core components

function IntroHeader() {
  let pageHeader = React.createRef();
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
  React.useEffect(() => {
    if (window.innerWidth > 991) {
      const updateScroll = () => {
        let windowScrollTop = window.pageYOffset / 3;
        pageHeader.current.style.transform =
          "translate3d(0," + windowScrollTop + "px,0)";
      };
      window.addEventListener("scroll", updateScroll);
      return function cleanup() {
        window.removeEventListener("scroll", updateScroll);
      };
    }
  });
  return (
    <>
      <div className="page-header page-header-small">
        <div
          className="page-header-image"
          style={{
            backgroundImage: "url(" + require("assets/img/pages/slide_3.jpg") + ")"
          }}
          ref={pageHeader}
        ></div>
        <Container>
          <Row>
            <Col md={6} xs={12}>
              <Card className="text-black text-left position-relative">
                <CardBody>
                  <Form id="contact-form" method="post" role="form">
                    <label>Họ tên </label>
                    <InputGroup
                      className={nameFocus ? "input-group-focus" : ""}
                    >
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="now-ui-icons users_circle-08"></i>
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input
                        aria-label="Your Name..."
                        autoComplete="name"
                        placeholder="Your Name..."
                        type="text"
                        onFocus={() => setNameFocus(true)}
                        onBlur={() => setNameFocus(false)}
                      ></Input>
                    </InputGroup>
                    <label>Email</label>
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
                        placeholder="Email Here..."
                        type="email"
                        onFocus={() => setEmailFocus(true)}
                        onBlur={() => setEmailFocus(false)}
                      ></Input>
                    </InputGroup>
                    <FormGroup>
                      <label>Lời nhắn</label>
                      <Input
                        id="message"
                        name="message"
                        rows="6"
                        style={{ borderWidth: 1, borderColor: '#ccc' }}
                        type="textarea"
                      ></Input>
                    </FormGroup>
                  </Form>
                </CardBody>
                <Col xs={12} style={{
                  position: 'absolute',
                  bottom: "-24px"

                }} >
                  <div className="submit text-center">
                    <Button
                      className="btn-raised btn-round my-0 btn-lg"
                      color="info"
                      defaultValue="Contact Us"
                      type="submit"
                      style={{
                        paddingLeft: 72,
                        paddingRight: 72,
                      }}
                      onClick={()=>{
                        window.alert("Cảm ơn phản hồi của bạn về chúng tôi! Chúng tôi sẽ liên hệ với bạn ngay khi có thể!")
                      }}
                    >
                      <i class="now-ui-icons ui-1_send mr-2 "></i>
                      Gửi
                    </Button>
                  </div>
                </Col>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default IntroHeader;
