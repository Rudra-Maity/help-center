// src/App.jsx
import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import SearchContainer from './components/SearchContainer';
import CardGrid from './components/CardGrid';
import Footer from './components/Footer';

const App = () => {
  const [cards, setCards] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    fetch('/api/cards')
      .then((response) => response.json())
      .then((data) => setCards(data))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  const filteredCards = cards.filter((card) =>
    card.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <Header />
      <SearchContainer searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <CardGrid cards={filteredCards} />
      <Footer />
    </div>
  );
};

export default App;
