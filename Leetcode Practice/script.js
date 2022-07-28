"use strict";

const ransomNote = "aa";
const magazine = "aab";

/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
const canConstruct = function (ransomNote, magazine) {
  let output = true;
  let arrMagazine = magazine.split("");
  let indexLetter;
  for (let letter of ransomNote) {
    indexLetter = arrMagazine.indexOf(letter);

    if (arrMagazine.includes(letter)) {
      arrMagazine.splice(indexLetter, 1);
    } else {
      output = false;
    }
  }

  return output;
};

canConstruct(ransomNote, magazine);
