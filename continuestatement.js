var arr=[32,47,65,13,94];
for(var i=0;i<arr.length;i++){
    if(i==2){
        continue //skips execution at arr position 2 and prints after arr 2.
    }
    console.log(arr[i])
} //output: 32,47,13,94
