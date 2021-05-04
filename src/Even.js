//Define an array of numbers (use any random numbers). Write a program to print only the even numbers of the array. Do not use any library functions, need to do via for loops only

import React from "react";
export default function Even() {
  const List=[0,1,2,3,4,5,6,7,8,9,10]
  const Even1=[]
  for(let i of List)
  {
    if(i%2===0)
    {
     Even1.push(i)
    }
  }
 return<p>{Even1}</p>
 
}
