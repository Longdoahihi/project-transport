/*eslint-disable*/
import React from "react";

// reactstrap components
import { Container } from "reactstrap";

// core components

function Footer() {
  return (
    <>
      <footer className="footer">
        <Container>
          <div>
            {/* <ul>
              <li>
                <a
                  href="https://www.creative-tim.com?ref=nuk-pro-react-footer"
                  target="_blank"
                >
                  Creative Tim
                </a>
              </li>
              <li>
                <a
                  href="http://presentation.creative-tim.com?ref=nuk-pro-react-footer"
                  target="_blank"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="http://blog.creative-tim.com?ref=nuk-pro-react-footer"
                  target="_blank"
                >
                  Blog
                </a>
              </li>
            </ul> */}
          </div>
          {/* <div className="copyright" id="copyright">
            © {new Date().getFullYear()}, Thiết kế{" "}
            và triển khai bởi{" "}
            <a
              href="#"
              target="_blank"
            >
              HTTT02 [ NCKH-2023 ]
            </a>
            .
          </div> */}
        </Container>
      </footer>
    </>
  );
}

export default Footer;
