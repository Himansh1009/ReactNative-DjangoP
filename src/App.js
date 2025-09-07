import React from "react";
import Card from "./Card";
import './App.css';
import './index.css';

function App() {
  return (
    <>
      <h1>Card Example</h1>
      <Card
        image="https://via.placeholder.com/150"
        title="Card Title"
        description="This is a description for the card."
      />
    </>
  );
}

export default App;