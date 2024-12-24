var arr=[4,5,6,7,8];
let j=0; //scope of let is block level lasts till curly braces. This is newer version so we'll use let instead of var
//const a =0 // to not change anything. 
/*
a=a+1 //error: assignment to constant variable
a++; //error
*/
while(j<arr.length){
    console.log(arr[j]);
    j++;
}