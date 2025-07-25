import { Form, Button, ProgressBar } from "react-bootstrap";
import { FaStar } from "react-icons/fa";
import { BsBuilding, BsHouseDoor, BsKey } from "react-icons/bs";

const FilterSidebar = () => {
  return (
    <div className="filter-sidebar">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h4 className="fw-bold">Filtro</h4>
        <a href="#" className="text-decoration-none small">
          Limpar todos os filtros
        </a>
      </div>

      <div className="filter-section">
        <h6 className="fw-bold">Preço</h6>
        <div className="price-options">
          <Button variant="primary" size="sm">
            R$ 10,00 - R$ 390,00
          </Button>
          <Button variant="outline-secondary" size="sm">
            R$ 10,00 - R$ 390,00
          </Button>
          <Button variant="outline-secondary" size="sm">
            R$ 10,00 - R$ 390,00
          </Button>
          <Button variant="outline-secondary" size="sm">
            R$ 10,00 - R$ 390,00
          </Button>
        </div>
      </div>

      <div className="filter-section">
        <h6 className="fw-bold">Tipo de propriedade</h6>
        <div className="star-rating-options">
          <div>
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar /> <span className="text-muted small">(134)</span>
          </div>
          <div>
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar /> <span className="text-muted small">(134)</span>
          </div>
          <div>
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar /> <span className="text-muted small">(72)</span>
          </div>
          <div>
            <FaStar />
            <FaStar />
            <FaStar /> <span className="text-muted small">(78)</span>
          </div>
          <div>
            <FaStar />
            <FaStar /> <span className="text-muted small">(27)</span>
          </div>
        </div>
      </div>

      <div className="filter-section">
        <h6 className="fw-bold">Comodidades</h6>
        <Form>
          <Form.Check type="checkbox" id="wifi" label="Wi-Fi" />
          <Form.Check type="checkbox" id="cozinha" label="Cozinha" />
          <Form.Check type="checkbox" id="maquina" label="Máquina de Lavar" />
          <Form.Check type="checkbox" id="ar" label="Ar-condicionado" />
          <Form.Check type="checkbox" id="secadora" label="Secadora" />
        </Form>
      </div>

      <div className="filter-section">
        <h6 className="fw-bold">Tipo de propriedade</h6>
        <div className="property-type-options">
          <Button
            variant="primary"
            className="w-100 text-start d-flex align-items-center"
          >
            <BsHouseDoor className="me-2" /> Casa (546)
          </Button>
          <Button
            variant="outline-secondary"
            className="w-100 text-start d-flex align-items-center"
          >
            <BsBuilding className="me-2" /> Apartamento (234)
          </Button>
          <Button
            variant="outline-secondary"
            className="w-100 text-start d-flex align-items-center"
          >
            <BsKey className="me-2" /> Hotel (23)
          </Button>
        </div>
      </div>

      <div className="filter-section">
        <h6 className="fw-bold">Review Score</h6>
        <div className="review-score">
          <span>9+</span> <ProgressBar now={80} label="Excelente (343)" />
          <span>8+</span> <ProgressBar now={70} label="Muito bom (543)" />
          <span>7+</span> <ProgressBar now={60} label="Bom (543)" />
          <span>6+</span> <ProgressBar now={40} label="Ruim (543)" />
          <span>5+</span> <ProgressBar now={20} label="Péssimo (14)" />
        </div>
      </div>
    </div>
  );
};

export default FilterSidebar;
