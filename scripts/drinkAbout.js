function drinkAbout(age) {
    this.returnValue = age;
    switch (true) {
        case age < 0:
            returnValue = "That age is incorrect!";
            break;
        case age >= 0 && age <= 13:
            returnValue = "Drink Toddy";
            break;
        case age >= 14 && age <= 18:
            returnValue = "Drink Coke";
            break;    
        default:
            returnValue;
    }

}