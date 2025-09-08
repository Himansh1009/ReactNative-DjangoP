import React from "react";
import Card from "./Card";
import Event from "./api";
import './App.css';

function App() {
  return (
    <div className="container">
      {Event.map((event) => (
        <Card
          key={event.id}
          image="https://via.placeholder.com/150"
          title={event.name}
          description={`Time: ${event.time}, Faculty: ${event.faculty}`}
        />
      ))}
    </div>
  );
}

export default App;