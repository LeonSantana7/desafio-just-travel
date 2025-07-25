import { useEffect, useState } from "react";
import { useParams, Link as RouterLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import axios from "axios";
import {
  Row,
  Col,
  Image,
  Spinner,
  Alert,
  Button,
  Card,
  Badge,
} from "react-bootstrap";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import {
  BsArrowLeft,
  BsGeoAlt,
  BsCalendarEvent,
  BsTicket,
  BsChevronDown,
} from "react-icons/bs";

import { addToCart } from "../redux/cartSlice";
import type { Ticket } from "../types/ticket";
import { getCoordinates } from "../utils/geo";

const TicketDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const dispatch = useDispatch();
  const [ticket, setTicket] = useState<Ticket | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    if (!id) return;
    const fetchTicket = async () => {
      try {
        setLoading(true);
        const response = await axios.get(
          `https://65b98494b71048505a8aea91.mockapi.io/api/v1/tickets/${id}`
        );
        setTicket(response.data);
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
      } catch (err) {
        setError("Não foi possível carregar os detalhes do ingresso.");
      } finally {
        setLoading(false);
      }
    };
    fetchTicket();
  }, [id]);

  const handleAddToCart = () => {
    if (ticket) {
      dispatch(addToCart(ticket));
      alert(`${ticket.name} foi adicionado ao carrinho!`);
    }
  };

  if (loading)
    return (
      <div className="text-center py-5">
        <Spinner animation="border" />
      </div>
    );
  if (error) return <Alert variant="danger">{error}</Alert>;
  if (!ticket) return <Alert variant="warning">Ingresso não encontrado.</Alert>;

  const coordinates = getCoordinates(ticket.location);
  const formattedDiscountPrice = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(ticket.price.discount);

  return (
    <div className="ticket-detail-page">
      <div className="mb-4">
        <RouterLink
          to="/"
          className="text-decoration-none text-muted d-flex align-items-center mb-2"
        >
          <BsArrowLeft className="me-2" /> {ticket.name}
        </RouterLink>
        <p className="text-muted d-flex align-items-center">
          <BsGeoAlt className="me-1" /> GetYourGuide Tours & Tickets GmbH
        </p>
      </div>

      <div className="ticket-hero-container mb-4">
        <Image src={ticket.image} className="ticket-hero-image" />
        <Button variant="light" className="view-photos-btn">
          Visualizar mais fotos
        </Button>
      </div>

      <Row>
        <Col lg={8}>
          <div className="mb-4">
            <Badge className="rating-badge me-2">{ticket.rating.value}</Badge>
            <span className="rating-text">Excellent</span>
            <span className="reviews-count ms-2">
              ({ticket.rating.reviewsCount} Reviews)
            </span>
          </div>
          <h4 className="fw-bold">Sobre o Ingresso selecionado</h4>
          <p>{ticket.description}</p>

          <h4 className="fw-bold mt-4">Localização</h4>
          <div
            style={{ height: "300px", width: "100%" }}
            className="shadow-sm rounded mt-3"
          >
            <MapContainer
              center={coordinates}
              zoom={13}
              style={{ height: "100%", width: "100%", borderRadius: "8px" }}
            >
              <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
              <Marker position={coordinates}>
                <Popup>{ticket.name}</Popup>
              </Marker>
            </MapContainer>
          </div>
        </Col>

        <Col lg={4}>
          <Card className="purchase-box shadow-sm">
            <Card.Body>
              <div className="info-box mb-3">
                <div className="d-flex justify-content-between align-items-center">
                  <div>
                    <div className="info-box-label">Data do Ingresso</div>
                    <div className="info-box-value">
                      <BsCalendarEvent /> 27 de Julho, 2025
                    </div>
                  </div>
                  <BsChevronDown className="text-muted" />
                </div>
              </div>

              <div className="info-box mb-4">
                <div className="d-flex justify-content-between align-items-center">
                  <div>
                    <div className="info-box-label">Ingressos</div>
                    <div className="info-box-value">
                      <BsTicket /> 02 Ingressos
                    </div>
                  </div>
                  <BsChevronDown className="text-muted" />
                </div>
              </div>

              <div className="d-flex justify-content-between small text-muted">
                <span>01 Ingresso Infantil</span>
                <span>
                  {new Intl.NumberFormat("pt-BR", {
                    style: "currency",
                    currency: "BRL",
                  }).format(ticket.price.discount / 2)}
                </span>
              </div>
              <div className="d-flex justify-content-between small text-muted mb-3">
                <span>01 Ingresso Adulto</span>
                <span>
                  {new Intl.NumberFormat("pt-BR", {
                    style: "currency",
                    currency: "BRL",
                  }).format(ticket.price.discount / 2)}
                </span>
              </div>

              <hr />

              <div className="d-flex justify-content-between align-items-center mb-3">
                <span className="fw-bold">Valor total</span>
                <span className="price-final">{formattedDiscountPrice}</span>
              </div>

              <div className="d-grid">
                <Button
                  variant="primary"
                  className="fw-bold saber-mais-btn"
                  onClick={handleAddToCart}
                >
                  Comprar Ingresso
                </Button>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default TicketDetailPage;
