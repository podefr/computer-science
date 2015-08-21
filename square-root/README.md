This is an example of how to calculate the square root for a given number.

Naive implementation:
-------------------

The naive implementation recursively searches for the square root based on:
1. The square root for a number n is between 1 and n
1. The guess is determined by halving the sum of min and max (starting with 1 and number)
1. When the squared guess is greater than the number, the max becomes the guess
1. When the squared guess is lower than the number, the min becomes the guess
1. When the squared guess is close to the number (based on the precision), the result is returned.

While the implementation is simple, there are numbers that get difficult to find and the algorithm may end up running forever and trigger a stack overflow. 

Babylonian implementation:
-----------------

The babylonian implementation makes a better guess than the naive implementation by dividing the number by the previous guess, which leads to less recursions and less risk of running into a stack overflow.