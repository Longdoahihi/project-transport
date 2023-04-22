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
  // const [buyButtonColor, setBuyButtonColor] = React.useState(
  //   (document.documentElement.scrollTop > 499 || document.body.scrollTop) > 499
  //     ? "info"
  //     : "neutral"
  // );
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
                <NavLink
                  href="/news"
                >
                  <p>Tin tức</p>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  href="/introduction"
                >
                  <p>Giới thiệu</p>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  href="/contact"
                >
                  <p>Liên hệ</p>
                </NavLink>
              </NavItem>

              <NavItem>
                <NavLink
                  href="/login-page"
                >
                  <i class="now-ui-icons business_globe"></i>
                  <p>Đăng nhập</p>
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
