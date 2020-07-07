

var n=Math.floor(Number(Math.random()*200)+4);
var f=Math.floor(Number(Math.random()*40)-10);
var d=Math.floor(Number(Math.random()*40)-10);
// function myFunction() {
    var f=Number(f);
    var d=Number(d);
    var n=Number(n);
    var m=(f+(2*d));
    
    if(n==1 ||n==21||n==31||n==41||n==51||n==61||n==71||n==81||n==91||n==101||n==111||n==121||n==131||n==141||n==151||n==161||n==171||n==181||n==191||n==201){
        document.getElementById("demo").innerHTML ="In the Arithmetic Sequence, "+(f)+" , "+(f+d)+" , "+m+" , . . .   find "+n +"<sup>st</sup> term ?";
    }
    else if(n==2 || n==22||n==32||n==42||n==52||n==62||n==72||n==82||n==92||n==102||n==121||n==122||n==132||n==142||n==152||n==162||n==172||n==182||n==192||n==202){
        document.getElementById("demo").innerHTML ="In the Arithmetic Sequence, "+(f)+" , "+(f+d)+" , "+m+" , . . .   find "+n +"<sup>nd</sup> term ?";
    }
    else if(n==3 || n==23||n==33||n==43||n==53||n==63||n==73||n==83||n==93||n==103||n==113||n==123||n==133||n==143||n==153||n==163||n==173||n==183||n==193||n==203){
        document.getElementById("demo").innerHTML ="In the Arithmetic Sequence, "+(f)+" , "+(f+d)+" , "+m+" , . . .   find "+n +"<sup>rd</sup> term ?";
    }
    else{
        
        document.getElementById("demo").innerHTML ="In the Arithmetic Sequence, "+(f)+" , "+(f+d)+" , "+m+" , . . .    find "+n +"<sup>th</sup> term ?";
    }
    
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
       
  
  