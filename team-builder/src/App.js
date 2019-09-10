import React, { useState } from 'react';
import './App.css';
import Card from './Component/Card'

function App() {
  const [card, newCard] = useState([
    {
      name: 'Jacob Williams',
      email: 'jawilliamsdev@gmail.com',
      role: 'Full-stacks Web Dev',
    },
    {
      name: 'Jacob Williams #2',
      email: 'jawilliamsdev@gmail.com',
      role: 'Full-stacks Web Dev',
    },
    {
      name: 'Jacob Williams #3',
      email: 'jawilliamsdev@gmail.com',
      role: 'Full-stacks Web Dev',
    },
    {
      name: 'Jacob Williams #4',
      email: 'jawilliamsdev@gmail.com',
      role: 'Full-stacks Web Dev',
    },
    {
      name: 'Jacob Williams #5',
      email: 'jawilliamsdev@gmail.com',
      role: 'Full-stacks Web Dev',
    }
  ])





  return (
    <div className="App">
      <Card card={card}/>
    </div>
  );
}

export default App;
