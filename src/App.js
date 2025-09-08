import React from "react";
import Card from "./Card";
import './App.css';

function App() {
  return (
    <div className="container">
      <Card
        image="https://via.placeholder.com/150"
        title="Square Card"
        description="This is a square-shaped card."
      />
    </div>
  );
}

export default App;