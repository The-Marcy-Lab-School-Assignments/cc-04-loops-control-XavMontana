//Write your solutions in this file, don't forget to test your functions.
//1
countFromOne = (num) => {
  for (let i = 1; i <= num; i++) {
    console.log(i);
  }
};

countFromOne(10);

//2
countEveryOdd = (num) => {
  for (let i = 1; i <= num; i++) {
    if (i % 2 !== 0) {
      console.log(i);
    }
  }
};

countEveryOdd(10);

//3
isNegative = (num) => {
  if (num < 0) {
    return true;
  } else {
    return false;
  }
};

console.log(isNegative(3));
console.log(isNegative(-2));
console.log(isNegative(Math.PI));

//4
betweenFiveAndTwenty = (num) => {
  if (num >= 5 && num <= 20) {
    return true;
  } else {
    return false;
  }
};

console.log(betweenFiveAndTwenty(12));
console.log(betweenFiveAndTwenty(5));
console.log(betweenFiveAndTwenty(100));

//5
sumOfThreeOrFive = () => {};
