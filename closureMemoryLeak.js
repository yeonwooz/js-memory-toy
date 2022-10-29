// var os = require('os');

var theThing = null;

var replaceThing = (function () {
  var originalThing = theThing;
  // 상위 스코프인 originalThing을 참조하는 스코프를 갖게됨
  // 동시에 theThing 도 참조하게됨.
  var unused = function () {
    console.log("never called");
    if (originalThing) console.log("hi");
  };

  //
  theThing = {
    longStr: new Array(1000000).join("*"),
    someMethod: function () {
      console.log(someMessage);
    },
  };

  let cnt = 0;

  return function counter() {
    cnt++;
    return cnt;
  };
})();

setInterval(() => {
  let answer = replaceThing();
  console.log(answer);
  console.log(process.memoryUsage());
  // console.log(os.freemem())
  // console.log(os.totalmem())
}, 1000);
