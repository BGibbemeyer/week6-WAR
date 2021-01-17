
class Deck {
    constructor() {
        this.cards = []
    }

    createDeck () {
        for (var i = 0; i < 13; i++) { //iterating through 13 times bc there are 13 cards per suite
           this.cards[i] = new Card(i + 1, "D"); // adding a new card into a specific index position of the array(this.cards)
           this.cards[i + 13] = new Card(i + 1, "S"); //adding spades to the 14th index
           this.cards[i + 26] = new Card(i + 1, "C"); //adding clubs to the 26th index
           this.cards[i + 39] = new Card(i + 1, "H");
        } 
    }

    shuffle() {
        for (var i = this.cards.length - 1; i > 0; i--) { //we're starting from the end of the array
            var randomIndex = Math.floor(Math.random() * (this.cards.length));
            var originalCard = this.cards[i];
            this.cards[i] = this.cards[randomIndex];
            this.cards[randomIndex] = originalCard;
    
        }
    }
    
    dealCards(p1, p2) {
        for (var i = 0; i < 26; i++) {
        let poppedCard = this.cards.pop();
        let poppedCard2 = this.cards.pop();
        p1.cards.push(poppedCard);
        p2.cards.push(poppedCard2);
        }
    }
}

class Card {
    constructor(value, suit) {
        this.value = value
        this.suit = suit
        //rank? how to give ace higher value?
        
    }
}

class Player {
    constructor(name) {

        this.name = name;
        this.cards = [];
        this.score = 0
    }
    addDeck() {

    }
}
let myDeck = new Deck;

let player1 = new Player("Tom");
let player2 = new Player("Jerry");

// { player: Player, cardValue: val }
function compareCards(p1, p2) {
    if (p1.cardValue > p2.cardValue) {
        p1.player.score += 1;
        console.log(`${p1.player.name} gets the point.`);
    } else if (p2.cardValue > p1.cardValue) { // .value accesses the value of the player1Card/player2Card
        p2.player.score += 1;
        console.log(`${p2.player.name} gets the point.`);
    } else {
        console.log("tie");

    }
}

function getScore() {

}


function gamePlay() {
    for (var i = 0; i < 26; i++) {
        let player1Card = player1.cards.pop();
        let player2Card = player2.cards.pop(); //taking card out of player hands and playing it
//console.log(player1Card);
        console.log("Tom plays " + JSON.stringify(player1Card)); 
        console.log("Jerry plays " + JSON.stringify(player2Card)); 
        // new method needed to help test gamePlay functionality
        compareCards({player: player1, cardValue: player1Card.value}, {player: player2, cardValue: player2Card.value});
    }
    if (player1.score > player2.score) {
        console.log("Tom's the WINNER with a final score of " + player1.score);
        return player1; 
    } 
    
    if (player2.score > player1.score) {
        console.log("Jerry's the WINNER with a final score of " + player2.score);
        return player2;
    }
    console.log("It's a TIE!!!!");
    return null;
}





myDeck.createDeck();
myDeck.shuffle();
myDeck.dealCards(player1, player2);
const winner = gamePlay();

//console.log("Player 1 " + player1Card.suit + " " + player1Card.value); //another way to console out JSON.stringify

