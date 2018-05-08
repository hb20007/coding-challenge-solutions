//By listing the first six prime numbers : 2, 3, 5, 7, 11, and 13, we can see that the 6th prime is 13.
//
//What is the 10 001st prime number ?

#include <iostream>
using namespace std;

const int n = 10001;

//
//bool isPrime(unsigned int num)   this code would say that 2 is not prime. The solution is to reverse the return true and return false. see below. this code here is simply wrong
//{
//	for (size_t i = 2; i < sqrt(num); i++)
//		if ((num % i) == 0) return true;
//	return false;
//}

bool isPrime(unsigned int num)
{
	for (size_t i = 2; i <= sqrt(num); i++)
		if ((num % i) == 0) return false;
	return true;
}

int main()
{
	int i ;
	int count = 0;
	for (i=2; count != n; i++)  //note it's count != 10001 not count == 10001          NB this code does not work cuz when the loop runs in the end 'i' updates even when the loop return so the number returned is 1+the nth prime number
		if (isPrime(i))
			count++;
	//for (i = 2; count != n; i++)  //note it's count != 10001 not count == 10001             
	//	if (isPrime(i))
	//		count++;
	cout << i-1 << endl;  //NB why it's i-1 not i, read the previous note
	system("pause");
}