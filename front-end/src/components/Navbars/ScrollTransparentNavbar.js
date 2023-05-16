import React from "react";
import { Link } from "react-router-dom";
// reactstrap components
import {
  Button,
  Collapse,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  NavbarBrand,
  Navbar,
  NavItem,
  Nav,
  Container,
  UncontrolledTooltip,
  NavLink,
  UncontrolledCollapse,
} from "reactstrap";

function ScrollTransparentNavbar({ isOpenNavbar = false }) {
  const [collapseOpen, setCollapseOpen] = React.useState(false);
  const [navbarColor, setNavbarColor] = React.useState(
    ((document.documentElement.scrollTop > 499 || document.body.scrollTop) > 499) || isOpenNavbar
      ? ""
      : " navbar-transparent"
  );
  React.useEffect(() => {
    const updateNavbarColor = () => {
      if (
        document.documentElement.scrollTop > 499 ||
        document.body.scrollTop > 499 || isOpenNavbar
      ) {
        setNavbarColor("");
        // setBuyButtonColor("info");
      } else if (
        document.documentElement.scrollTop < 500 ||
        document.body.scrollTop < 500
      ) {
        setNavbarColor(" navbar-transparent");
        // setBuyButtonColor("neutral");
      }
    };
    window.addEventListener("scroll", updateNavbarColor);
    return function cleanup() {
      window.removeEventListener("scroll", updateNavbarColor);
    };
  });
  return (
    <>
      {collapseOpen ? (
        <div
          id="bodyClick"
          onClick={() => {
            document.documentElement.classList.toggle("nav-open");
            setCollapseOpen(false);
          }}
        />
      ) : null}
      <Navbar className={"fixed-top" + navbarColor} color="white" expand="lg">
        <Container>
          <div className="navbar-translate">
            <NavbarBrand
              href="/"
            >
              Mien Bac Transport
            </NavbarBrand>
            <button
              className="navbar-toggler"
              id="example-navbar-transparent"
              type="button"
            >
              <span className="navbar-toggler-bar bar1"></span>
              <span className="navbar-toggler-bar bar2"></span>
              <span className="navbar-toggler-bar bar3"></span>
            </button>
          </div>
          <UncontrolledCollapse
            navbar
            toggler="#example-navbar-transparent"
          >
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink>
                  <Link
                    to={"/news"}
                  >
                    <p>Tin tức</p>
                  </Link>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink>
                  <Link
                    to="/introduction"
                  >
                    <p>Giới thiệu</p>
                  </Link>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink>
                  <Link
                    to="/contact"
                  >
                    <p>Liên hệ</p>
                  </Link>
                </NavLink>
              </NavItem>

              <NavItem>
                <NavLink>
                  <Link
                    to="/login-page"
                  >
                    <i class="now-ui-icons business_globe"></i>
                    <p>Đăng nhập / Đăng ký</p>
                  </Link>
                </NavLink>
              </NavItem>
            </Nav>
          </UncontrolledCollapse>
        </Container>
      </Navbar>
    </>
  );
}

export default ScrollTransparentNavbar;
