//Mirror(Palindromic) prime is a prime number when reversed is the same prime. 
//For example, 191 is a mirror prime. 
//Assume all one digit primes are mirror primes. 
//
//Find sum of all mirror primes not exceeding one million.

public class RoseCode3 {
	private static int reverseNum(int n) {
		int reverse = 0;
		while (n != 0) {
			reverse = reverse * 10 + n % 10;
			n /= 10;
		}
		return reverse;
	}

	private static boolean isPrime(int x) {
		for (int i = 2; i <= Math.sqrt(x); i++) // NB It's <= the sqrt
			if (x % i == 0)
				return false;
		return true;
	}

	public static void main(String[] args) {
		int sum = 2; // 2, the only even prime, is already accounted for
		for (int j = 3; j < 1e6; j += 2) {
			if (isPrime(j) && reverseNum(j) == j)
				sum += j;
		}
		System.out.println(sum);
	}
}
