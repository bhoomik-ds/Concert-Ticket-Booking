import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React, { useState } from "react";

/* Common Layout Components */
import Header from "./components/Header";
import Footer from "./components/Footer";
import Banner from "./components/Banner";
import EventInfo from "./components/EventInfo";

/* Ticket Flow Components */
import Layout from "./components/Layout";
import StepIndicator from "./components/StepIndicator";
import EventHeader from "./components/EventHeader";
import TicketList from "./components/TicketList";
import Button from "./components/Button";

/* Ticket Data */
import { tickets as initialTickets } from "./data/tickets";

/* Ticket Page Wrapper */
function TicketPage() {
  const [selectedTickets, setSelectedTickets] = useState({});

  const handleAdd = (id) => {
    const totalCount = Object.values(selectedTickets).reduce(
      (sum, qty) => sum + qty,
      0
    );
    if (totalCount >= 10) return;

    setSelectedTickets((prev) => ({
      ...prev,
      [id]: (prev[id] || 0) + 1,
    }));
  };

  const handleRemove = (id) => {
    setSelectedTickets((prev) => {
      if (!prev[id]) return prev;
      const updated = { ...prev };
      if (updated[id] > 1) {
        updated[id] = updated[id] - 1;
      } else {
        delete updated[id];
      }
      return updated;
    });
  };

  const totalTickets = Object.values(selectedTickets).reduce(
    (sum, qty) => sum + qty,
    0
  );

  const totalPrice = Object.entries(selectedTickets).reduce((sum, [id, qty]) => {
    const ticket = initialTickets.find((t) => t.id === parseInt(id));
    const numericPrice = parseInt(ticket.price.replace(/[^\d]/g, ""));
    return sum + numericPrice * qty;
  }, 0);

  return (
    <Layout>
      <StepIndicator />
      <EventHeader
        title="Junagadh’s Grand Pawandeep Rajan Live Concert 2026"
        venue="Dharmik Farm House, Bhavnath, Junagadh"
        datetime="17th Jan 2026"
      />

      <TicketList
        tickets={initialTickets}
        selectedTickets={selectedTickets}
        onAdd={handleAdd}
        onRemove={handleRemove}
      />

      <div className="mt-6 text-center space-y-2">
        <p className="text-lg font-semibold text-gray-700">
          Total: ₹{totalPrice.toLocaleString()} • {totalTickets} Ticket
          {totalTickets !== 1 ? "s" : ""}
        </p>

        <Button disabled={totalTickets === 0} onClick={() => window.location.href = "https://razorpay.me/@bhoomikramanikbhaisorathiya" } className={`w-full sm:w-auto ${ totalTickets > 0 ? "bg-green-600 text-white hover:bg-green-700" : "bg-gray-400 text-white cursor-not-allowed" }`} > Proceed </Button>
      </div>
    </Layout>
  );
}

/* Main App with Routing */
function App() {
  return (
    <Router>
      <Header />
      <Routes>
        {/* Home */}
        <Route
          path="/"
          element={
            <>
              <Banner />
              <EventInfo />
            </>
          }
        />

        {/* Ticket Pages */}
        <Route path="/TicketBooking" element={<TicketPage />} />
        <Route path="/TicketBooking" element={<TicketPage />} />
        <Route path="/TicketBooking" element={<TicketPage />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
