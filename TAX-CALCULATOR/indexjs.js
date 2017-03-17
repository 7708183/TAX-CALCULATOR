function test(){
var income = document.getElementById("income").value;
var federaltax = document.getElementById("federaltax");
income = parseFloat(income.replace(/,/g, ''))
    
    var marginaltaxrate = document.getElementById("marginaltaxrate");
    var marginalratepercent;
    var takehomepay = document.getElementById("takehomepay");
    var takehomepayamount;
    //federal tax calculation
if (income <= 45916){  
    var personalcredit = 11635 * 0.15;
    var federaltaxpayable = ((income * 0.15) - personalcredit).toFixed(2);
    federaltax.innerHTML = "$" + federaltaxpayable;
  //  takehomepayamountfed = income - federaltaxpayable;
  //  takehomepay.innerHTML = "$" + takehomepayamountfed;
            if(income < 45916){
                    marginalratepercent = "15%";
                    marginaltaxrate.innerHTML = marginalratepercent;
                }else if(income = 45916){
                        marginalratepercent = "20.5%";
                        marginaltaxrate.innerHTML = marginalratepercent;
                }
   // document.getElementById("results").style.display = "block";
    
} else if (income > 45916 && income <= 91831){
     var firstrate = 0.15 * 45916;
    var secondrate = (income - 45916) * 0.205;
    var personalcredit = 11635 * 0.15;
    federaltaxpayable = ((firstrate + secondrate) - personalcredit).toFixed(2);
    federaltax.innerHTML = "$" + federaltaxpayable;
  //  takehomepayamountfed = income - federaltaxpayable;
  //  takehomepay.innerHTML = "$" + takehomepayamountfed;
     if(income > 45916 && income < 91831 ){
                    marginalratepercent = "20.5%";
                    marginaltaxrate.innerHTML = marginalratepercent;
                }else if(income = 91831){
                        marginalratepercent = "26%";
                        marginaltaxrate.innerHTML = marginalratepercent;
                }
    
  //  document.getElementById("results").style.display = "block";
    
    
}  else if (income > 91831 && income <= 142353){
     var firstrate = 0.15 * 45916;
    var secondrate = 0.205 * 45915;
    var thirdrate = (income - 91831) * 0.26;
    var personalcredit = 11635 * 0.15;
    federaltaxpayable = ((firstrate + secondrate + thirdrate) - personalcredit).toFixed(2);
    federaltax.innerHTML = "$" + federaltaxpayable;
//    takehomepayamountfed = income - federaltaxpayable;
//    takehomepay.innerHTML = "$" + takehomepayamountfed;
        if(income > 91831 && income < 142353 ){
                    marginalratepercent = "26%";
                    marginaltaxrate.innerHTML = marginalratepercent;
                }else if(income = 142353){
                        marginalratepercent = "29%";
                        marginaltaxrate.innerHTML = marginalratepercent;
                }
    
 //   document.getElementById("results").style.display = "block";
    
    
}  else if (income > 142353 && income <= 202800){
    var firstrate = 0.15 * 45916;
    var secondrate = 0.205 * 45915;
    var thirdrate = 50522 * 0.26;
    var fourthrate = (income - 142353) * 0.29;
    var personalcredit = 11635 * 0.15;
    federaltaxpayable = ((firstrate + secondrate + thirdrate + fourthrate) - personalcredit).toFixed(2);
    federaltax.innerHTML = "$" + federaltaxpayable;
 //   takehomepayamountfed = income - federaltaxpayable;
 //   takehomepay.innerHTML = "$" + takehomepayamountfed;
        if(income > 142353 && income < 202800 ){
                    marginalratepercent = "29%";
                    marginaltaxrate.innerHTML = marginalratepercent;
                }else if(income = 202800){
                        marginalratepercent = "33%";
                        marginaltaxrate.innerHTML = marginalratepercent;
                }
    
 //   document.getElementById("results").style.display = "block";
    
} else if (income > 202800){
    var firstrate = 0.15 * 45916;
    var secondrate = 0.205 * 45915;
    var thirdrate = 50522 * 0.26;
    var fourthrate = 60447 * 0.29;
    var fifthrate = (income - 202800) * 0.33;
    var personalcredit = 11635 * 0.15;
    federaltaxpayable = ((firstrate + secondrate + thirdrate + fourthrate + fifthrate) - personalcredit).toFixed(2);
    federaltax.innerHTML = "$" + federaltaxpayable;
  //  takehomepayamountfed = income - federaltaxpayable;
  //  takehomepay.innerHTML = "$" + takehomepayamountfed;
         if(income > 202800 ){
                    marginalratepercent = "33%";
                    marginaltaxrate.innerHTML = marginalratepercent;
                }
    
  //  document.getElementById("results").style.display = "block";
   
}
    
  //provincial tax calculation
    
    var ontariotax = document.getElementById("ontariotax");
    var provmarginaltaxrate = document.getElementById("provmarginaltaxrate");
    var provmarginalratepercent;
    
    if (income <= 42201){  
    var provpersonalcredit = 10171 * 0.0505;
    var ontariotaxpayable = ((income * 0.0505) - provpersonalcredit).toFixed(2);
    ontariotax.innerHTML = "$" + ontariotaxpayable;
        if(income < 42201 ){
                    provmarginalratepercent = "5.05%";
                    provmarginaltaxrate.innerHTML = provmarginalratepercent;
                }else if(income = 42201){
                        provmarginalratepercent = "9.15%";
                        provmarginaltaxrate.innerHTML = provmarginalratepercent;
                }   
    }else if (income > 42201 && income <= 84404){
         var provfirstrate = 0.0505 * 42201;
    var provsecondrate = (income - 42201) * 0.0915;
    var provpersonalcredit = 10171 * 0.0505;
    ontariotaxpayable = ((provfirstrate + provsecondrate) - provpersonalcredit).toFixed(2);
    ontariotax.innerHTML = "$" + ontariotaxpayable;

     if(income > 42201 && income < 84404 ){
                    provmarginalratepercent = "9.15%";
                    provmarginaltaxrate.innerHTML = provmarginalratepercent;
                }else if(income = 84404){
                        provmarginalratepercent = "11.16%";
                        provmarginaltaxrate.innerHTML = provmarginalratepercent;
                }
    } else if (income > 84404 && income <= 150000){
     var provfirstrate = 0.0505 * 42201;
    var provsecondrate = 42203 * 0.0915;
    var provthirdrate = (income - 84404) * 0.1116;
    var provpersonalcredit = 10171 * 0.0505;
    ontariotaxpayable = ((provfirstrate + provsecondrate + provthirdrate) - provpersonalcredit).toFixed(2);
    ontariotax.innerHTML = "$" + ontariotaxpayable;

     if(income > 84404 && income < 150000 ){
                    provmarginalratepercent = "11.16%";
                    provmarginaltaxrate.innerHTML = provmarginalratepercent;
                }else if(income = 150000){
                        provmarginalratepercent = "12.16%";
                        provmarginaltaxrate.innerHTML = provmarginalratepercent;
                }
    }else if (income > 150000 && income <= 220000){
     var provfirstrate = 0.0505 * 42201;
    var provsecondrate = 42203 * 0.0915;
    var provthirdrate = 65596 * 0.1116;
    var provfourthrate = (income - 150000) * 0.1216;
    var provpersonalcredit = 10171 * 0.0505;
    ontariotaxpayable = ((provfirstrate + provsecondrate + provthirdrate + provfourthrate) - provpersonalcredit).toFixed(2);
    ontariotax.innerHTML = "$" + ontariotaxpayable;

     if(income > 150000 && income < 220000 ){
                    provmarginalratepercent = "12.16%";
                    provmarginaltaxrate.innerHTML = provmarginalratepercent;
                }else if(income = 220000){
                        provmarginalratepercent = "13.16%";
                        provmarginaltaxrate.innerHTML = provmarginalratepercent;
                }
    }else if (income > 220000){
     var provfirstrate = 0.0505 * 42201;
    var provsecondrate = 42203 * 0.0915;
    var provthirdrate = 65596 * 0.1116;
    var provfourthrate = 70000 * 0.1216;
    var provfifthrate = (income - 220000) * 0.1316;
    var provpersonalcredit = 10171 * 0.0505;
    ontariotaxpayable = ((provfirstrate + provsecondrate + provthirdrate + provfourthrate + provfifthrate) - provpersonalcredit).toFixed(2);
    ontariotax.innerHTML = "$" + ontariotaxpayable;

     if(income > 220000 ){
                    provmarginalratepercent = "13.16%";
                    provmarginaltaxrate.innerHTML = provmarginalratepercent;
                }
    }
    
    var totaltaxpayable = (parseFloat(ontariotaxpayable) + parseFloat(federaltaxpayable)).toFixed(2);
    var totaltax = document.getElementById("totaltax");
    totaltax.innerHTML = "$" + totaltaxpayable;
    takehomepayamount = (income - totaltaxpayable).toFixed(2);
    takehomepay.innerHTML = "$" + takehomepayamount;
    document.getElementById("results").style.display = "block";
}