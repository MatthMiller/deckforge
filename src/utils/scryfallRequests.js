// Depois implementar para se houver carta repetida (id repetido), não adicionar a array
export const getThreeRandomCommanders = async () => {
  try {
    console.log('getThreeRandomCommanders');
    let numberOfFetchs = 3;
    const cards = [];

    for (let index = 0; index < numberOfFetchs; index++) {
      const response = await fetch(
        'https://api.scryfall.com/cards/random?q=is%3Acommander'
      );
      const data = await response.json();
      cards.push(data);
    }

    console.log(cards);
    return cards;
  } catch (error) {
    console.log(error);
  }
};
