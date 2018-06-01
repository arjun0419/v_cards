// The Standard deck of 52 playing cards (the Rouennais or English pattern) is the most common deck of playing cards used today. 
// It includes thirteen ranks of each of the four French suits: clubs, diamonds, hearts, and spades.
// The ranks are:  Ace, 2, 3, 4, 5, 6, 7, 8, 9, 10, Jack, Queen, King.
// 
// Please create an object model for a deck of cards showing class declarations, member variables and data types.
// Getters, setters and constructors can be omitted.
// 
// Write the constructor for Deck which will initialize the 52 unique cards.

module.exports.deckOptions = () => {
  const suits = ["Clubs", "Diamonds","Hearts", "Spades"];
  const ranks = ["A", '2', '3', '4', '5', '6', '7', '8', '9', '10', "J", "Q", "K"];
  return {
    suits: suits,
    ranks: ranks
  }
}

module.exports.deckCreator = (optionsObj) => { 
  const suits = optionsObj.suits;
  const ranks = optionsObj.ranks;
  const deck = [];
  for (let i = 0; i < suits.length; i++) {
    for (let j = 0; j < ranks.length; j++) {
      deck.push(ranks[j] + suits[i][0]);
    }
  }
  return deck;
}

// A full house is a poker hand containing three cards of one rank and two cards of another rank.  
// The suit does not matter and the cards may be in any order.
// Eg.  (Suits are indicated below by their first letter.)
// A full house:      8D, 8C, JH, JD, 8S
// Not a full house:  8D, 8C, 7S, JH, JD
// Not a full house:  8D, 8C, 8S, 8H, JD
// 
// Write a function:  isFullHouse(args?) which will compute whether a five card hand contains a full house.

module.exports.isFullHouse = (hand) => {
  let count = {};

  const validCards = [ 
      'AC', '2C', '3C', '4C', '5C', '6C', '7C', '8C', '9C', '10C', 'JC', 'QC', 'KC',
      'AD', '2D', '3D', '4D', '5D', '6D', '7D', '8D', '9D', '10D', 'JD', 'QD', 'KD',
      'AH', '2H', '3H', '4H', '5H', '6H', '7H', '8H', '9H', '10H', 'JH', 'QH', 'KH',
      'AS', '2S', '3S', '4S', '5S', '6S', '7S', '8S', '9S', '10S', 'JS', 'QS', 'KS', 
    ];

  if (hand.length === 0 || !Array.isArray(hand)) {
    return "Error: not a valid hand";
  } else {
    for (let i = 0; i < hand.length; i++) {
      let cardValue = '';

      if (validCards.indexOf(hand[i]) === -1) {
        return "Error: not a valid hand";
      } else {    
        cardValue = hand[i].slice(0, hand[i].length - 1);
      }

    // if card already exists in count or if count has less than 2 keys, add/increment card count
    if (count[cardValue] || Object.keys(count).length < 2) {
      if(count[cardValue]) {
        count[cardValue]++;
      } else {
        count[cardValue] = 1;
      }
      // if i is 4, set fullHouse to true
      if (i === 4) {
        return true;
      }
    // if there are two items in count already, return false  
    } else {
      return false;
    }
  };
  }
}
