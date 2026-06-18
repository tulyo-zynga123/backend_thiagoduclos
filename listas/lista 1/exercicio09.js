function min(a, b) {
  if (a < b) {
    return a;
  } else {
    return b;
  }
}

console.log(min(10, 5));

//em arrow function//

const min = (a, b) => (a < b ? a : b);

console.log(min(12, 20));
