// Global Variables

var n=Math.floor(Number(Math.random()*200)+4);
var f=Math.floor(Number(Math.random()*40)-10);
var d=Math.floor(Number(Math.random()*40)-10);
var f=Number(f);
var d=Number(d)+1;
var n=Number(n);
var second_term=f+d;
var m=(f+(2*d));
var o=f+(n*2*d);
var one_a = Math.floor(Math.random()*20)+1;
var one_a=100*one_a;
var two_a_value=Math.floor(Math.random()*20)-20;
var two_b_value=Math.floor(Math.random()*10)+-5;
// var two_b_value_minuse=Math.floor(Math.random()*-21)+1;
var two_b=Math.floor(Number(Math.random()*9)+1);
var two_c=10*two_b;

var three_cd=(Math.floor(Math.random()*4)+1)*2;

var three_value_b_difference_a=(Math.floor(Math.random()*4)+1)*2;

var three_value_b = (Math.floor((Math.random()*15)+1))+(three_value_b_difference_a);

var three_value_a = (three_value_b)-(three_value_b_difference_a);

var three_value_d_difference_c = (three_value_b_difference_a)*(three_cd);

var three_value_d=(Math.floor((Math.random()*2)+30))+(three_value_d_difference_c);

var three_value_c=(three_value_d)-(three_value_d_difference_c);

var three_d=(three_value_a+three_value_b)/2;

var three_e=three_d*2;




// Questions
    document.getElementById("one").innerHTML ="1.) "+f+" , "+second_term+" , "+m+" , . . . എന്ന സമാന്തരശ്രേണിയിൽ , ";
    document.getElementById("one-one").innerHTML ="(a) ഏതെങ്കിലും 2 പദങ്ങളുടെ വ്യത്യാസം "+one_a + " ആകുമോ  ? ഉത്തരം സമർത്ഥിക്കുക. ";
    document.getElementById("one-two").innerHTML ="(b) ഈ ശ്രേണിയിൽ "+ o +" ഒരു പദമാകുമോ ?  ഉത്തരം സമർത്ഥിക്കുക.";
    document.getElementById("one-three").innerHTML ="(c) "+o+" ഈ ശ്രേണിയിലെ എത്രാമത്തെ പദമാണ് ?";
    document.getElementById("one-four").innerHTML ="(d) "+n +" - ͻമത്തെ പദം കാണുക ?";
    document.getElementById("two").innerHTML ="2.) ഒരു സമാന്തര ശ്രേണിയിൽ , X<sub>n</sub> = "+two_a_value+"n+ "+two_b_value+" ആയാൽ ,";
    document.getElementById("two-one").innerHTML ="(a) ആദ്യപദവും പൊതുവ്യത്യാസവും കാണുക. ";
    document.getElementById("two-two").innerHTML ="(b) "+two_c+" - ͻₒ പദം കാണുക. ";
    document.getElementById("two-three").innerHTML ="(c) ആദ്യത്തെ  "+two_c+" പദങ്ങളുടെ തുക കാണുക ";
    document.getElementById("three").innerHTML ="3.) ഒരു സമാന്തരശ്രേണിയിൽ  "+three_value_a+"ͻₒ പദം "+three_value_c+" ഉം "+three_value_b+" - ͻₒ പദം "+three_value_d+" ഉം ആയാൽ ,";
    document.getElementById("three-one").innerHTML ="(a) പൊതുവ്യത്യാസവും എഴുതുക ..";
    document.getElementById("three-two").innerHTML ="(b) ആദ്യപദം എഴുതുക..";
    document.getElementById("three-four").innerHTML ="(c) "+three_value_a+" - ͻₒ പദം മുതൽ "+three_value_b+" - ͻₒ പദം വരെയുള്ള പദങ്ങളുടെ തുക കാണുക. ";
    document.getElementById("three-five").innerHTML ="(d) "+three_d+" - ͻₒ പദം കാണുക. ";
    document.getElementById("three-six").innerHTML ="(e) ആദ്യ "+three_e+" പദങ്ങളുടെ തുക കാണുക .";    

    

