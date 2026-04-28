1. Line 12 logs the last value of i. Var has function scope and both the declaration of i and the part that accesses i later are in the same function. 
2. The last value of discounted price will be logged. The variable lives in the scope of the function since the var keyword was used. 
3. The last value of final price is logged for the same reasons as questions 1 and 2. 
4. The array 'discounted' is returned by reference from the function. Although it was declared with the var keyword, it will live as long as something holds onto it. (I tested this with a simpler function.)
5. The array has block scope, but it is returned by the function. The name discounted gets thrown away but the array still lives in memory if it is stored in another variable or used by the caller. 
6. Error. The variable 'discounted' goes out of scope once the block it was declared in is exited. (The for-loop block)
7. The last value of finalPrice will be logged. It is still in the scope it was declared in. 
8. It will return a reference to the modified array which is referenced by 'discounted' in the scope it was declared in. Once it leaves that scope, the variable name no longer exists. The caller can still receive the array. 
9. There will be an error since this line tries to access a let declared variable outside of the block it was declared in. 
10. The line will log the value of the const variable length. 
11. There will be an error since the array was declared with the const keyword and the function tried to modify it. 
12. 
A: student.name
B: student["Grad Year"]
C: student.greeting()
D: student["Favorite Teacher"].name
E: student.courseload[0]
13.
A: '32', the number 2 was converted to its string representation
B: 1, the string 3 was converted to its numerical representatoin
C: 3, null was converted to the number 0
D: '3null', null was converted to the string "null"
E: 4, true was converted to the number 1
D: 0, false was converted to the number 1 and null to 0
F: '3undefined', undefined was converted to the string "undefined"
G: NaN, both are converted to numbers, number(undefined) = NaN, and any arithmetic operation involving NaN is NaN.  
14.
A: true, '2' is converted to a number
B: no conversion, strings are compared lexicographically 
C: true, '2' converted to number and == is weak comparison so result is true
D: false, with === there is no type coercion and if the values are not of the same type the result is false
E: false, true converted to 1 and result is false
F: true, Boolean(2) casts 2 into its corresponding boolean value which is true
15. == is the loose equality operator, objects can be type coerced before comparison. 
=== is the strict equality operator, objects do not undergo type coercion before comparison and their types must also be equal. 
17. The array passed as the second argument to the function call on line 13 will be modified such that all of its elements will be set to 2x their original values. Within the modifyArray function, the for loop traverses the array and stores the result of doSomething(i) as the ith element of the array.  
19. 
1
4
3
2
