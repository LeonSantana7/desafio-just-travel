import { Offcanvas, Stack, Button, Image } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import type { RootState, AppDispatch } from "../redux/store";
import { removeFromCart } from "../redux/cartSlice";
import { BsTrash } from "react-icons/bs";

interface CartProps {
  show: boolean;
  handleClose: () => void;
}

const Cart = ({ show, handleClose }: CartProps) => {
  const dispatch: AppDispatch = useDispatch();
  const cartItems = useSelector((state: RootState) => state.cart.items);

  const subtotal = cartItems.reduce(
    (total, item) => total + item.ticket.price.discount * item.quantity,
    0
  );
  const discount = subtotal * 0.07;
  const total = subtotal - discount;

  return (
    <Offcanvas
      show={show}
      onHide={handleClose}
      placement="end"
      style={{ width: "450px" }}
    >
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>Ingressos</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        {cartItems.length === 0 ? (
          <p>Seu carrinho está vazio.</p>
        ) : (
          <Stack gap={4}>
            {cartItems.map((item) => (
              <div key={item.id}>
                <div className="d-flex gap-3">
                  <Image
                    src={item.ticket.image}
                    style={{
                      width: "80px",
                      height: "80px",
                      objectFit: "cover",
                      borderRadius: "8px",
                    }}
                  />
                  <div className="w-100">
                    <div className="d-flex justify-content-between">
                      <span className="fw-bold">{item.ticket.name}</span>
                      <Button
                        variant="light"
                        size="sm"
                        onClick={() => dispatch(removeFromCart(item.ticket.id))}
                      >
                        <BsTrash />
                      </Button>
                    </div>
                    <p className="text-muted small mb-1">15/09/2022</p>
                    <p className="text-muted small">
                      1 Adulto: R$500,00 2 Crianças: R$234,33
                    </p>
                  </div>
                </div>
                <div className="d-flex justify-content-between align-items-center mt-2">
                  <span>Qtd {item.quantity.toString().padStart(2, "0")}</span>
                  <span className="fw-bold">
                    {new Intl.NumberFormat("pt-BR", {
                      style: "currency",
                      currency: "BRL",
                    }).format(item.ticket.price.discount * item.quantity)}
                  </span>
                </div>
              </div>
            ))}

            <hr />

            <div>
              <div className="d-flex justify-content-between">
                <span>Subtotal</span>
                <span>
                  {new Intl.NumberFormat("pt-BR", {
                    style: "currency",
                    currency: "BRL",
                  }).format(subtotal)}
                </span>
              </div>
              <div className="d-flex justify-content-between text-success">
                <span>Desconto (7%)</span>
                <span>
                  -
                  {new Intl.NumberFormat("pt-BR", {
                    style: "currency",
                    currency: "BRL",
                  }).format(discount)}
                </span>
              </div>
              <div className="d-flex justify-content-between fw-bold mt-2">
                <span>Valor total</span>
                <span>
                  {new Intl.NumberFormat("pt-BR", {
                    style: "currency",
                    currency: "BRL",
                  }).format(total)}
                </span>
              </div>
            </div>

            <Button variant="primary" className="w-100 fw-bold saber-mais-btn">
              Ir para o check out
            </Button>
          </Stack>
        )}
      </Offcanvas.Body>
    </Offcanvas>
  );
};

export default Cart;