// for Submit button 


function submitAnswers(){
        


   
    document.getElementById("checkAnswers").style.display = "block";
    var one_a_answer_checking = one_a%d;
    var one_a_answer_checking = Number(one_a_answer_checking);
    var one_c_answer_checking = ((o-f)/d)+1;
    var one_d_answer_checking = f+((n-1)*d);

     var two_a_f_answer_checking = two_a_value+two_b_value;
     var two_a_d_answer_checking = two_a_value;
     var two_b_answer_checking = (two_a_value*two_c)
     var two_b_answer_checking = two_b_answer_checking+two_b_value;
     var two_c_divide_by_two = (two_c)/2;
     var two_c_answer_checking = (two_a_f_answer_checking)+(two_b_answer_checking);
     var two_c_answer_checking = (two_c_answer_checking)*(two_c_divide_by_two);
     
    

    var three_a_answer_checking = (three_value_d-three_value_c)/(three_value_b-three_value_a);
    var three_b_answer_checking = (three_value_c)-((three_value_a-1)*(three_a_answer_checking));
    var three_c_checking_n_value = ((three_value_b-three_value_a)+1);
    var three_c_answer_checking = (three_c_checking_n_value/2)*(three_value_c+three_value_d);
    var three_d_answer_checking = (three_c_answer_checking)/(three_c_checking_n_value);
    var three_e_answer_checking = (three_d_answer_checking+three_a_answer_checking);
    var three_e_answer_checking = three_d_answer_checking+three_e_answer_checking;
    var three_e_answer_checking = (three_e_answer_checking)*(three_e/2);

    var checkOneOne = document.form.oneSubOneAns.value;
    var checkOneOne = checkOneOne.toLowerCase();
    var checkOneTwo = document.form.oneSubTwoAns.value;
    var checkOneTwo = checkOneTwo.toLowerCase();
    var checkOneThree = document.form.oneSubThreeAns.value;
    var checkOneFour = document.form.oneSubFourAns.value;
  
    var checkTwoOneF = document.form.twoSubOneAnsF.value;
    var checkTwoOneD = document.form.twoSubOneAnsD.value;
    var checkTwoTwo = document.form.twoSubTwoAns.value;
    var checkTwoThree = document.form.twoSubThreeAns.value;

   
    var checkThreeOne = document.form.threeSubOneAns.value;
    var checkThreeTwo = document.form.threeSubTwoAns.value;
    var checkThreeThree = document.form.threeSubThreeAns.value;
    var checkThreeFour = document.form.threeSubFourAns.value;
    var checkThreeFive = document.form.threeSubFiveAns.value;
   
    // alert(checkOneOne);
    // alert(checkOneTwo);
    // alert(checkOneThree);
    // alert(checkOneFour);
    //For One One
       
        // document.getElementById("checkAnswers").style.display = "block";
    if(checkOneOne == ""){
            var check_one_one_checked = "1.(a) Wrong Answer ";
    }
    else if(one_a_answer_checking == 0){
        if(checkOneOne == "yes"){
            var check_one_one_checked = "1.(a) Correct Answer ";
           //document.getElementById("checkAnswerOneOne").innerHTML ="1.(a) Correct Answer ";
        }
        else{
            var check_one_one_checked = "1.(a) Wrong Answer ";
           //document.getElementById("checkAnswerOneOne").innerHTML ="1.(a) Wrong Answer ";
        }
    }
    else{
        if(checkOneOne == "no"){
            var check_one_one_checked = "1.(a) Correct Answer ";
            //document.getElementById("checkAnswerOneOne").innerHTML ="1.(a) Correct Answer ";
         }
         else{
            var check_one_one_checked = "1.(a) Wrong Answer ";
            //document.getElementById("checkAnswerOneOne").innerHTML ="1.(a) Wrong Answer ";
         }
    }
    // document.getElementById("checkAnswerOneOne").innerHTML = check_one_one_checked;
    
    // For One Two
  

    
    
    // document.getElementById("checkAnswers").style.display = "block";
    if(checkOneTwo == ""){
        var check_one_two_checked = "1.(b) Wrong Answer ";
    }
    else if(checkOneTwo == "yes"){
        var check_one_two_checked = "1.(b) Correct Answer ";
        //document.getElementById("checkAnswerOneTwo").innerHTML ="1.(b) Correct Answer ";
    }
    else{
        var check_one_two_checked = "1.(b) Wrong Answer ";
        //document.getElementById("checkAnswerOneTwo").innerHTML ="1.(b) Wrong Answer";
    }
    // document.getElementById("checkAnswerOneTwo").innerHTML = check_one_two_checked;
  

    // For One Three




    
        // document.getElementById("checkAnswers").style.display = "block";

    if(checkOneThree == ""){
            var check_one_three_checked = "1.(c) Wrong Answer ";
    }  
    else if(checkOneThree == one_c_answer_checking){
        var check_one_three_checked = "1.(c) Correct Answer ";
        //document.getElementById("checkAnswerOneThree").innerHTML ="1.(c) Correct Answer ";
    }
    else{
        var check_one_three_checked = "1.(c) Wrong Answer ";
        //document.getElementById("checkAnswerOneThree").innerHTML ="1.(c) Wrong Answer ";
    }
    // document.getElementById("checkAnswerOneThree").innerHTML = check_one_three_checked;
   
    
    
    // For One Four
    

        

        // document.getElementById("checkAnswers").style.display = "block";
        // alert(one_d_answer_checking);
    if(checkOneFour == ""){
        var check_one_four_checked = "1.(d) Wrong Answer ";
    } 
    else if(checkOneFour == one_d_answer_checking){
        var check_one_four_checked = "1.(d) Correct Answer ";
        //document.getElementById("checkAnswerOneThree").innerHTML ="1.(d) Correct Answer ";
    }
    else{
        var check_one_four_checked = "1.(d) Wrong Answer ";
        //document.getElementById("checkAnswerOneThree").innerHTML =check_one_four_checked;
    }
    // document.getElementById("checkAnswerOneFour").innerHTML = check_one_four_checked;
    // alert(check_one_one_checked);
    // alert(check_one_two_checked);
    // alert(check_one_three_checked);
    // alert(check_one_four_checked);

    if(checkTwoOneF == "" && checkTwoOneD == ""){
        var check_two_one_checked = "2.(a) Wrong Answer ";
    }
    else if(checkTwoOneF == two_a_f_answer_checking || checkTwoOneD == two_a_d_answer_checking)  {
        var check_two_one_checked = "2.(a) Correct Answer ";
    }
    else{
        var check_two_one_checked = "2.(a) Wrong Answer ";
    }

    if(checkTwoTwo == "" ){
        var check_two_two_checked = "2.(b) Wrong Answer ";
    }
    else if(checkTwoTwo == two_b_answer_checking){
        var check_two_two_checked = "2.(b) Correct Answer ";
    }
    else{
        var check_two_two_checked = "2.(b) Wrong Answer ";
    }

    if(checkTwoThree == ""){
        var check_two_three_checked = "2.(c) Wrong Answer ";
    }
    else if(checkTwoThree == two_c_answer_checking){
        var check_two_three_checked = "2.(c) Correct Answer ";
    }
    else{
        var check_two_three_checked = "2.(c) Wrong Answer ";
    }

    // Checking Question 3

    if(checkThreeOne == ""){
        var check_three_one_checked = "3.(a) Wrong Answer ";
    }
    else if(checkThreeOne == three_a_answer_checking){
        var check_three_one_checked = "3.(a) Correct Answer ";
    }
    else{
        var check_three_one_checked = "3.(a) Wrong Answer ";
    }
    //-------------------
    if(checkThreeTwo == ""){
        var check_three_two_checked = "3.(b) Wrong Answer ";
    }
    else if(checkThreeTwo == three_b_answer_checking){
        var check_three_two_checked = "3.(b) Correct Answer ";
    }
    else{
        var check_three_two_checked = "3.(b) Wrong Answer ";
    }

 //-------------------------------
    if(checkThreeThree == ""){
        var check_three_three_checked = "3.(c) Wrong Answer ";
    }
    else if(checkThreeThree == three_c_answer_checking){
        var check_three_three_checked = "3.(c) Correct Answer ";
    }
    else{
        var check_three_three_checked = "3.(c) Wrong Answer ";
    }
//---------------------------------

    if(checkThreeFour == ""){
        var check_three_four_checked = "3.(d) Wrong Answer ";
    }
    else if(checkThreeFour == three_d_answer_checking){
        var check_three_four_checked = "3.(d) Correct Answer ";
    }
    else{
        var check_three_four_checked = "3.(d) Wrong Answer ";
    }

//------------------------------
    if(checkThreeFive == ""){
        var check_three_five_checked = "3.(e) Wrong Answer ";
    }
    else if(checkThreeFive == three_e_answer_checking){
        var check_three_five_checked = "3.(e) Correct Answer ";
    }
    else{
        var check_three_five_checked = "3.(e) Wrong Answer ";
    }


        // document.getElementById("checkAnswers").style.display = "block";
         document.getElementById("checkAnswerOneOne").innerHTML = check_one_one_checked;
         document.getElementById("checkAnswerOneTwo").innerHTML = check_one_two_checked;
         document.getElementById("checkAnswerOneThree").innerHTML = check_one_three_checked;
         document.getElementById("checkAnswerOneFour").innerHTML = check_one_four_checked;

         document.getElementById("checkAnswerTwoOne").innerHTML = check_two_one_checked;
         document.getElementById("checkAnswerTwoTwo").innerHTML = check_two_two_checked;
         document.getElementById("checkAnswerTwoThree").innerHTML = check_two_three_checked;

         document.getElementById("checkAnswerThreeOne").innerHTML = check_three_one_checked;
         document.getElementById("checkAnswerThreeTwo").innerHTML = check_three_two_checked;
         document.getElementById("checkAnswerThreeThree").innerHTML = check_three_three_checked;
         document.getElementById("checkAnswerThreeFour").innerHTML = check_three_four_checked;
         document.getElementById("checkAnswerThreeFive").innerHTML = check_three_five_checked;


        //  document.getElementById("hiding-textbox-one-one").style.display = "none";
        //  document.getElementById("hiding-textbox-one-two").style.display = "none";
        //  document.getElementById("hiding-textbox-one-three").style.display = "none";
        //  document.getElementById("hiding-textbox-one-four").style.display = "none";
         
        //  document.getElementById("hiding-textbox-two-one").style.display = "none";
        //  document.getElementById("hiding-textbox-two-two").style.display = "none";
        //  document.getElementById("hiding-textbox-two-three").style.display = "none";

        //  document.getElementById("hiding-textbox-three-one").style.display = "none";
        //  document.getElementById("hiding-textbox-three-two").style.display = "none";
        //  document.getElementById("hiding-textbox-three-three").style.display = "none";
        //  document.getElementById("hiding-textbox-three-four").style.display = "none";
        //  document.getElementById("hiding-textbox-three-five").style.display = "none";

         //--------------------------------------------
        var yourScore = 0;

        if(check_one_one_checked == "1.(a) Correct Answer "){
            yourScore = yourScore+1;
        }
        if(check_one_two_checked == "1.(b) Correct Answer "){
            yourScore = yourScore+1;
        }
        if(check_one_three_checked == "1.(c) Correct Answer "){
            yourScore = yourScore+1;
        }
        if(check_one_four_checked == "1.(d) Correct Answer "){
            yourScore = yourScore+1;
        }
        
        if(check_two_one_checked == "2.(a) Correct Answer "){
            yourScore = yourScore+1;
        }
        if(check_two_two_checked == "2.(b) Correct Answer "){
            yourScore = yourScore+1;
        }
        if(check_two_three_checked == "2.(c) Correct Answer "){
            yourScore = yourScore+1;
        }

        if(check_three_one_checked == "3.(a) Correct Answer "){
            yourScore = yourScore+1;
        }
        if(check_three_two_checked == "3.(b) Correct Answer "){
            yourScore = yourScore+1;
        }
        if(check_three_three_checked == "3.(c) Correct Answer "){
            yourScore = yourScore+1;
        }
        if(check_three_four_checked == "3.(d) Correct Answer "){
            yourScore = yourScore+1;
        }
        if(check_three_five_checked == "3.(e) Correct Answer "){
            yourScore = yourScore+1;
        }





        document.getElementById("displayScore").innerHTML = yourScore;
      

         document.getElementById("one-sub-one-ans-id").disabled = true;
         document.getElementById("one-sub-two-ans-id").disabled = true;
         document.getElementById("one-sub-three-ans-id").disabled = true;
         document.getElementById("one-sub-four-ans-id").disabled = true;
         
         document.getElementById("two-sub-one-ans-f-id").disabled = true;
         document.getElementById("two-sub-one-ans-d-id").disabled = true;
         document.getElementById("two-sub-two-ans-id").disabled = true;
         document.getElementById("two-sub-three-ans-id").disabled = true;

         document.getElementById("three-sub-one-ans-id").disabled = true;
         document.getElementById("three-sub-two-ans-id").disabled = true;
         document.getElementById("three-sub-four-ans-id").disabled = true;
         document.getElementById("three-sub-five-ans-id").disabled = true;
         document.getElementById("three-sub-six-ans-id").disabled = true;
    }



