var clicked1 = 0;
var clicked2 = 0;
var clicked3 = 0;
var clicked4 = 0;
var clicked5 = 0;
var clicked6 = 0;
var clicked7 = 0;
var clicked8 = 0;

var scoreOne = 0;
var scoreTwo = 0;
var scoreThree = 0;
var scoreFour = 0;
var scoreFive = 0;
var scoreSix = 0;
var scoreSeven = 0;
var scoreEight = 0;

var score = 0;

function questionOne(arr) {
  clicked1 = 1;
  switch(arr) {
    case 1:
      document.getElementById("one1").style.backgroundColor = "red";
      document.getElementById("one2").style.backgroundColor = "white";
      document.getElementById("one3").style.backgroundColor = "white";
      document.getElementById("one4").style.backgroundColor = "white";
      scoreOne = 1;
      break;
    case 2:
      document.getElementById("one2").style.backgroundColor = "red";
      document.getElementById("one1").style.backgroundColor = "white";
      document.getElementById("one3").style.backgroundColor = "white";
      document.getElementById("one4").style.backgroundColor = "white";
      scoreOne = 2;
      break;
    case 3:
      document.getElementById("one3").style.backgroundColor = "red";
      document.getElementById("one1").style.backgroundColor = "white";
      document.getElementById("one2").style.backgroundColor = "white";
      document.getElementById("one4").style.backgroundColor = "white";
      scoreOne = 3;
      break;
    case 4:
      document.getElementById("one4").style.backgroundColor = "red";
      document.getElementById("one1").style.backgroundColor = "white";
      document.getElementById("one2").style.backgroundColor = "white";
      document.getElementById("one3").style.backgroundColor = "white";
      scoreOne = 4;
      break;
  }
  return scoreOne;
}

function questionTwo(arr) {
  clicked2 = 1;
  switch(arr) {
    case 1:
      document.getElementById("two1").style.backgroundColor = "red";
      document.getElementById("two2").style.backgroundColor = "white";
      document.getElementById("two3").style.backgroundColor = "white";
      document.getElementById("two4").style.backgroundColor = "white";
      scoreTwo = 1;
      break;
    case 2:
      document.getElementById("two2").style.backgroundColor = "red";
      document.getElementById("two1").style.backgroundColor = "white";
      document.getElementById("two3").style.backgroundColor = "white";
      document.getElementById("two4").style.backgroundColor = "white";
      scoreTwo = 2;
      break;
    case 3:
      document.getElementById("two3").style.backgroundColor = "red";
      document.getElementById("two1").style.backgroundColor = "white";
      document.getElementById("two2").style.backgroundColor = "white";
      document.getElementById("two4").style.backgroundColor = "white";
      scoreTwo = 3;
      break;
    case 4:
      document.getElementById("two4").style.backgroundColor = "red";
      document.getElementById("two1").style.backgroundColor = "white";
      document.getElementById("two2").style.backgroundColor = "white";
      document.getElementById("two3").style.backgroundColor = "white";
      scoreTwo = 4;
      break;
  }
  return scoreTwo;
}

function questionThree(arr) {
  clicked3 = 1;
  switch(arr) {
    case 1:
      document.getElementById("three1").style.backgroundColor = "red";
      document.getElementById("three2").style.backgroundColor = "white";
      document.getElementById("three3").style.backgroundColor = "white";
      document.getElementById("three4").style.backgroundColor = "white";
      scoreThree = 1;
      break;
    case 2:
      document.getElementById("three2").style.backgroundColor = "red";
      document.getElementById("three1").style.backgroundColor = "white";
      document.getElementById("three3").style.backgroundColor = "white";
      document.getElementById("three4").style.backgroundColor = "white";
      scoreThree = 2;
      break;
    case 3:
      document.getElementById("three3").style.backgroundColor = "red";
      document.getElementById("three1").style.backgroundColor = "white";
      document.getElementById("three2").style.backgroundColor = "white";
      document.getElementById("three4").style.backgroundColor = "white";
      scoreThree = 3;
      break;
    case 4:
      document.getElementById("three4").style.backgroundColor = "red";
      document.getElementById("three1").style.backgroundColor = "white";
      document.getElementById("three2").style.backgroundColor = "white";
      document.getElementById("three3").style.backgroundColor = "white";
      scoreThree = 4;
      break;
  }
  return scoreThree;
}

function questionFour(arr) {
  clicked4 = 1;
  switch(arr) {
    case 1:
      document.getElementById("four1").style.backgroundColor = "red";
      document.getElementById("four2").style.backgroundColor = "white";
      document.getElementById("four3").style.backgroundColor = "white";
      document.getElementById("four4").style.backgroundColor = "white";
      scoreFour = 1;
      break;
    case 2:
      document.getElementById("four2").style.backgroundColor = "red";
      document.getElementById("four1").style.backgroundColor = "white";
      document.getElementById("four3").style.backgroundColor = "white";
      document.getElementById("four4").style.backgroundColor = "white";
      scoreFour = 2;
      break;
    case 3:
      document.getElementById("four3").style.backgroundColor = "red";
      document.getElementById("four1").style.backgroundColor = "white";
      document.getElementById("four2").style.backgroundColor = "white";
      document.getElementById("four4").style.backgroundColor = "white";
      scoreFour = 3;
      break;
    case 4:
      document.getElementById("four4").style.backgroundColor = "red";
      document.getElementById("four1").style.backgroundColor = "white";
      document.getElementById("four2").style.backgroundColor = "white";
      document.getElementById("four3").style.backgroundColor = "white";
      scoreFour = 4;
      break;
  }
  return scoreFour;
}

