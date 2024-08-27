import React from 'react';
import { getThreeRandomCommanders } from '../utils/scryfallRequests';
import styles from './ChoosePool.module.css';

const ChoosePool = ({ mode, setActualChoice }) => {
  const [cards, setCards] = React.useState(null);

  React.useEffect(() => {
    if (mode === 'commander') {
      showCommanders();
    }
  }, []);

  const showCommanders = async () => {
    console.log('ola');
    const cards = await getThreeRandomCommanders();
    setCards(cards);
  };

  return (
    <>
      <div className={styles.cardsContainer}>
        {cards ? (
          cards.map((actualCardData) => {
            console.log('actualCardData:', actualCardData);

            return (
              <div className={styles.cardContainer}>
                <img
                  className={styles.cardImage}
                  src={actualCardData.image_uris.normal}
                  alt={actualCardData.name}
                />
                <div className={styles.cardShadow}></div>
              </div>
            );
          })
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </>
  );
};

export default ChoosePool;
