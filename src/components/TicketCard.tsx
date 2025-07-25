import { Button, Badge } from "react-bootstrap";
import type { Ticket } from "../types/ticket";
import { Link } from "react-router-dom";
import { BsHeart, BsGeoAlt, BsArrowRight } from "react-icons/bs";

interface TicketCardProps {
  ticket: Ticket;
}

const TicketCard = ({ ticket }: TicketCardProps) => {
  const formattedDiscountPrice = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(ticket.price.discount);

  const formattedFullPrice = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(ticket.price.full);

  return (
    <div className="ticket-list-item">
      <div className="ticket-section-image">
        <Link to={`/ticket/${ticket.id}`}>
          <img src={ticket.image} alt={ticket.name} className="ticket-image" />
        </Link>
        <div className="ticket-tag">Ingresso</div>
        <div className="ticket-wishlist">
          <BsHeart />
        </div>
      </div>

      <div className="ticket-section-content">
        <h5 className="ticket-title">{ticket.name}</h5>
        <p className="ticket-provider">
          <BsGeoAlt className="me-1" /> GetYourGuide Tours & Tickets GmbH
        </p>
        <div className="ticket-rating">
          <Badge className="rating-badge">{ticket.rating.value}</Badge>
          <span className="rating-text">Excellent</span>
          <span className="reviews-count">
            ({ticket.rating.reviewsCount} Reviews)
          </span>
        </div>
      </div>

      <div className="ticket-section-price">
        <div className="price-from">de {formattedFullPrice}</div>
        <div className="price-final">{formattedDiscountPrice}</div>
        <Link to={`/ticket/${ticket.id}`} className="d-grid">
          <Button variant="primary" size="sm" className="mt-2 saber-mais-btn">
            Saber mais <BsArrowRight className="ms-1" />
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default TicketCard;
