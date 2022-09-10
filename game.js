
// class player
class Player {
    constructor(name) {  // create a player with name
        this.cards = [];  // each player has an array of cards
        this.name = name;  // assign player with a name
    }
    // add card to the player
    addCard(x) {
        this.cards.push(x);  
    }
}

// class deck of cards
class Deck {
    constructor() {  // create a deck of cards
        this.cards = [];  // create an array of cards
        for (let i=1; i<=52; i++) {
            this.cards.push(i % 13);  // assign card values to deck of cards; don't care about the suits of cards
        }

    }
    // shuffle the card; got the function from https://github.com/MisterTeeRoland/war/blob/master/game.js
    shuffle() {
        for(let j, x, i = this.cards.length; i; j = Math.floor(Math.random() * i), 
        x = this.cards[--i], this.cards[i] = this.cards[j], this.cards[j] = x);        
    }
}

// class game to play the card game
class Game {
    constructor() {
        this.game = [];  // create an array of players.  Only allow two players
        this.deck = new Deck(); // create a deck of cards
    }

    start() {        
        this.game.push(new Player("A")); // create player A
        this.game.push(new Player("B")); // create player B
    }

    // distribute cards to the players
    dealCard() {
        this.deck.shuffle();  // shuffle the cards before distribute the cards to players
        for (let i=0; i<this.deck.cards.length; i+=2) {  // go through the deck of cards two at a time
            this.game[0].cards.push(this.deck.cards[i]); // distribute one card to the first player
            this.game[1].cards.push(this.deck.cards[i+1]); // distribute another card to the second player
        }
    }

    // play the game
    play() {
        let a = 0;  // score for the first player
        let b = 0;  // score for the second player      
        for (let i=0; i<26; i++) {
            // if the first player has the higher score, add 1 to the first player
            if (this.game[0].cards[i] > this.game[1].cards[i]) {
                a++;
            }
            // if the second player has the higher score, add 1 to the second player
            else if (this.game[0].cards[i] < this.game[1].cards[i]) {
                b++;
            }
        }
        let result = [];  // store the result to an array
        result.push(a);
        result.push(b);
        // display the result
        if (a > b) {
            console.log("Player A is winner.");
        }
        else if (a < b) {
            console.log("Player B is winner.");
        }
        else {
            console.log("No winner.");
        }
        return result;  // return the result
    }
    
}

// run the program
let game = new Game();  // create a game
game.start();  // set up the game
game.dealCard();  // distribute the cards to the players
game.play();  // run the program