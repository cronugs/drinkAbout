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
        it('should return Drink Toddy', () => {
            drinkAbout(16);
            expect(returnValue).toBe("Drink Coke");  
        });
    });
});