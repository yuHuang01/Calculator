This is the third JavaScript project in The Odin Project Curriculum

The most challenging part of the project was to figure out how to store the inputted numbers and the operation.
In order to make it work I had to star my project from skrech a few times.
Finally I came up with this solution:

    1. Store the whole operation in a string
    2. When the user click on the "=" button, use split(" ") method and it return an array with the length of 3
    3. The first and the last part of the array going to be the two inputted number and the middle one is the operator
    4. Then I can pass these to a function as the parameters and return correct result

My calculator still can only make an operation on a single pair of numbers.

