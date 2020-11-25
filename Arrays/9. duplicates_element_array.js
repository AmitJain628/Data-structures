/*


Approach:The elements in the array is from 0 to n-1 and all of them are positive. 
So to find out the duplicate elements, 
a HashMap is required, but the question is to solve the problem in constant space. 
There is a catch, the array is of length n and the elements are from 0 to n-1 (n elements). 
The array can be used as a HashMap.
Algorithm:
Traverse the array from start to end.
For every element,take its absolute value 
and if the abs(array[i])‘th element is positive, 
the element has not encountered before, 
else if negative the element has been encountered 
before print the absolute value of the current element.

*/
