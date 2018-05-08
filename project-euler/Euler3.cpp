//What is the largest prime factor of the number 600851475143 ?

#include <iostream>
#include <cmath>
//#include <cstdlib>
//#include <ctime>
//#include <fstream>
using namespace std;

bool isPrime(unsigned long long int p) 
{
	for (unsigned long long int c = 2; c < sqrtl(p); c++)
	{
		if (p % c == 0) return false;  // I initially had return true here and return false below cuz that's what I'm used to. BC!
	}
    return true
}


int main()
{
	for (unsigned long long int i = 2; i < (600851475143 / 2); i++)
		if ((600851475143 % i == 0) && (isPrime(i) == true))
			cout << i << endl; 
	system("pause");
	//return 0;
}