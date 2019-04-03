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
        case age >= 19 && age <= 21:
            returnValue = "Drink Beer";
            break; 
        default:
            returnValue;
    }

}