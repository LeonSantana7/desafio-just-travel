import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Container } from "react-bootstrap";

import HomePage from "./pages/HomePage";
import TicketDetailPage from "./pages/TicketDetailPage";
import Header from "./components/Header";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Container className="py-4">
        {" "}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/ticket/:id" element={<TicketDetailPage />} />
        </Routes>
      </Container>
    </BrowserRouter>
  );
}

export default App;
