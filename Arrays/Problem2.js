/* You are given an integer array prices where prices[i] is the price of a given stock on the ith day.

On each day, you may decide to buy and/or sell the stock. You can only hold at most one share of the stock at any time. However, you can buy it then immediately sell it on the same day.

Find and return the maximum profit you can achieve.*/
/**
 * @param {number[]} prices
 * @return {number}
 */
/* Input: prices = [7,1,5,3,6,4]   7
Input: prices = [1,2,3,4,5]         4
Input: prices = [7,6,4,3,1]         0
*/
var maxProfit = function(prices) {
  let profit = 0;
  let i = 0;
  for(let j = 1; j<prices.length; j++){
      if(prices[j] > prices[i]){
         let amt =prices[j] - prices[i]
         profit += amt
      } 
       i++
  }
    return profit
  /* 1. make sure you have a higher number on the second index  (ar[i]> ar[i+1])
    2. what if you have the highest number in the beginning? 
    3. what if you have the smallest number in the beginning?
    
    */    
      
      
};