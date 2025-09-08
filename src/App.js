import React from "react";
import Card from "./Card"; // Import the updated Card component
import './App.css'; // Import your main app styling

function App() {
  const cardsData = [
    {
      title: "React Workshop",
      productName: "Learn React",
      timeLeft: "11 Min Left",
      avatars: [
        "https://via.placeholder.com/30",
        "https://via.placeholder.com/30",
        "https://via.placeholder.com/30"
      ],
      plusOthers: "+8"
    },
    {
      title: "Django Workshop",
      productName: "Learn Django",
      timeLeft: "20 Min Left",
      avatars: [
        "https://via.placeholder.com/30",
        "https://via.placeholder.com/30"
      ],
      plusOthers: "+5"
    },
    {
      title: "Barista Workshop",
      productName: "Learn Coffee Art",
      timeLeft: "15 Min Left",
      avatars: [
        "https://via.placeholder.com/30",
        "https://via.placeholder.com/30",
        "https://via.placeholder.com/30"
      ],
      plusOthers: "+3"
    }
  ];

  return (
    <div className="App">
      <h1>Workshop Cards</h1>
      <div className="cards-container">
        {cardsData.map((card, index) => (
          <Card
            key={index}
            title={card.title}
            productName={card.productName}
            timeLeft={card.timeLeft}
            avatars={card.avatars}
            plusOthers={card.plusOthers}
          />
        ))}
      </div>
    </div>
  );
}

export default App;