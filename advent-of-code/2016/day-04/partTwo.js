import { readFileSync } from 'node:fs';

function extractRoomInfo(room) {
  const [, name, sectorID, checksum] = room.match(
    /([a-z-]+)-(\d+)\[([a-z]{5})\]/
  );
  return { name, sectorID, checksum };
}

const addCharToCharCountObjects = (charCountObjects, char) => {
  const index = charCountObjects.findIndex(
    (charCountObject) => charCountObject.char === char
  );

  const newCharCountObjects = [...charCountObjects];

  if (index > -1) {
    newCharCountObjects[index].count++;
  } else {
    newCharCountObjects.push({ char, count: 1 });
  }

  return newCharCountObjects;
};

const sortByCountAndChar = (item1, item2) => {
  let result = 0;

  if (item1.count < item2.count) {
    result = 1;
  } else if (item1.count > item2.count) {
    result = -1;
  } else if (item1.char < item2.char) {
    result = -1;
  } else if (item1.char > item2.char) {
    result = 1;
  }

  return result;
};

const calculateChecksum = (roomName, checksumLength) =>
  roomName
    .split('')
    .filter((char) => /[a-z]/.test(char))
    .reduce(addCharToCharCountObjects, [])
    .sort(sortByCountAndChar)
    .slice(0, checksumLength)
    .map((charCountObject) => charCountObject.char)
    .join('');

const isRoomReal = (name, checksum) =>
  checksum === calculateChecksum(name, checksum.length);

const decryptName = (name, forwardRotations) => {
  const ALPHABET = 'abcdefghijklmnopqrstuvwxyz';
  return name
    .split('')
    .map((char) => {
      const index = ALPHABET.indexOf(char);

      if (index > -1) {
        return ALPHABET[(index + forwardRotations) % ALPHABET.length];
      }
      return ' ';
    })
    .join('');
};

const rooms = readFileSync(`${import.meta.dirname}/input.txt`)
  .toString()
  .split(/[\r\n]+/)
  .map(extractRoomInfo);

const CRIB = 'object';

rooms.forEach((room) => {
  if (
    isRoomReal(room.name, room.checksum) &&
    decryptName(room.name, +room.sectorID).includes(CRIB)
  ) {
    console.log(room.sectorID);
  }
});
