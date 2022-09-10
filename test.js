// use mocha and chai test framework for Behaviour-Driven Development (bdd) 
var expect = chai.expect;  // create a expect object using chai

describe('Week6 Assignment', function() {
    describe('WAR Game', function () {
      // test winner is player A
      it('Winner should be player A', function () {
        let players = new Game();  // create a game
        players.start(); // set up the players        
        players.game[0].cards.push(2);  // add 2 to the first player
        players.game[1].cards.push(1);  // add 1 to the second player
        let result = players.play();    // run the program
        expect(result[0]>result[1]).to.true;  // player A should be the winner
      });
      // test winner is player B
      it('Winner should be player B', function () {
        let players = new Game(); // create a game
        players.start(); // set up the players
        players.game[0].cards.push(1); // add 1 to the first player
        players.game[1].cards.push(2); // add 2 to the second player
        let result = players.play();  // run the program
        expect(result[1]>result[0]).to.true;  // player B should be the winner
      });
      // test no winner
      it('Should be No winner', function () {
        let players = new Game(); // create a game
        players.start();  // set up the players 
        players.game[0].cards.push(1); // add 1 to the first player
        players.game[1].cards.push(1); // add 1 to the second player
        let result = players.play(); // run the program
        expect(result[1]==result[0]).to.true;  // no winner
      });
    });
    
  });
