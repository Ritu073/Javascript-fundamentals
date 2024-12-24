var arr=[1,2,3,4,5]
console.log(arr); //1,2,3,4,5
for(var i=0;i<arr.length;i++){
    console.log(arr[i]); //1,2,3,4,5
}

//using for each
console.log("Using for each:\n");
arr.forEach(function(element){
    console.log(element);
})
