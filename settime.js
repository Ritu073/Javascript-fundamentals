//settimeout and setinterval
//Arrow functions
// function sum(a,b){
//     return a+b;
// }
//above fucntion can be written as :

sum = (a)=>{
    return a+b;
}
//using arrow functions '=>'
//settimeout
logKro=()=>{
    document.querySelectorAll('.container')[1].innerHTML="<b> Set interval fired</b>"
}
//setTimeout(logKro,2000); //after 2s printd i'm logging in
//setInterval(logKro,2000);//continuous execution
clr=setInterval(logKro,2000);
//to stop setInterval: put setInterval in var and execute command clearInterval(clr)
//clearTimeout(clr) will not execute the setInterval at all after the defined seconds (cancel out)