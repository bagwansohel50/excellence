/*Find the maximum consecutive 1's in an array of 0's and 1's.
Example:
a) 00110001001110 - Output :3 [Max num of consecutive 1's is 3]
b) 1000010001 - Output :1 [Max num of consecutive 1's is 1]*/

import React from "react";
export default function Consecutive() {
  const nums=[1,0,0,0,0,1,0,0,0,1]
let large = 0;
let current = 0;
  
for (let i = 0; i<nums.length; i++) 
{
(nums[i] === 0)? current = 0:current++
   
  if (current > large) 
  {
    large = current
  }
}
 return<p>{ large}</p>
 
}
