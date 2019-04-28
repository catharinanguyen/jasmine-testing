describe ("My WhatCanIDrink function", function(){
    beforeEach(function(){
        drink = new WhatCanIDrink;
    });
    
    describe ("Check Age", function(){
        it("should exist", function(){
            expect(WhatCanIDrink).toBeDefined();
        });
        
        it("should return drink toddy when called WhatCanIDrink(13)", function(){
            var result = WhatCanIDrink(13);
            expect(result).toBe("Drink Toddy");
        });
        
        it("should return drink toddy when called WhatCanIDrink(17)", function(){
            var result = WhatCanIDrink(17);
            expect(result).toBe("Drink Coke");
        });
        
        it("should return drink toddy when called WhatCanIDrink(20)", function(){
            var result = WhatCanIDrink(20);
            expect(result).toBe("Drink Beer");
        });
        
        it("should return drink toddy when called WhatCanIDrink(30)", function(){
            var result = WhatCanIDrink(30);
            expect(result).toBe("Drink Whisky");
        });
        
        it("should return drink toddy when called WhatCanIDrink(140)", function(){
            var result = WhatCanIDrink(140);
            expect(result).toBe("Sorry. I can’t tell what drink because that age is incorrect!");
        });
        
        it("should return drink toddy when called WhatCanIDrink(140)", function(){
            var result = WhatCanIDrink(140);
            expect(result).toBe("Sorry. I can’t tell what drink because that age is incorrect!");
        });
        
        it("should contain Drink when called as whatCanIDrink(17)", function() {
            var result = WhatCanIDrink(10).indexOf("Drink");
            expect(result).not.toEqual(-1);
        });

    });
});
        
        
    