/*Assume there is a object of this format 
var obj = {
 “id” : 4, “name” : “abc”,
 “id” : 10, “name” : “ab2”,
 “id” : 5, “name” : “abc3”,
 “id” : 6, “name” : “abc5”
}
It can be a dictionary or java object, as per your language of choice. But its key/value pair dictionary simply.

Write a code to sort the object by id 
I.e final output should have objected sort by id’s*/
//import React from "react"


function App()
{
  var obj = {
4:"abc",
10:"ab2",
5: "abc3",
6: "abc5"
}

let key=Object.keys(obj)
let key1={}

let value=Object.values(obj)
for(let i=0;i<key.length;i++)
{
  key1=key
 }

return`${key1} => ${value}`

}
export default App;