function questionFive(arr) {
  clicked5 = 1;
  switch(arr) {
    case 1:
      document.getElementById("five1").style.backgroundColor = "red";
      document.getElementById("five2").style.backgroundColor = "white";
      document.getElementById("five3").style.backgroundColor = "white";
      document.getElementById("five4").style.backgroundColor = "white";
      scoreFive = 1;
      break;
    case 2:
      document.getElementById("five2").style.backgroundColor = "red";
      document.getElementById("five1").style.backgroundColor = "white";
      document.getElementById("five3").style.backgroundColor = "white";
      document.getElementById("five4").style.backgroundColor = "white";
      scoreFive = 2;
      break;
    case 3:
      document.getElementById("five3").style.backgroundColor = "red";
      document.getElementById("five1").style.backgroundColor = "white";
      document.getElementById("five2").style.backgroundColor = "white";
      document.getElementById("five4").style.backgroundColor = "white";
      scoreFive = 3;
      break;
    case 4:
      document.getElementById("five4").style.backgroundColor = "red";
      document.getElementById("five1").style.backgroundColor = "white";
      document.getElementById("five2").style.backgroundColor = "white";
      document.getElementById("five3").style.backgroundColor = "white";
      scoreFive = 4;
      break;
  }
  return scoreFive;
}

function questionSix(arr) {
  clicked6 = 1;
  switch(arr) {
    case 1:
      document.getElementById("six1").style.backgroundColor = "red";
      document.getElementById("six2").style.backgroundColor = "white";
      document.getElementById("six3").style.backgroundColor = "white";
      document.getElementById("six4").style.backgroundColor = "white";
      scoreSix = 1;
      break;
    case 2:
      document.getElementById("six2").style.backgroundColor = "red";
      document.getElementById("six1").style.backgroundColor = "white";
      document.getElementById("six3").style.backgroundColor = "white";
      document.getElementById("six4").style.backgroundColor = "white";
      scoreSix = 2;
      break;
    case 3:
      document.getElementById("six3").style.backgroundColor = "red";
      document.getElementById("six1").style.backgroundColor = "white";
      document.getElementById("six2").style.backgroundColor = "white";
      document.getElementById("six4").style.backgroundColor = "white";
      scoreSix = 3;
      break;
    case 4:
      document.getElementById("six4").style.backgroundColor = "red";
      document.getElementById("six1").style.backgroundColor = "white";
      document.getElementById("six2").style.backgroundColor = "white";
      document.getElementById("six3").style.backgroundColor = "white";
      scoreSix = 4;
      break;
  }
  return scoreSix;
}

function questionSeven(arr) {
  clicked7 = 1;
  switch(arr) {
    case 1:
      document.getElementById("seven1").style.backgroundColor = "red";
      document.getElementById("seven2").style.backgroundColor = "white";
      document.getElementById("seven3").style.backgroundColor = "white";
      document.getElementById("seven4").style.backgroundColor = "white";
      scoreSeven = 1;
      break;
    case 2:
      document.getElementById("seven2").style.backgroundColor = "red";
      document.getElementById("seven1").style.backgroundColor = "white";
      document.getElementById("seven3").style.backgroundColor = "white";
      document.getElementById("seven4").style.backgroundColor = "white";
      scoreSeven = 2;
      break;
    case 3:
      document.getElementById("seven3").style.backgroundColor = "red";
      document.getElementById("seven1").style.backgroundColor = "white";
      document.getElementById("seven2").style.backgroundColor = "white";
      document.getElementById("seven4").style.backgroundColor = "white";
      scoreSeven = 3;
      break;
    case 4:
      document.getElementById("seven4").style.backgroundColor = "red";
      document.getElementById("seven1").style.backgroundColor = "white";
      document.getElementById("seven2").style.backgroundColor = "white";
      document.getElementById("seven3").style.backgroundColor = "white";
      scoreSeven = 4;
      break;
  }
  return scoreSeven;
}

function questionEight(arr) {
  clicked8 = 1;
  switch(arr) {
    case 1:
      document.getElementById("eight1").style.backgroundColor = "red";
      document.getElementById("eight2").style.backgroundColor = "white";
      document.getElementById("eight3").style.backgroundColor = "white";
      document.getElementById("eight4").style.backgroundColor = "white";
      scoreEight = 1;
      break;
    case 2:
      document.getElementById("eight2").style.backgroundColor = "red";
      document.getElementById("eight1").style.backgroundColor = "white";
      document.getElementById("eight3").style.backgroundColor = "white";
      document.getElementById("eight4").style.backgroundColor = "white";
      scoreEight = 2;
      break;
    case 3:
      document.getElementById("eight3").style.backgroundColor = "red";
      document.getElementById("eight1").style.backgroundColor = "white";
      document.getElementById("eight2").style.backgroundColor = "white";
      document.getElementById("eight4").style.backgroundColor = "white";
      scoreEight = 3;
      break;
    case 4:
      document.getElementById("eight4").style.backgroundColor = "red";
      document.getElementById("eight1").style.backgroundColor = "white";
      document.getElementById("eight2").style.backgroundColor = "white";
      document.getElementById("eight3").style.backgroundColor = "white";
      scoreEight = 4;
      break;
  }
  return scoreEight;
}

function submit() {
  if (clicked1 == 0 || clicked2 == 0 || clicked3 == 0 || clicked4 == 0 || clicked5 == 0 || clicked6 == 0 || clicked7 == 0 || clicked8 == 0) {
    alert("Please answer all questions :)");
  }
  else {
    score = scoreOne + scoreTwo + scoreThree + scoreFour + scoreFive + scoreSix + scoreSeven + scoreEight;
    sessionStorage.setItem("scoreR", score);
    location.replace("results.html");
  }
}