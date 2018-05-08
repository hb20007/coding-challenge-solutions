//2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.
//What is the smallest positive number that is evenly divisible by all of the numbers from 1 to 20 ?
//Evenly divisible means that you have no remainder.

//Note to self: when u start working on this... check a no. if divisible by 20 then go to 19 etc instead of going 1 ->20 cuz ur working with less nos this way. If u start at 1, u will work with all real nos and code will run for too long

#include <iostream>
//#include <cmath>
//#include <cstdlib>
//#include <ctime>
//#include <fstream>
using namespace std;

const unsigned long long int startingPoint = 2520;

bool evenlyDivisible(unsigned long long int number, unsigned long long int factor)
{
	if (number % factor == 0) return true;
	return false;
}

int main( )
{
	unsigned long long int num = startingPoint;
		bool flag = true;
	while (flag == true)
	{
		checkpoint:
		num++;
		for (size_t i = 20; i >= 11; i--) //note the optimazation of looping from 20 to 11 only
		{
			if (!evenlyDivisible(num, i)) goto checkpoint;
		}
		flag = false;
	}
	cout << num << endl;
	system("pause");
}
//
//Smarter solution:
//Let N be the smallest number that is divisible by all the integers from 2 to k.For N to be
//the smallest value with this property we must ensure that in its prime factorisation it
//does not contain any more prime factors than is absolutely necessary.
//
//Consider the first three cases of k :
//k = 2, N = 2
//k = 3, N = 2 * 3 = 6
//k = 4, N = 2 * 3 * 2 = 12//
//We can see that for k = 4 we did not need to evaluate 2 * 3 * 4, because one of the 2’s in
//the prime factorisation of 4 = 2 * 2 was already included.If we now consider the next
//two cases :
//
//k = 5, N = 2 * 2 * 3 * 5 = 60
//k = 6, N = 2 * 2 * 3 * 5 = 60
//
//We can see that N = 60 for both k = 5 and k = 6, because if N contains the factors 2
//and 3 it already contains everything necessary for it to be divisible by 6.
//Applying this principle for the case k = 20:
////	N = 2 * 3 * 2 * 5 * 7 * 2 * 3 * 11 * 13 * 2 * 17 * 19 = 232792560////		And that's the answer!