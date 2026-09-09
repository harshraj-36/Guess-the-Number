# Guess-the-Number
This is level 1 project about guessing the number. Play the game and enjoy your free time.
The random number is generated using:
Math.floor(Math.random() * (max - min + 1) + min)

First, `(max - min + 1)` determines the total number of possible integers in the given range. For example, if `min = 5` and `max = 10`, then `10 - 5 = 5`. However, the numbers from 5 to 10 are actually 6 numbers: **5, 6, 7, 8, 9, and 10**. Therefore, we add `1` to the difference, making the range size `6`.

Next, `Math.random()` generates a random decimal number from `0` (inclusive) up to `1` (exclusive), such as `0.25`, `0.73`, or `0.9999`. When we multiply `Math.random()` by `6`, the result can be any decimal number from `0` up to, but not including, `6`. However, we don't want our final number to start from `0`. We want it to start from our minimum value, which is `5` in this example. Therefore, we add `min`, which is `5`, shifting the range so that the final result falls between **5 and 11, excluding 11**.

Finally, `Math.floor()` rounds the resulting decimal number down to the nearest whole number. Because the value can never actually reach `11`, rounding it down gives us a random integer from **5 to 10**, with both `5` and `10` included.