// for Show Answers

function showAnswers(){
    document.getElementById("showOriginalAnswers").style.display = "block";
// Variables

    var one_a_answer_checking = one_a%d;
    var one_a_answer_checking = Number(one_a_answer_checking);
    var one_c_answer_checking = ((o-f)/d)+1;
    var one_d_answer_checking = f+((n-1)*d);

    var two_a_f_answer_checking = two_a_value+two_b_value;
    var two_a_d_answer_checking = two_a_value;
    var two_b_answer_checking = (two_a_value*two_c)+two_b_value;
    var two_c_answer_checking = ((two_c/2)*two_a_value)+two_b_answer_checking;

    var three_a_original_answer = (three_value_d-three_value_c)/(three_value_b-three_value_a);
    var three_d_answer_checking = (three_c_answer_checking)/(three_c_checking_n_value);

    var three_a_answer_checking = (three_value_d-three_value_c)/(three_value_b-three_value_a);
    var three_b_answer_checking = (three_value_c)-((three_value_a-1)*(three_a_answer_checking));
    var three_c_checking_n_value = ((three_value_b-three_value_a)+1);
    var three_c_answer_checking = (three_c_checking_n_value/2)*(three_value_c+three_value_d);
    var three_d_answer_checking = (three_c_answer_checking)/(three_c_checking_n_value);
    var three_e_answer_checking = (three_d_answer_checking+three_a_answer_checking);
    var three_e_answer_checking = three_d_answer_checking+three_e_answer_checking;
    var three_e_answer_checking = (three_e_answer_checking)*(three_e/2);
// Variable Decleration
    var original_one_one_a_by_d = one_a%d;
    var oo = o-f;
    n_minuse = n-1;
    n_th_term = f+(n_minuse*d);
    if(original_one_one_a_by_d == 0){
        var  original_one_one_change ="ഇത് ഒരു പൂർണ്ണസംഖ്യ ആണ്  . ആയതിനാൽ പദങ്ങളുടെ വ്യത്യാസം "+one_a+" ആകും.";
    }
    else{
        var  original_one_one_change ="ഇത് ഒരു പൂർണ്ണസംഖ്യ അല്ല . ആയതിനാൽ പദങ്ങളുടെ വ്യത്യാസം "+one_a+" ആകുകയില്ല..";
    }
    var original_one_one = "<button><b>1. (a)</b></button> പദങ്ങളുടെ വ്യത്യാസം പൊതുവ്യത്യാസത്തിന്റെ ഗുണിതമാണോ എന്നു പരിശോധിക്കണം .<br>"+one_a+"/"+d+" = "+one_a/d+"<br> "+original_one_one_change;
    var original_one_two = "<button><b>1. (b)</b></button> ("+o+" - "+f+") / "+d+" = "+(o-f)/d+", ഇത് ഒരു പൂർണ്ണസംഖ്യ ആണ്.<br>ആയതിനാൽ "+o+" ഈ ശ്രേണിയിലെ ഒരു പദമാണ്.";
    var original_one_three = "<button><b>1. (c)</b></button> X<sub>n</sub> = "+o+"<br>f = "+f+"<br>d = "+d+"<br>n = ((X<sub>n</sub> - X <sub>1</sub>)/d)+1 <br>= (("+o+"-"+f+")/"+d+")+1<br> = ("+oo+" / "+d+")+1<br> = "+(((oo)/d)+1);
    var original_one_four = "<button><b>1. (d)</b></button> X<sub>n</sub> = f+(n-1)d <br> X<sub>"+n+"</sub> = "+f+"+("+n+"-1)"+d+"<br>= "+f+"+("+n_minuse+")"+d+"<br>= "+f+"+"+n_minuse*d+"<br>= "+n_th_term;
    var original_two_one = "<button><b>2. (a)</b></button> ആദ്യപദം  = "+two_a_value+" + "+two_b_value+"<br>= "+(two_a_value+two_b_value)+"<br> പൊതുവ്യത്യാസം  = n ന്റെ ഗുണകം <br> = "+two_a_value;
    var original_two_two = "<button><b>2. (b)</b></button> X<sub>"+two_c+"</sub> = "+two_a_value+"x"+two_c+" + "+two_b_value+"<br> = "+((two_a_value*two_c)+two_b_value);
    var original_two_three = "<button><b>2. (c)</b></button> തുക  , S<sub>n</sub> = n/2(x<sub>1</sub>+x<sub>n</sub>) <br> S<sub>"+two_c+"</sub> = "+two_c+"/2 ("+(two_a_value+two_b_value)+" + "+((two_a_value*two_c)+two_b_value)+")<br> = "+((two_c/2)*((two_a_value+two_b_value)+((two_a_value*two_c)+two_b_value)));
    var original_three_one = "<button><b>3. (a)</b></button> d = "+three_value_d+" - "+three_value_c+" / "+three_value_b+" - "+three_value_a+ " = "+three_a_original_answer;
    var original_three_two = "<button><b>3. (b)</b></button> f = "+three_value_c+" - "+(three_value_a-1)+"d<br> = "+three_value_c+" - "+(three_value_a-1)*three_a_original_answer+"<br> = "+(three_value_c-((three_value_a-1)*(three_a_original_answer)));
    var original_three_three = "<button><b>3. (c)</b></button> S<sub>n</sub> = n/2 (x<sub>1</sub> + x<sub>n</sub>)<br> = "+(((three_value_b)-(three_value_a))+1)+"/2 ("+three_value_c+" + "+three_value_d+")<br> = "+(((three_value_b)-(three_value_a))+1)+"/2 * "+((three_value_c)+(three_value_d))+"<br> = "+(((three_value_b)-(three_value_a))+1)+" * "+((three_value_c)+(three_value_d))/2+"<br> = "+(((three_value_b)-(three_value_a))+1)*((three_value_c)+(three_value_d))/2;
    var original_three_four = "<button><b>3. (d)</b></button> മധ്യപദം  = തുക / പദങ്ങളുടെ എണ്ണം (പദങ്ങളുടെ എണ്ണം ഒറ്റ സംഖ്യയായൽ )<br> X<sub>"+three_d+"</sub> = "+(((three_value_b)-(three_value_a))+1)*((three_value_c)+(three_value_d))/2+" / "+(((three_value_b)-(three_value_a))+1)+"<br> = "+(((((three_value_b)-(three_value_a))+1)*((three_value_c)+(three_value_d))/2)/(((three_value_b)-(three_value_a))+1));
    var original_three_five = "<button><b>3. (e)</b></button> തുക = n/2 (x<sub>1</sub> + x<sub>n</sub>)<br>പദങ്ങളുടെ എണ്ണം ഇരട്ട സംഖ്യയായൽ ,<br>S<sub>n</sub> = n/2 (മധ്യ പദങ്ങളുടെ തുക )<br>x<sub>"+three_d+"</sub> = "+three_d_answer_checking+"&nbsp;&nbsp;&nbsp;&nbsp;x<sub>"+(three_d+1)+"</sub> = "+((three_d_answer_checking)+(three_a_answer_checking))+"<br> S<sub>"+three_e+"</sub> = "+three_e+"/2 (x<sub>"+three_d+"</sub> + x<sub>"+(three_d+1)+"</sub>)<br> = "+(three_e/2)+"("+three_d_answer_checking+" + "+((three_d_answer_checking)+(three_a_answer_checking))+")<br> = "+(three_e/2)*((three_d_answer_checking)+((three_d_answer_checking)+(three_a_answer_checking)))+"<br><br><b>OR</b><br>X<sub>"+three_e+"</sub> = f+(n-1)d<br> = "+(three_value_c-((three_value_a-1)*(three_a_original_answer)))+" + ("+(three_e-1)+")"+three_a_original_answer+"<br> = "+(three_value_c-((three_value_a-1)*(three_a_original_answer)))+" + "+((three_e-1)*three_a_original_answer)+"<br> = "+((three_value_c-((three_value_a-1)*(three_a_original_answer)))+((three_e-1)*three_a_original_answer))+"<br>S<sub>"+three_e+"</sub> = n/2 (x<sub>1</sub> + x<sub>n</sub>)<br> = "+three_e+"/2 ("+(three_value_c-((three_value_a-1)*(three_a_original_answer)))+" + "+((three_value_c-((three_value_a-1)*(three_a_original_answer)))+((three_e-1)*three_a_original_answer))+")<br> = "+three_e/2+" x "+((three_value_c-((three_value_a-1)*(three_a_original_answer)))+((three_value_c-((three_value_a-1)*(three_a_original_answer)))+((three_e-1)*three_a_original_answer)))+"<br> = "+((three_e/2)*((three_value_c-((three_value_a-1)*(three_a_original_answer)))+((three_value_c-((three_value_a-1)*(three_a_original_answer)))+((three_e-1)*three_a_original_answer))));

    // Output
    document.getElementById("originalAnswerOneOne").innerHTML = original_one_one;
    document.getElementById("originalAnswerOneTwo").innerHTML = original_one_two;
    document.getElementById("originalAnswerOneThree").innerHTML = original_one_three;
    document.getElementById("originalAnswerOneFour").innerHTML = original_one_four;

    document.getElementById("originalAnswerTwoOne").innerHTML = original_two_one;
    document.getElementById("originalAnswerTwoTwo").innerHTML = original_two_two;
    document.getElementById("originalAnswerTwoThree").innerHTML = original_two_three;
    
    document.getElementById("originalAnswerThreeOne").innerHTML = original_three_one;
    document.getElementById("originalAnswerThreeTwo").innerHTML = original_three_two;
    document.getElementById("originalAnswerThreeThree").innerHTML = original_three_three;
    document.getElementById("originalAnswerThreeFour").innerHTML = original_three_four;
    document.getElementById("originalAnswerThreeFive").innerHTML = original_three_five;
}
