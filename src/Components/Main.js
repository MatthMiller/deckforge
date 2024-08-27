import React from 'react';
import styles from './Main.module.css';
import ChoosePool from './ChoosePool';
import deckHeaderIcon from '../Assets/icons/deck-header.svg';
import seeMoreDeckIcon from '../Assets/icons/see-more-deck.svg';

// para puxar umas cerejinhas do bolo:
// order=edhrec

const Main = () => {
  const [commanderPicked, setCommanderPicked] = React.useState(null);
  const [deck, setDeck] = React.useState([]);
  const [deckStep, setDeckStep] = React.useState(0);
  const [actualChoice, setActualChoice] = React.useState(null);

  React.useEffect(() => {
    console.log(actualChoice);
  }, [actualChoice]);

  const selectAndNext = async (cardObject) => {
    setDeck((previousDeckCards) => [...previousDeckCards, cardObject]);
    setDeckStep((previousStep) => previousStep + 1);
  };

  return (
    <div className={styles.geralContainer}>
      <div className={styles.leftContainer}>
        <div className={styles.chooseContainer}>
          {deckStep === 0 ? (
            <ChoosePool mode='commander' selectAndNext={selectAndNext} />
          ) : null}
        </div>
        <div className={styles.pickInfoDisplay}></div>
      </div>
      <div className={styles.rightContainer}>
        <div className={styles.deckHeader}>
          <div className={styles.deckHeaderLeft}>
            <img src={deckHeaderIcon} alt='Cards icon' />
            <p className={styles.deckHeaderTitle}>Your deck</p>
          </div>

          <div className={styles.deckOptionsContainer}>
            <img src={seeMoreDeckIcon} alt='Deck options' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
