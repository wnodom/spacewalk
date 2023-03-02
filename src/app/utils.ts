export function shuffleArrayInPlace(array: unknown[]) {
  let currentIndex = array.length;
  let randomIndex: number;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    [ array[currentIndex], array[randomIndex] ] =
      [ array[randomIndex], array[currentIndex] ]
  }

  return array;
}
