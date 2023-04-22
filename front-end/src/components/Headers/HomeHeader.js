import React from "react";

// reactstrap components
import { Row, Col } from "reactstrap";

// core components

function HomeHeader() {
  let pageHeader = React.createRef();
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
      <div className="page-header">
        <div
          className="page-header-image"
          style={{
            backgroundImage: "url(" + require("assets/img/pages/slide_2.jpg") + ")"
          }}
          ref={pageHeader}
        ></div>
        <div className="content-center">
          <Row>
            <Col className="ml-auto mr-auto text-center" md="10">
              <div class="card rounded flex justify-content-between form-lookup content-center" style={{
                backgroundColor: 'rgba(0,0,0,0.5)'
              }}>
                <form className="form-lookup form-control-success">
                  <div class="card-body pt-0 ">
                    <div className="card pt-0 bg-transparent">
                      <Row className="justify-content-center">
                        <Col
                          md="8"
                        >
                          <div className="mb-4 custom-rounded rounded-bottom  bg-white">
                            <h3 className="py-2 mb-1" style={{ color: 'black' }}> Tra cứu vận đơn</h3>
                          </div>
                          <div className=" mb-4 row">
                            <div className="col-12 text-left font-weight-bold">Mã phiếu gửi</div>
                            <div className="col-12 text-left font-italic">(Tra nhiều bill bằng cách thêm dấu phẩy giữa các bill)</div>

                          </div>
                          <div className="mb-4 text-left font-italic">
                            <input type="text" class="form-control has-success form-control-lg bg-white" placeholder="Nhập mã phiếu gửi..." />
                          </div>
                        </Col>
                      </Row>
                    </div>
                  </div>
                </form>
                <Row className="btn-search">
                  <Col md={12} className="">
                    <button class="btn btn-success btn-lg btn-round my-0 pull-center" type="button">
                      <i class="now-ui-icons ui-1_zoom-bold "  ></i> Tra cứu
                    </button>
                  </Col>
                </Row>
              </div>
            </Col>
          </Row>
        </div>
      </div>
    </>
  );
}

export default HomeHeader;
