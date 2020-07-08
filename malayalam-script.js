var n=Math.floor(Number(Math.random()*200)+4);
var f=Math.floor(Number(Math.random()*40)-10);
var d=Math.floor(Number(Math.random()*40)-10);
    var f=Number(f);
    var d=Number(d);
    var n=Number(n);
    var m=(f+(2*d));
    var o=f+(n*2*d);
    // var o=(n*10)+170;
    // var p=100;
    // var q=2020;
    // var r=2021;
    
    
    document.getElementById("demo").innerHTML =(f)+" , "+(f+d)+" , "+m+" , . . .   എന്ന സമാന്തരശ്രേണിയിലെ  "+n +" ͻₒ പദം   കാണുക.";
    document.getElementById("questiontwo").innerHTML ="2. (i) "+ o +" ഈ സമാന്തരശ്രേണിയിലെ ഒരു പദമാണോ ?";
    
    
    function correctAnswer() {
        var answer=f+(n-1)*d;
        var checkanswer=document.form.writeanswer.value; 
        var checkanswer=Number(checkanswer);
        
        
        if (checkanswer == ""){
            alert("Answer for the Question no. 1");
        }
        else if(checkanswer == answer){
            document.getElementById("x").innerHTML ="Your Answer for 1st Question is Right. Congragulations";
            
            document.getElementById("result").style.display = "block";
        
        }
        
        else{
            document.getElementById("x").innerHTML ="Your Answer for 1st Question is Wrong. Try Again";
            document.getElementById("result").style.display = "block";
        }
        
    }
    function correctAnswertwo(){
        var checkanswerquestiontwo=document.form.writeanswertwo.value;
        var checkAnswerQuestionTwopointTwo=document.form.writeanswerforquestiontwoPointtwo.value;
        var checkanswerquestiontwo=checkanswerquestiontwo.toLowerCase();
        var nPointTwo=((o-f)/d)+1;
        var answertwo=o-f;
        var answertwodivide=answertwo%d;
        var answertwooriginal=answertwodivide;
        var no="no";
        var oo=o-f;
        // alert(checkanswerquestiontwo);
        
        if(checkanswerquestiontwo == ""){
            alert("Answer for the Question no. 2");
        }
        
        else{
            
                if(answertwodivide==0){
                
                  var answertwooriginal="yes";
                  
                 if(checkanswerquestiontwo==answertwooriginal){
                   // alert("Your Answer is Right");
                   document.getElementById("resultTwoFirst").style.display = "block";
                       document.getElementById("xtwo").innerHTML ="Your Answer for 2nd Question is Right. Congragulations ";
                       document.getElementById("abcde").style.display = "block";
                   document.getElementById("xtwosteps").innerHTML ="ഈ സംഖ്യ ഈ ശ്രേണിയിലെ ഒരു പദമാണ് .<br><u>Steps</u><br>X<sub>n</sub> = "+o+"<br>f = "+f+"<br>d = "+d+"<br>(X<sub>n</sub> - X <sub>1</sub>)/d = ("+o+"-"+f+")/"+d+"<br> = "+oo+" / "+d+"<br> = "+(oo)/d+", ഇത് ഒരു എണ്ണൽ സംഖ്യയാണ് <br>(ഒരു സമാന്തരശ്രേണിയിലെ ഏതെങ്കിലും രണ്ടു പദങ്ങളുടെ വ്യത്യാസം പൊതു വ്യത്യാസത്തിന്റെ ഗുണിതമായിരിക്കും.)";
                   
                   document.getElementById("resulttwo").style.display = "block";
                   document.getElementById("questiontwopointtwo").innerHTML ="2. (ii) ഈ സംഖ്യ മുകളിലുള്ള സമാന്തരശ്രേണിയിലെ എത്രാമത്തെ  പദമാണ് ?";
                   document.getElementById("answerwriteforquestiontwo-div").style.display = "block";
                   
                 }
                 else{
                   // alert("Your Answer is Wrong");
                   document.getElementById("resultTwoFirst").style.display = "block";
                   document.getElementById("xtwo").innerHTML ="Your Answer for 2nd Question is Wrong.";
                   document.getElementById("abcde").style.display = "block";
                   document.getElementById("xtwosteps").innerHTML ="ഈ സംഖ്യ ഈ ശ്രേണിയിലെ ഒരു പദമാണ് .<br><u>Steps</u><br>X<sub>n</sub> = "+o+"<br>f = "+f+"<br>d = "+d+"<br>(X<sub>n</sub> - X <sub>1</sub>)/d = ("+o+"-"+f+")/"+d+"<br> = "+oo+" / "+d+"<br> = "+(oo)/d+",  ഇത് ഒരു എണ്ണൽ സംഖ്യയാണ് <br>(ഒരു സമാന്തരശ്രേണിയിലെ ഏതെങ്കിലും രണ്ടു പദങ്ങളുടെ വ്യത്യാസം പൊതു വ്യത്യാസത്തിന്റെ ഗുണിതമായിരിക്കും.)";
                   document.getElementById("resulttwo").style.display = "block";
                   document.getElementById("questiontwopointtwo").innerHTML ="2. (ii) ഈ സംഖ്യ മുകളിലുള്ള സമാന്തരശ്രേണിയിലെ എത്രാമത്തെ പദമാണ് ?";
                   document.getElementById("answerwriteforquestiontwo-div").style.display = "block";
                }
                }       
        
        }
        
        
    }
    
    function correctAnswerPointTwo(){
        var checkAnswerQuestionTwopointTwo=document.form.writeanswerforquestiontwoPointtwo.value;
        var nPointTwo=((o-f)/d)+1;
        //  alert(nPointTwo);
        if(checkAnswerQuestionTwopointTwo == ""){
            alert("Write the Answer First");
        }
        
        else if(checkAnswerQuestionTwopointTwo==nPointTwo){
            document.getElementById("checkingQuestionTwoPointTwo").style.display = "block";
            document.getElementById("xtwoPointTwo").innerHTML ="Your Answer for 2nd Question (ii) is Right. Congragulations";
            document.getElementById("showingresulttwo").style.display = "block";
        }
        else{
            document.getElementById("checkingQuestionTwoPointTwo").style.display = "block";
            document.getElementById("xtwoPointTwo").innerHTML ="Your Answer for 2nd Question (ii) is Wrong. Try Again";
            document.getElementById("showingresulttwo").style.display = "block";
        }
    }
    // function showButton(){
    //     document.getElementById("originalAnswer").style.display = "block";
    // }
    function Steps(){
        var checkanswer=document.form.writeanswer.value; 
        var checkanswer=Number(checkanswer);
        var nminuse=(n-1);
        var nminusevalue=(d*(n-1))
        var answer=f+(n-1)*d;
        if(checkanswer == ""){
                alert("Please Type Answer ")
        }
        else{
            
        document.getElementById("q").innerHTML ="X<sub>n</sub> = f+(n-1)d<br> f = " +f+"<br>d = "+d+"<br>X<sub>"+n+"</sub> = "+f+"+("+n+"-1)"+d+"<br>X<sub>"+n+"</sub> = "+f+"+("+nminuse+")"+d+"<br> = "+f+"+"+nminusevalue+"<br> = " +answer;
        }
    }
    function StepsQuestionTwo(){
        var checkanswerquestiontwo=document.form.writeanswertwo.value;
        var checkAnswerQuestionTwopointTwo=document.form.writeanswerforquestiontwoPointtwo.value;
        var nPointTwo=((o-f)/d)+1;
        var answertwo=o-f;
        var answertwodivide=answertwo%d;
        var answertwooriginal=answertwodivide;
        var no="no";
        var oo=o-f;
        if(checkAnswerQuestionTwopointTwo == ""){
                alert("Please Type Answer ")
        }
        else{
            
         document.getElementById("r").innerHTML ="<u>Steps</u><br><br>X<sub>n</sub> = "+o+"<br>f = "+f+"<br>d = "+d+"<br>n = ((X<sub>n</sub> - X <sub>1</sub>)/d)+1 <br><br>= (("+o+"-"+f+")/"+d+")+1<br> = ("+oo+" / "+d+")+1<br><br> = "+(((oo)/d)+1);
         document.getElementById("changequestion-div").style.display = "block";
        }
    }
           
      
      
