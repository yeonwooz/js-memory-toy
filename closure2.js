function getCounter() {
  let cnt = 0;
  return () => {
    return cnt++;
  };
}

let count = getCounter();

console.log(count());
console.log(count());
console.log(count());
