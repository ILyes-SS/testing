function caesarCipher(str, factor) {
  if (factor == 0) return str;
  const alphabets = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];
  const strSplit = str.split("");
  let newStr = [];
  strSplit.forEach((letter) => {
    let index = alphabets.findIndex(
      (element) => element.toUpperCase() == letter.toUpperCase()
    );
    if (index == -1) {
      newStr.push(letter);
    } else {
      if (letter == letter.toUpperCase())
        newStr.push(alphabets[(index + factor) % 26].toUpperCase());
      else newStr.push(alphabets[(index + factor) % 26]);
    }
  });

  return newStr.join("");
}

module.exports = caesarCipher;
