function additionFactory(initial) {
  function add(amount) {
    return initial + amount;
  }
  return add;
}

let answer = additionFactory(1)(4);
console.log(answer);