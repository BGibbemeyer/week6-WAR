var expect = chai.expect;

//the first parameter is a string and the second is a callback
describe("MyFunctions", function() {
    describe("#compareCards", function() {
        it("should increase Tom's score if Tom's card value wins", function() {
            let tom = new Player("Tom");
            let jerry = new Player("Jerry");

            expect(tom.score).to.equal(0);
            expect(jerry.score).to.equal(0);
            compareCards({player: tom, cardValue: 10}, {player: jerry, cardValue: 5});
            expect(tom.score).to.be.above(jerry.score);
        });
        
        it("should increase Jerry's score if Jerry's card wins", function() { 
            let tom = new Player("Tom");
            let jerry = new Player("Jerry");

            expect(tom.score).to.equal(0);
            expect(jerry.score).to.equal(0);
            compareCards({player: tom, cardValue: 4}, {player: jerry, cardValue: 5});
            expect(tom.score).to.be.below(jerry.score); 
        });
        
        it("should not change score if card value's are equal", function() {
        let tom = new Player("Tom");
        let jerry = new Player("Jerry");

        expect(tom.score).to.equal(0);
        expect(jerry.score).to.equal(0);
        compareCards({player: tom, cardValue: 5}, {player: jerry, cardValue: 5});
        expect(tom.score).to.equal(jerry.score); 
        
        });
    });

    
    describe("#gamePlay", function() {
        it("declares the player with the higher score to win", function() {
            if (player1.score > player2.score) {
                expect(winner.score).to.equal(player1.score);
            } else if (player2.score > player1.score) {
                expect(winner.score).to.equal(player2.score);
            } else {
                expect(winner).to.be.null
            }
        });
    });

    describe("deck functions", function() {
        const deck = new Deck;
        it('#createDeck - populates cards array', function () {
            // expect cards array in deck to have length 0
            expect(deck.cards).to.have.length(0);
            deck.createDeck();
            // expect cards array in deck to have length 52
            expect(deck.cards).to.have.length(52);
        });

        it('#shuffle - randomizes order of cards', function () {
            const unshuffledCards = deck.cards.splice();
            deck.shuffle();
            expect(deck.cards).not.deep.equal(unshuffledCards);
        });

        it('#dealCards - populater players hands', function () {
            let tom = new Player("Tom");
            let jerry = new Player("Jerry");

            // expect tom's cards length too be 0
            expect(tom.cards).to.have.length(0);
            // expect jerry's cards length too be 0
            expect(jerry.cards).to.have.length(0);

            deck.dealCards(tom, jerry);

            // expect tom's cards length too be 26
            expect(tom.cards).to.have.length(26);
            // expect jerry's cards length too be 26
            expect(jerry.cards).to.have.length(26);

        });
    });
});