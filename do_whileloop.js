var arr=[34,67,44,39]
let j=0;
//this loops executes first then checks condition, it runs atleast 1 time even if true or false
do{ //j++; will skip 34 and print form 67
    console.log(arr[j]);
    j++;
}while(j<arr.length);

//while loop checks the condition first then executes