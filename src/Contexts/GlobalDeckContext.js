import React from 'react';

// trocar o null por uma função de callback que retorna o localStorage
// quando estiver salvando no localStorage
export const DeckContext = React.createContext(null);

const GlobalDeckContext = () => {
  return <div>GlobalDeckContext</div>;
};

export default GlobalDeckContext;
