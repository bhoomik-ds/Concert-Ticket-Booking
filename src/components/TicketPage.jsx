import React, { useState } from "react";
import TicketList from "./TicketList";
import { tickets } from "./data/tickets";

const TicketPage = () => {
  const [selectedTickets, setSelectedTickets] = useState({});

  const handleAdd = (id) => {
    setSelectedTickets((prev) => ({
      ...prev,
      [id]: (prev[id] || 0) + 1,
    }));
  };

  const handleRemove = (id) => {
    setSelectedTickets((prev) => {
      if (!prev[id]) return prev;

      const updated = { ...prev };

      if (updated[id] === 1) {
        delete updated[id];
      } else {
        updated[id] -= 1;
      }

      return updated;
    });
  };

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">Ticket Page</h1>
      
      {/* ✅ REAL CONNECTION */}
      <TicketList
        tickets={tickets}
        selectedTickets={selectedTickets}
        onAdd={handleAdd}
        onRemove={handleRemove}
      />

      {/* Debug output */}
      <p className="mt-4 text-sm text-gray-600">
        Selected Tickets: {JSON.stringify(selectedTickets)}
      </p>
    </div>
  );
};

export default TicketPage;
