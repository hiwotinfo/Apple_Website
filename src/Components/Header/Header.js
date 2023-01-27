
import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Row from "react-bootstrap/Row";
import Navbar from "react-bootstrap/Navbar";
import Logo from "../../images/icons/logo.png";
import Search from '../../images/icons/search-icon.png';
import Cart from '../../images/icons/cart.png';
import '../../js/bootstrap'

function Header() {
  return (
      <div className="nav-wrapper fixed-top">
        <div className=" header-list">
          <Navbar
            bg="black"
            gap={"30"}
            variant={"dark"}
            item-align={"baseline"}
            expand="lg"
            className="header-wrapper"
          >
            <Container>
              <Navbar.Brand href="#home navbar-nav">
                <img className="logo-link" src={Logo} alt="logo" />
              </Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-navn navbar-nav .nav-link">
                <Nav className="me-auto nav-link navbar-light">
                <Nav.Link href="https://www.apple.com/us/shop/goto/store">Store</Nav.Link>
                  <Nav.Link href="https://www.apple.com/mac/">Mac</Nav.Link>
                  <Nav.Link href="https://www.apple.com/ipad/">ipad</Nav.Link>
                  <Nav.Link href="https://www.apple.com/iphone/">iphone</Nav.Link>
                  <Nav.Link href="https://www.apple.com/watch/">Watch</Nav.Link>
                  <Nav.Link href="https://www.apple.com/airpods/">AirPods</Nav.Link>
                  <Nav.Link href="https://www.apple.com/tv-home/">Tv & Home</Nav.Link>
                  <Nav.Link href="https://www.apple.com/services/">Only on Apple</Nav.Link>
                  <Nav.Link href="https://www.apple.com/us/shop/goto/buy_accessories">Accessories</Nav.Link>
                  <Nav.Link href="https://support.apple.com/">Support</Nav.Link>
                  <Navbar.Brand href="#home">
                    <img className="search-link" src={Search} alt="logo" />
                  </Navbar.Brand>
                  <Navbar.Brand href="#home">
                    <img className="cart-link" src={Cart} alt="logo" />
                  </Navbar.Brand>
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
        </div>
      </div>
  );
}
export default Header;