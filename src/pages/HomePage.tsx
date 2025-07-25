import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import {
  Row,
  Col,
  Form,
  Pagination,
  Spinner,
  Alert,
  Stack,
} from "react-bootstrap";
import { BsSearch } from "react-icons/bs";

import type { AppDispatch, RootState } from "../redux/store";
import { setTickets } from "../redux/ticketsSlice";

import TicketCard from "../components/TicketCard";
import FilterSidebar from "../components/FilterSidebar";

const HomePage = () => {
  const dispatch: AppDispatch = useDispatch();
  const { allTickets, loading } = useSelector(
    (state: RootState) => state.tickets
  );
  const cartItems = useSelector((state: RootState) => state.cart.items);

  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const ticketsPerPage = 6;

  useEffect(() => {
    const fetchTickets = async () => {
      try {
        const response = await axios.get(
          "https://65b98494b71048505a8aea91.mockapi.io/api/v1/tickets"
        );
        dispatch(setTickets(response.data));
      } catch (error) {
        console.error("Erro ao buscar ingressos:", error);
      }
    };
    if (allTickets.length === 0) {
      fetchTickets();
    }
  }, [dispatch, allTickets.length]);

  const cartItemIds = new Set(cartItems.map((item) => item.id));

  const filteredTickets = allTickets
    .filter((ticket) => !cartItemIds.has(ticket.id))
    .filter(
      (ticket) =>
        ticket.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        ticket.location.toLowerCase().includes(searchTerm.toLowerCase())
    );

  const indexOfLastTicket = currentPage * ticketsPerPage;
  const indexOfFirstTicket = indexOfLastTicket - ticketsPerPage;
  const currentTickets = filteredTickets.slice(
    indexOfFirstTicket,
    indexOfLastTicket
  );

  const totalPages = Math.ceil(filteredTickets.length / ticketsPerPage);

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  return (
    <Row>
      <Col md={4} lg={3} className="d-none d-md-block">
        <FilterSidebar />
      </Col>

      <Col md={8} lg={9}>
        <Row className="mb-4 justify-content-center">
          <Col md={10} lg={8}>
            <div className="search-bar-container">
              <BsSearch className="search-icon-left" />
              <Form.Control
                type="text"
                placeholder="Busque por atração"
                className="search-input"
                value={searchTerm}
                onChange={(e) => {
                  setSearchTerm(e.target.value);
                  setCurrentPage(1);
                }}
              />
              <BsSearch className="search-icon-right" />
            </div>
          </Col>
        </Row>

        {loading ? (
          <div className="text-center py-5">
            <Spinner animation="border" variant="primary" />
            <p className="mt-2">Carregando ingressos...</p>
          </div>
        ) : (
          <>
            <Stack gap={3}>
              {currentTickets.map((ticket) => (
                <TicketCard key={ticket.id} ticket={ticket} />
              ))}
            </Stack>

            {filteredTickets.length === 0 && !loading && (
              <Alert variant="info" className="mt-4">
                Nenhum ingresso encontrado.
              </Alert>
            )}

            {totalPages > 1 && (
              <Pagination className="justify-content-center mt-4">
                {[...Array(totalPages).keys()].map((number) => (
                  <Pagination.Item
                    key={number + 1}
                    active={number + 1 === currentPage}
                    onClick={() => paginate(number + 1)}
                  >
                    {number + 1}
                  </Pagination.Item>
                ))}
              </Pagination>
            )}
          </>
        )}
      </Col>
    </Row>
  );
};

export default HomePage;
