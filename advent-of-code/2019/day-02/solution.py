from part_one import parse_intcodes
from part_two import find_noun_and_verb


with open('input.txt') as f:
	INTS = [int(num) for num in f.read().split(',')]

INDEX1 = 1
VALUE1 = 12
INDEX2 = 2
VALUE2 = 2

print(f'PART 1: {parse_intcodes(INTS, INDEX1, VALUE1, INDEX2, VALUE2)}')

NOUN_INDEX = 1
VERB_INDEX = 2
OUTPUT = 19690720

print(f'PART 2: {find_noun_and_verb(INTS, OUTPUT, NOUN_INDEX, VERB_INDEX)}')
