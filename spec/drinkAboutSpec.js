describe("drinkAbout", function() {


    describe("Test numbers less than 0", function() {
        it('should return That age is incorrect!', () => {
            drinkAbout(-9);
            expect(returnValue).toBe("That age is incorrect!");
        });
    });

    describe("Test range 0 - 13", function() {
        it('should return Drink Toddy', () => {
            drinkAbout(9);
            expect(returnValue).toBe("Drink Toddy");  
        });
    });
    
    describe("Test range 14 - 17", function() {
        it('should return Drink Coke', () => {
            drinkAbout(16);
            expect(returnValue).toBe("Drink Coke");  
        });
    });

    describe("Test range 18 - 21", function() {
        it('should return Drink Beer', () => {
            drinkAbout(20);
            expect(returnValue).toBe("Drink Beer");  
        });
    });

    describe("Test range 22 - 130", function() {
        it('should return Drink Whisky', () => {
            drinkAbout(44);
            expect(returnValue).toBe("Drink Whisky");  
        });
    });

    describe("Test ages over 130", function() {
        it("should return Sorry> I can't tell you what drink because that age is incorrect!", () => {
            drinkAbout(150);
            expect(returnValue).toBe("Sorry. I can't tell you what drink because that age is incorrect!");  
        });
    });
});