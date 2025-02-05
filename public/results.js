var score = sessionStorage.getItem("scoreR");

if (score >= 8 && score <= 11) {
  var img = document.createElement('img');
  img.src = "https://cdn.glitch.global/addc52e9-930a-4c37-8c0f-a9d519418138/wordicon?v=1734955239498";
  var src = document.getElementById("results");
  src.appendChild(img);
  document.getElementById("description").innerHTML = "Congrats! You are the wordsmith! You're creative with language, articulate, and quick with wordplay! Sadly, you may focus too much on specifics and struggle with non-verbal challenges. The games you would probably do the best at are Crosswords, Scrabble, and anagrams.";
}

if (score >= 12 && score <= 14) {
  var img = document.createElement('img');
  img.src = "https://cdn.glitch.global/addc52e9-930a-4c37-8c0f-a9d519418138/riddleicon?v=1734955259484";
  var src = document.getElementById("results");
  src.appendChild(img);
  document.getElementById("description").innerHTML = "Congrats! You are the riddler! You're a witty and quick problem solver who loves lateral thinking. Sadly, you can be cryptic in communication and might overlook practical details. The games you would probably do best at are riddles, brainteasers, and lateral thinking puzzles. ";
}

if (score >= 15 && score <= 17) {
  var img = document.createElement('img');
  img.src = "https://cdn.glitch.global/addc52e9-930a-4c37-8c0f-a9d519418138/connecticon?v=1734955269102";
  var src = document.getElementById("results");
  src.appendChild(img);
  document.getElementById("description").innerHTML = "Congrats! You are the connector! You're a collaborative person who sees patterns and connections others miss. Sadly, you dislike rigid rules and may struggle with isolated tasks. The games you would probably do best at are jigsaw puzzles and pattern recognition games. ";
}

if (score >= 18 && score <= 20) {
  var img = document.createElement('img');
  img.src = "https://cdn.glitch.global/addc52e9-930a-4c37-8c0f-a9d519418138/cardicon?v=1734955298192";
  var src = document.getElementById("results");
  src.appendChild(img);
  document.getElementById("description").innerHTML = "Congrats! You are the wild card! You're an adaptable person who thrives in unpredictable scenarios and enjoys spontaneity. Sadly, you are impulsive and struggle with long-term planning. The games you would probably do best at are solitaire, card-based puzzles. and luck-driven games. ";
}

if (score >= 21 && score <= 23) {
  var img = document.createElement('img');
  img.src = "https://cdn.glitch.global/addc52e9-930a-4c37-8c0f-a9d519418138/detecticon?v=1734955309543";
  var src = document.getElementById("results");
  src.appendChild(img);
  document.getElementById("description").innerHTML = "Congrats! You are the detective! You're a persistent and patient person who enjoys navigating complexity. Sadly, you are slow to finish tasks and may get lost in unnecessary details. The games you would probably do best at are mazes, escape rooms, and mystery puzzles. ";
}

if (score >= 24 && score <= 26) {
  var img = document.createElement('img');
  img.src = "https://cdn.glitch.global/addc52e9-930a-4c37-8c0f-a9d519418138/gridicon?v=1734955284356";
  var src = document.getElementById("results");
  src.appendChild(img);
  document.getElementById("description").innerHTML = "Congrats! You are the gridmaster! You're an organized and methodical person who thrives in structure. Sadly, you can become fixated on completing tasks perfectly. The games you would probably do best at are Sudoku, Kakuro, and grid-based puzzles. ";
}

if (score >= 27 && score <= 29) {
  var img = document.createElement('img');
  img.src = "https://cdn.glitch.global/addc52e9-930a-4c37-8c0f-a9d519418138/straticon?v=1734955251482";
  var src = document.getElementById("results");
  src.appendChild(img);
  document.getElementById("description").innerHTML = "Congrats! You are the strategist! You're a forward-thinking and tactical person who plans several steps ahead. Sadly, you dislike uncertainty and can be overly cautious. The games you would probably do best at are chess puzzles and logic grids. ";
}

if (score >= 30 && score <= 32) {
  var img = document.createElement('img');
  img.src = "https://cdn.glitch.global/addc52e9-930a-4c37-8c0f-a9d519418138/ciphericon?v=1734955195395";
  var src = document.getElementById("results");
  src.appendChild(img);
  document.getElementById("description").innerHTML = "Congrats! You are the ciphermind! You're an analytical and detail-oriented person who enjoys solving complex problems. Sadly, you overthink simple tasks and may get frustrated by unsolvable puzzles. The games you would probably do best at are cryptograms, ciphers, and decoding games. ";
}