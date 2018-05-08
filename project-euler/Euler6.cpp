//The sum of the squares of the first ten natural numbers is,
//
//12 + 22 + ... + 102 = 385
//The square of the sum of the first ten natural numbers is,
//
//(1 + 2 + ... + 10)2 = 552 = 3025
//Hence the difference between the sum of the squares of the first ten natural numbers and the square of the sum is 3025 − 385 = 2640.
//
//Find the difference between the sum of the squares of the first one hundred natural numbers and the square of the sum.

#include <iostream>
using namespace std;

const int n = 100;

//learnt my approach was unneccessary. since I had 2 loops that loop through the same numbers, I could just do sum1 = whatever and sum2 = whatever in the same loop. 

//also learnt that there is a much better approach. sum(n) = n(n + 1)/2
//sum sq = (2n+ 1)(n + 1)n/ 6

unsigned long long int sumOfSquares()
{
	unsigned long long int sum1 = 0;
	for (size_t i = 1; i <= n; i++)
		sum1 += (i*i);
	return sum1;
}

unsigned long long int squareOfSums()
{
	unsigned long long int sum2 = 0;
	for (size_t j = 0; j <= n; j++)
	{
		sum2 += j;
	}
	return (sum2*sum2);
}

int main()
{
	cout << squareOfSums() - sumOfSquares() << endl;
	system("pause");
}
