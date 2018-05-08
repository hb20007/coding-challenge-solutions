//The pair 3,5 is special as it is the first prime pair to have difference of two. (Twin primes) 
//After this, comes pair 5,7. 
//The distance between these two pairs is 2 as it is calculated by subtracting the first member of each pair. 
//Under 100, the pair 59,61 has the longest length from such previous pair 41,43 with the distance of 18. 
//
//Find longest distance of such prime pair, each member below one million, from such previous pair.

public class RoseCode4 {

	private static boolean isPrime(final int n) {
		for (int i = 2; i <= Math.sqrt(n); i++)
			if (n % i == 0)
				return false;
		return true;
	}
	
	private static boolean isTwinPrimeFirstTerm(final int primeNum) {
		return isPrime(primeNum+2)? true: false;	
	}

	public static void main(String[] args) {
		int twinPrimesFirstTerm = 3, longestDistance = 0;
		for	(int j = 5; j < 1e6; j += 2)
			if (isPrime(j) && isTwinPrimeFirstTerm(j)) {
				if (j - twinPrimesFirstTerm > longestDistance)
					longestDistance = j - twinPrimesFirstTerm;
				twinPrimesFirstTerm = j;
			}
		System.out.println(longestDistance);
	}
}
