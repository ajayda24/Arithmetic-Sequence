var n=Math.floor(Number(Math.random()*200)+4);
var f=Math.floor(Number(Math.random()*40)-10);
var d=Math.floor(Number(Math.random()*40)-10);
// function myFunction() {
    var f=Number(f);
    var d=Number(d);
    var n=Number(n);
    var m=(f+(2*d));
    
    
    document.getElementById("demo").innerHTML =(f)+" , "+(f+d)+" , "+m+" , . . .   എന്ന സമാന്തരശ്രേണിയിലെ  "+n +" ͻₒ പദം   കാണുക.";
    
    
    
// }
function correctAnswer() {
    // var f=Number(f);
    // var d=Number(d);
    // var n=Number(n);
    var answer=f+(n-1)*d;
    var checkanswer=document.form.writeanswer.value; 
    var checkanswer=Number(checkanswer);
    if (checkanswer == ""){
        alert("Please type Answer");
    }
    else if(checkanswer == answer){
        document.getElementById("x").innerHTML ="Your Answer is Right. Congragulations";
        document.getElementById("result").style.display = "block";
    
    }
    
    else{
        document.getElementById("x").innerHTML ="Your Answer is Wrong. Try Again";
    
    document.getElementById("result").style.display = "block";
    }
}
function showButton(){
    document.getElementById("originalAnswer").style.display = "block";
}
function Steps(){
    var checkanswer=document.form.writeanswer.value; 
    var checkanswer=Number(checkanswer);
    // var f=Number(f);
    // var d=Number(d);
    // var n=Number(n);
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
       
  
  