function getBestProfit(stock_prices_yesterday){
    //keys are minutes after 9:30
    //values are price
    //return the best profit possible from subtracting two indicies
    
    //find max, find largest diff between there and beginning?
      
    var bestProfit = -Infinity;
    var sp = stock_prices_yesterday;
    var spLen = Object.keys(sp).length;
    for (var ii=0; ii<spLen;ii++){
        var buyPrice = sp[ii];
        for (var jj=ii+1;jj<spLen;jj++){
            var sellPrice = sp[jj];
            bestProfit = Math.max(sellPrice-buyPrice, bestProfit);
        }
    }
    console.log(bestProfit);
    return bestProfit;
}