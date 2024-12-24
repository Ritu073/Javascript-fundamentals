// JSON is used to exchange data 
//convert to string and then transport it using object
//JSON
obj={name:"ritu",length: 1}
jso=JSON.stringify(obj);
console.log(jso);

//converting to string makes it easy to transport
//obj->string
//JSON standard requires double quotes
//javascript is converted to json string
parsed=JSON.parse(`{"name":"ritu","length":1}`)
console.log(parsed);

//data transfer is helpful 
//study more as it is important

//Template literals -Backticks
a=34;
console.log(`this is my ${a}`) //replaces with variable in string
