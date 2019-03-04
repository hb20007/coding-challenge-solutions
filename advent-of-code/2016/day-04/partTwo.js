const fs = require('fs');
const rooms = fs
  .readFileSync(`${__dirname}/input.txt`)
  .toString()
  .split(`\n`)
  .map(extractInfo);

function extractInfo(room) {
  const [_, name, sectorId, sum] = room.match(
    /([a-z\-]+)([0-9]+)\[([a-z]{5})\]/
  );
  return { name, sectorId, sum };
}

function sortByKey(item1, item2) {
  const count1 = item1.count;
  const count2 = item2.count;

  const name1 = item1.char;
  const name2 = item2.char;

  let result = 0;

  if (count1 > count2) {
    result = 1;
  } else if (count1 < count2) {
    result = -1;
  } else if (count1 === count2) {
    if (name1 < name2) {
      result = 1;
    } else if (name1 > name2) {
      result = -1;
    }
  }

  return result;
}

function checksum(roomName) {
  return roomName
    .split('')
    .filter(char => /[a-z]/.test(char))
    .reduce(
      (info, char) => {
        const [chars, charCounts] = info;
        const index = chars.indexOf(char);

        if (index > -1) {
          charCounts[index].count += 1;
        } else {
          chars.push(char);
          charCounts.push({ char, count: 1 });
        }

        return [chars, charCounts];
      },
      [[], []]
    )[1]
    .sort(sortByKey)
    .reverse()
    .slice(0, 5)
    .map(charCountTuple => charCountTuple.char)
    .join('');
}

function checkRoom(name, sum) {
  return sum === checksum(name);
}

function realName(name, rotations) {
  const chars = 'abcdefghijklmnopqrstuvwxyz';
  return name
    .split('')
    .map(char => {
      const index = chars.indexOf(char);

      if (index > -1) {
        return chars[(index + rotations) % 26];
      }
      return char;
    })
    .join('');
}

rooms.forEach(room => {
  if (checkRoom(room.name, room.sum)) {
    console.log(realName(room.name, room.sectorId));
  }
});
