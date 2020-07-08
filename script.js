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
    
    
    if(n==1 ||n==21||n==31||n==41||n==51||n==61||n==71||n==81||n==91||n==101||n==111||n==121||n==131||n==141||n==151||n==161||n==171||n==181||n==191||n==201){
        document.getElementById("demo").innerHTML ="1. In the Arithmetic Sequence, "+(f)+" , "+(f+d)+" , "+m+" , . . .   find "+n +"<sup>st</sup> term ?";
        document.getElementById("questiontwo").innerHTML ="2. (i) Whether "+ o +" is a term the above sequence ?";
    }
    else if(n==2 || n==22||n==32||n==42||n==52||n==62||n==72||n==82||n==92||n==102||n==121||n==122||n==132||n==142||n==152||n==162||n==172||n==182||n==192||n==202){
        document.getElementById("demo").innerHTML ="1. In the Arithmetic Sequence, "+(f)+" , "+(f+d)+" , "+m+" , . . .   find "+n +"<sup>nd</sup> term ?";
        document.getElementById("questiontwo").innerHTML ="2. (i) Whether "+ o +" is a term in the above sequence ?";
    }
    else if(n==3 || n==23||n==33||n==43||n==53||n==63||n==73||n==83||n==93||n==103||n==113||n==123||n==133||n==143||n==153||n==163||n==173||n==183||n==193||n==203){
        document.getElementById("demo").innerHTML ="1. In the Arithmetic Sequence, "+(f)+" , "+(f+d)+" , "+m+" , . . .   find "+n +"<sup>rd</sup> term ?";
        document.getElementById("questiontwo").innerHTML ="2. (i) Whether "+ o +" is a term in the above sequence ?";
    }
    else{
        
        document.getElementById("demo").innerHTML ="1. In the Arithmetic Sequence, "+(f)+" , "+(f+d)+" , "+m+" , . . .    find "+n +"<sup>th</sup> term ?";
        document.getElementById("questiontwo").innerHTML ="2. (i) Whether "+ o +" is a term in the above sequence ?";
        
    }
    
    
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
                   document.getElementById("xtwosteps").innerHTML ="This No. is a term in the above Sequence.<br><u>Steps</u><br>X<sub>n</sub> = "+o+"<br>f = "+f+"<br>d = "+d+"<br>(X<sub>n</sub> - X <sub>1</sub>)/d = ("+o+"-"+f+")/"+d+"<br> = "+oo+" / "+d+"<br> = "+(oo)/d+", is a natural number<br>(Difference between any two terms in an arithmetic sequence is a multiple of common difference.)";
                   
                   document.getElementById("resulttwo").style.display = "block";
                   document.getElementById("questiontwopointtwo").innerHTML ="2. (ii) Find the position of the term in the above sequence ?";
                   document.getElementById("answerwriteforquestiontwo-div").style.display = "block";
                   
                 }
                 else{
                   // alert("Your Answer is Wrong");
                   document.getElementById("resultTwoFirst").style.display = "block";
                   document.getElementById("xtwo").innerHTML ="Your Answer for 2nd Question is Wrong.";
                   document.getElementById("abcde").style.display = "block";
                   document.getElementById("xtwosteps").innerHTML ="This No. is a term in the above Sequence.<br><u>Steps</u><br>X<sub>n</sub> = "+o+"<br>f = "+f+"<br>d = "+d+"<br>(X<sub>n</sub> - X <sub>1</sub>)/d = ("+o+"-"+f+")/"+d+"<br> = "+oo+" / "+d+"<br> = "+(oo)/d+", is a natural number<br>(Difference between any two terms in an arithmetic sequence is a multiple of common difference.)";
                   document.getElementById("resulttwo").style.display = "block";
                   document.getElementById("questiontwopointtwo").innerHTML ="2. (ii) Find the position of the term in the above sequence ?";
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
           
      
      
