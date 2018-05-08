//A palindromic number reads the same backwards.The largest palindrome made from the product of 2 2 digit nos is 9009 = 91 × 99.
//Find the largest palindrome made from the product of two 3 - digit numbers.

#include <iostream>
#include <cmath>
//#include <cstdlib>
//#include <ctime>
//#include <fstream>
using namespace std;

//If you multiply two numbers a (has m digits) and b (has n digits), number of digits in ab is at most m+n. 
//In the least case, it is m+n-1. There are no other cases

int digitCounter(int x)
{
	int digitCount = 0;
	while (x != 0)
	{
		x /= 10;
		digitCount++;
	}
	return digitCount;
}

double digitCountInterpreter(int y)
{
	double digitCountInterpreted = pow(10, (y - 1));
	return digitCountInterpreted;
}

double reverser(int z)
{
	int logCounter=1; //NB how apt the name logCounter is :D
	double reverse = 0;
	int fix = z;
	while (z != 0)
	{
		reverse += ((z % 10) * ((digitCountInterpreter(digitCounter(fix)))/logCounter));   //NB composite function!! DUUUDE! I got a wrong answer and now I know why... when z was divided by 10 and become 123 for eg. instead of 1234, the digit count function was performed again and became 3 instead of 4, and the interpretation became 100 while I expected it to be 1000 and hence divided by the log counter. A way to fix it is to to avoid the logcounter but I wanna see if I can run the function only once. Yeah, simple, I solved this by introducing the variable 'fix'
		z /= 10;
		logCounter *= 10;
	}
	return reverse;
	//OMG! Their way is so elegant! No counting digits, no nothing!
	/*function reverse(n)
		reversed = 0
		while n > 0
			reversed = 10 * reversed + n mod 10
			n = n / 10
			return reversed*/
}

bool palindrome(int num)
{
	if (num == reverser(num)) return true;
		return false;
}

bool productOf2ThreeDigitNums(int n)
{
	int int1 = 100, int2 = 100;
	while (int1 < 1000) //Here is the best challenge. I want int1 to stay 100 and int2 to increment till it reaches 999. When it does, I want int1 to become 101 and int2 to cycle again till int1 reaches 999
	{
		if (n == int1*int2) return true;
		else
			if (int2 != 999) int2++; else
			{
				int1++;
				int2 = 100;
			}
		//instead of doing my genius trick of if elses inside the while, they use nested while loop, the outer one is for int1 and inner is for int2. Inner executes until int2 becomes 999 and then stops, then the increment for int1 is reached and the first outer while loop is run. The outer loop sets b back to 100 and then runs the inner while loop and then increments a again. WOW.
	}
	return false;
}
//This is fast enough for this case but could be improved.For starters, the
//current method checks many numbers multiple times.For example the
//number 69696 is checked both when a = 132 and b = 528 and when a = 528 and
//b = 132. To stop checking numbers like this we can assume a ≤ b, roughly
//halving the number of calculations needed.
// IT'S JUST A GENIUS LITTLE TRICK. With their method, instead of initializing int2 (b) back to 100, we initialize it back to a. So for eg. when a is 100, inner loop runs, stops then a becomes 101, then instead of setting b back to 100, it is set to 101, cuz the case 100*101 has already been checked!
int main()
{
	for (int h = 10000; h < 1000000; h++)
		if ((palindrome(h) == true) && (productOf2ThreeDigitNums(h) == true)) cout << h << endl;
	//They actually find the largest palindrome not just list all the palindromes. They set int largestPalindrome = 0 and loop and then if they find a palindrome which is > largestPalindrome, they set largestPalindrome as that.
	system("pause");
	//return 0;
}
//Next we should consider counting downwards from 999 instead of counting
//upwards from 100. This makes the program far more likely to find a large
//palindrome earlier, and we can quite easily stop checking a and b that would
//be too small to improve upon the largest palindrome found so far.
//For this they initialize a and b as 999. if a*b <= largestPalindrome, break.cuz we don't care about such numbers. 
//Also for inner loop it's while b >=a. So fist time checks only 999*999. Then decrement. Then checks 999*998, decrement
//This way we ensure b doesn't go down to 100 cuz we only wanna check the largest nos. 