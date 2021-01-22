//started kilometerToMeter funtion
function kilometerToMeter(kilo){
    if (kilo >= 1 ){
      var meter = kilo*1000;
      return meter;
    }
    else{
        return "distance can not be negetive"
    }  
  }
  var rastaMeter = kilometerToMeter(20);
  console.log(rastaMeter);
  //end kilometerToMeter function
  //started budgetCalculator function
function budgetCalculator(watch, mobile, laptop){
    if ((watch<1 ) || (mobile<1)  || (laptop<1 )) {
        return "please enter valid number for buying";
    }
    else{   
        var watchCount = watch * 50;
        var mobileCount = mobile * 100;
        var laptopCount = laptop * 500;
        var totalPrice = watchCount + mobileCount + laptopCount;
        return totalPrice; 
    }
}
var totallBill = budgetCalculator(1,1,1);
console.log(totallBill);
//end budgetCalculator function
//started hotelCost function
function hotelCost (days){ 
    if(days<=10){
            TotallCost= days*100;    
    }
    else if (days<=20){
        var firstCost = 10*100;
        var remainDays = days-10;
        var secondCost = remainDays*80;
        TotallCost = firstCost+secondCost;
    }
    else {
          var firstCost = 10*100;
          var secondCost = 10*80;
          var remainDays = days-20;
          var thirdCost = remainDays*50;
          TotallCost = firstCost + secondCost + thirdCost;
    }
         return TotallCost;
    }
    var hotelDays = hotelCost(25);
    console.log(hotelDays);
    //end hotelCost function
    //started megafriend function
function megaFriend(names) {
    var longName = names[0];
    for (var i = 0; i < names.length; i++) {
        var longName = names[i];
        if (names.length < longName.length) {
        }
    }
    return longName;
  }
  var names = ['jamal', 'kamal', 'mahabub', 'sopon', 'adnanfokir', 'saifuluddin'] ;
  var big = megaFriend(names);
  console.log(big);
  
  //end megafriend function