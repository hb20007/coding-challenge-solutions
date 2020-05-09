import unittest
from partOne import parse_intcodes
from partTwo import find_noun_and_verb

class TestDay2(unittest.TestCase):
	def test_part1(self):
		tests = [
			([1, 0, 0, 0, 99], 2),
			([2, 3, 0, 3, 99], 2),
			([2, 4, 4, 5, 99, 0], 2),
			([1, 1, 1, 4, 99, 5, 6, 0, 99], 30)
		]

		for test in tests:
			with self.subTest(test=test):
				self.assertEqual(parse_intcodes(test[0]), test[1])

if __name__ == '__main__':
    unittest.main()
