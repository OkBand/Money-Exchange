// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
    // Return an object containing the minimum number of coins needed to make change
    var coinsObject = {};

    if(currency > 10000) {
      coinsObject['error']= "You are rich, my friend! We don't have so much coins for exchange";
    };

      var coins = 0;
      var change = currency;

      if(change >= 50) {
        coins = Math.floor(change/50);
        change = change % 50;
        coinsObject['H'] = coins;
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
      return coinsObject;
    };

/*If the argument passed in is 0 or less, then the method should return an empty
object. If the currency that you would like to exchange more than 10000 please
return next object:
{error: "You are rich, my friend! We don't have so much coins for exchange"}

Write a method makeExchange that will determine the minimum number of coins
needed to make change for a given amount in American currency. Coins used will
be half-dollars, quarters, dimes, nickels, and pennies, worth 50¢, 25¢, 10¢, 5¢
and 1¢, respectively. They'll be represented by the strings H, Q, D, N and P.

The argument passed in will be an integer representing the value in cents.
The return value should be an object with the symbols as keys, and the numbers
of coins as values. Coins that are not used should not be included in the
object.
switch(expression) {
    case n:
        code block
        break;
    case n:
        code block
        break;
    default:
        code block
}
*/
