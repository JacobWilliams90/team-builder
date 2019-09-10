import React, { useState } from "react";
import "./App.css";
import Card from "./Component/Card";
import Form from "./Component/Form";

function App() {
  const [card, newCard] = useState([
    {
      name: "Jacob Williams",
      email: "jawilliamsdev@gmail.com",
      position: "Full-stacks Web Dev"
    }
  ]);

  return (
    <div className="App">
      <Form card={card} newCard={newCard} />
      <Card card={card} />
    </div>
  );
}

export default App;
