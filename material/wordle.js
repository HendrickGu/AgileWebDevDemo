function wordle(target, guess) {
  if (target.length !== 5 || guess.length !== 5) {
    return null; // Invalid input, return null
  }

  let result = [0, 0, 0, 0, 0];

  for (let i = 0; i < 5; i++) {
    if (target[i] === guess[i]) {
      result[i] = 2; // Letter in the right place
    } else if (target.includes(guess[i])) {
      result[i] = 1; // Letter in the word, but in a different place
    }
  }

  return result;
}
