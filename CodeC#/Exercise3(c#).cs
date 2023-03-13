using System;

int limit = 4;
int [] numbers = { 1, 2, 5, 7, 8, 9 };
int [] exp = {};
for (int i = 0; i < numbers.Length; i++) {
    if (numbers[i] > limit)
    {
        numbers[i] = exp;
    }
    
}
Console.WriteLine(exp);