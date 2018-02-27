// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
    // Return an object containing the minimum number of coins needed to make change
    var coinsObject = {};  //creating an empty object

    if(currency > 10000) {
      coinsObject['error']= "You are rich, my friend! We don't have so much coins for exchange"; //throwing an error. btw, it should be many, not much. unlike money, coins are countable
    }
    else {
      var coins = 0;
      var change = currency; //not obligatory, just to keep var names in order

      if(change >= 50) {
        coins = Math.floor(change/50); //extracting the whole part of the money sum = how many 50 cent coins there are in the sum
        change = change % 50; //finding the remainder = how much money is left
        coinsObject['H'] = coins; //adding the key and its value to the object
      };

      if(change >= 25) {
        coins = Math.floor(change/25);
        change = change % 25;
        coinsObject['Q'] = coins;
       };

      if(change >= 10){
        coins = Math.floor(change/10)
        change = change % 10;
        coinsObject['D'] = coins;
       };

      if(change >= 5){
        coins = Math.floor(change/5);
        change = change % 5;
        coinsObject['N'] = coins;
        };

      if(change < 5 && change > 0) {
        coins = change;
        coinsObject['P'] = coins;
      };
    };
    return coinsObject;
  };
