import { useState } from "react";
import { Navbar, Container, Nav, Button, Badge } from "react-bootstrap";
import { useSelector } from "react-redux";
import type { RootState } from "../redux/store";
import { LinkContainer } from "react-router-bootstrap";
import Cart from "./Cart";

import { BsQuestionCircle, BsPerson, BsCart3 } from "react-icons/bs";

import flagBr from "../assets/flag-br.png";

const Header = () => {
  const cartItems = useSelector((state: RootState) => state.cart.items);
  const cartItemCount = cartItems.length;

  const [showCart, setShowCart] = useState(false);

  const dollarQuote = 5.83;

  return (
    <>
      <Navbar bg="white" expand="lg" className="shadow-sm py-2">
        <Container>
          <LinkContainer to="/">
            <Navbar.Brand
              style={{
                color: "#0A2156",
                fontWeight: "bold",
                fontSize: "1.5rem",
              }}
            >
              logoipsum
            </Navbar.Brand>
          </LinkContainer>

          <Nav
            className="ms-auto d-flex flex-row align-items-center"
            style={{ gap: "1.5rem" }}
          >
            <div className="nav-item-text d-none d-lg-block">
              Cotação dólar hoje:{" "}
              {new Intl.NumberFormat("pt-BR", {
                style: "currency",
                currency: "BRL",
              }).format(dollarQuote)}
            </div>

            <BsQuestionCircle className="nav-icon d-none d-lg-block" />

            <img src={flagBr} alt="Bandeira do Brasil" className="flag-icon" />

            <Nav.Link href="#login" className="d-flex align-items-center p-0">
              <BsPerson className="nav-icon" />
              <span className="ms-2">Entrar</span>
            </Nav.Link>

            <Button
              variant="primary"
              className="cart-button"
              onClick={() => setShowCart(true)}
            >
              <BsCart3 size={20} />
              <Badge pill bg="white" text="primary" className="ms-2">
                {cartItemCount}
              </Badge>
            </Button>
          </Nav>
        </Container>
      </Navbar>

      <Cart show={showCart} handleClose={() => setShowCart(false)} />
    </>
  );
};

export default Header;
