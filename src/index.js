// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
    // Return an object containing the minimum number of coins needed to make change
    var coins = {};  //creating an empty object

    if(currency > 10000) {
      coins['error']= "You are rich, my friend! We don't have so much coins for exchange";
      //throwing an error. btw, it should be many, not much. unlike money, coins are countable
    }
    else {

      if(currency >= 50) {
        coins['H'] = Math.floor(currency/50);
        //extracting the whole part of the money and adding the key and its value to the object
        currency = currency % 50; //finding the remainder = how much money is left
      };

      if(currency >= 25) {
        coins['Q'] = Math.floor(currency/25);
        currency = currency % 25;
       };

      if(currency >= 10){
        coins['D'] = Math.floor(currency/10)
        currency = currency % 10;
       };

      if(currency >= 5){
        coins['N'] = Math.floor(currency/5);
        currency = currency % 5;
        };

      if(currency < 5 && currency > 0) {
        coins['P'] = currency;
      };
    };
    return coins;
  };
