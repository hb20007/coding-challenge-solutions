import unittest
from partOne import meets_criteria
from partTwo import meets_criteria2

class TestDay4(unittest.TestCase):
	def test_part1(self):
		tests = [
			(122345, True),
			(111123, True),
			(135679, False),
			(111111, True),
			(223450, False),
			(123789, False)
		]

		for test in tests:
			with self.subTest(test=test):
				self.assertEqual(meets_criteria(test[0]), test[1])

	def test_part2(self):
		tests = [
			(112233, True),
			(123444, False),
			(111122, True)
		]

		for test in tests:
			with self.subTest(test=test):
				self.assertEqual(meets_criteria2(test[0]), test[1])

if __name__ == '__main__':
    unittest.main()
