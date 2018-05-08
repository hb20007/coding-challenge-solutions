//Pair 3,7 is the first concatable prime pair as 3,7,37, and 73 are all prime. 
//When each member is below 100, there are 24 such pairs. 
//
//How many concatable prime pairs exist when each member is below one thousand?

public class RoseCode5 {
	
	private static final int limit = 1000;
	
	private static boolean isPrime(final int n) {
		for (int i = 2; i <= Math.sqrt(n); i++)
			if (n % i == 0)
				return false;
		return true;
	}
	
	private static boolean isConcatablePrimePair(final int primePair[]) {
		String prime1 = Integer.toString(primePair[0]),
				prime2 = Integer.toString(primePair[1]),
				primeCombo1 = prime1 + prime2, 
				primeCombo2 = prime2 + prime1;
		int primeCombo1int = Integer.parseInt(primeCombo1),
				primeCombo2int = Integer.parseInt(primeCombo2);
		return isPrime(primeCombo1int) && isPrime(primeCombo2int)? true: false;
	}
	
	public static void main(String[] args) {
		int concatablePrimeCount = 0;
		for (int i = 3; i < limit; i += 2) {  //No prime number involving '2' can be concatable
			if (!isPrime(i))
				continue;
			for (int j = i + 2; j < limit; j += 2) {
				int potentialPair[] = {i, j};				
				if (isPrime(j) && isConcatablePrimePair(potentialPair))
					concatablePrimeCount++;
			}
		}
		System.out.println(concatablePrimeCount);
	}

}
