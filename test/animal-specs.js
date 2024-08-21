const Animal = require('../animal');
const Dog = require('../animal');
const Cat = require('../animal');
const { custom } = require('chai/chai.js');

////////////////////////////////////

describe("Animal Class", function() {
    it("Should create a new animal class with name and speak quality", function(){
        let beaver = new Animal("beaver", "chitter");
        expect(beaver.name).to.equal("beaver");
        expect(beaver.speak).to.equal("chitter");
    });
});

describe("Dog Class", function() {
    it("Should create a dog, which is a child of the animal class", function(){
        let indy = new Dog("indy", "yip");
        expect(indy instanceof Animal).to.be.true;
        expect(indy.name).to.equal("indy");
    });

});

describe("Cat Class", function() {
    it("Should create a cat, which is a child of the animal class", function(){
        let dusty = new Cat("Dusty", "mew");
        expect(dusty instanceof Animal).to.be.true;
        expect(dusty.name).to.equal("Dusty");
    });
});