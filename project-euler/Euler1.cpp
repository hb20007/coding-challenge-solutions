//If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. 
//The sum of these multiples is 23.
//Find the sum of all the multiples of 3 or 5 below 1000. (1000 not included)

#include <iostream>
//#include <string>
//#include <cmath>
using namespace std;

bool multipleOf3(int x)
{
	int factor_3 = x / 3;
	if (factor_3*3 == x) return true;
	else return false;
	// can also use if (x % 3 == 0) to find if x is a multiple of 3 
}

bool multipleOf5(int y)
{
	int factor_5 = y / 5;
	if (factor_5 * 5 == y) return true;
	else return false;
}

int main()
{
	int i = 1;
	unsigned long int sum = 0;
	//bool isMultipleOf3;
	//bool isMultipleOf5;
	//bool isMultipleOf3n5;
	while (i < 1000)
	{
		//ismultipleof3 = multipleof3(i);
		//if (ismultipleof3 == true) sum += i;
		//ismultipleof5 = multipleof5(i);
		//if (ismultipleof5 == true) sum += i;
		//      ismultipleof3n5 = multipleof3(i) && multipleof5(i);  // x = y||z also works also x = !y. as for xor, it can be constructed from and, or & not. (!a && b) || (a && !b)
		//if (ismultipleof3n5 == true) sum -= i;
		//i++;
		//

		if ((multipleOf3(i) == true) || (multipleOf5(i) == true)) sum += i;
		i++;
	}
	cout << sum << endl;
	system("pause");
	return 0;
}

