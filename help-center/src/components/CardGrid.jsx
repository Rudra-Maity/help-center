// src/components/CardGrid.jsx
import React from 'react';

const CardGrid = ({ cards }) => {
  return (
    <div style={gridContainerStyle}>
      {cards.map((card) => (
        <div key={card.id} style={gridItemStyle}>
          <div style={{display:'flex',flexDirection:"column",textAlign:"left",}}>
          <h2 style={{borderBottom:"1px solid", marginLeft:"10px"}}>
            {card.title}</h2>
            <hr />
          <p style={{ marginLeft:"10px"}}>{card.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

const gridContainerStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(2, 1fr)',
  gap: '20px',
  padding: '20px',
  backgroundColor:"rgba(0,0,0,.03)"
};

const gridItemStyle = {
  // padding: '20px',
  border: "1px solid",
  borderRadius: '5px',
 
};

export default CardGrid;
