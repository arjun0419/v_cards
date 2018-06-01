const { assert } = require('chai');

const cards = require('../cards.js');

describe('Test all cards.js methods ', () => {

  const deckoptions = cards.deckOptions();

  describe('deckOptions:', () => {
    const keys = Object.keys(deckoptions);
    const ranksLength = deckoptions.ranks.length;
    const suitsLength = deckoptions.suits.length;

    const suits = ["Clubs", "Diamonds","Hearts", "Spades"];
    const ranks = ["A", '2', '3', '4', '5', '6', '7', '8', '9', '10', "J", "Q", "K"];

    const testOptions = {
      suits: suits,
      ranks: ranks,
    }

    it('should return an object with key/values for suits and ranks', () => {
      assert.deepEqual(testOptions, deckoptions);
    });
  });

  describe('deckCreator:', () => {
    const deck = cards.deckCreator(deckoptions);
    const expected = [ 
      'AC', '2C', '3C', '4C', '5C', '6C', '7C', '8C', '9C', '10C', 'JC', 'QC', 'KC',
      'AD', '2D', '3D', '4D', '5D', '6D', '7D', '8D', '9D', '10D', 'JD', 'QD', 'KD',
      'AH', '2H', '3H', '4H', '5H', '6H', '7H', '8H', '9H', '10H', 'JH', 'QH', 'KH',
      'AS', '2S', '3S', '4S', '5S', '6S', '7S', '8S', '9S', '10S', 'JS', 'QS', 'KS', 
    ];

    it('should return an array with 52 unique cards', () => {
      assert.deepEqual(deck, expected);
    });
  });

  describe('isFullHouse:', () => {
    it('should return true when hand is a Full House', () => {
      assert.isTrue(cards.isFullHouse(['10D', '10C', 'JD', 'JH', '10S']), 'is a Full House!');
      assert.isTrue(cards.isFullHouse(['AD', 'AC', 'AH', '3D', '3S']), 'is a Full House!');
    });
    it('should return false when hand is not a Full House', () => {
      assert.isFalse(cards.isFullHouse(['8D', '8C', 'JD', '2D', '8S']), 'is not a Full House!');
    });
    it('should return Error: not a valid hand" when argument is a not an array', () => {
      assert.equal(cards.isFullHouse(""), "Error: not a valid hand");
    });
    it("should return 'Error: not a valid hand' when argument doesn't have 5 cards", () => {
      assert.equal(cards.isFullHouse(['8D', '8C', 'JD', '2D']), "Error: not a valid hand");
    });
    it("should return 'Error: not a valid hand' when hand contains duplicate cards", () => {
      assert.equal(cards.isFullHouse(['8D', '8D', 'JD', '2C', '2H']), "Error: not a valid hand");
    });
    it("should return 'Error: not a valid hand' when argument contains an incorrect card ", () => {
      assert.equal(cards.isFullHouse(['8D', '8C', 'JD', 0, '8S']), "Error: not a valid hand");
      assert.equal(cards.isFullHouse(['8D', '8C', 'JD', '11C', '8S']), "Error: not a valid hand");
    });
  });
});