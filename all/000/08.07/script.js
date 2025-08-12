document.getElementById("bbb").addEventListener("click", () => fizzbuzz());

const list = [];
const f = "Fizz";
const b = "Buzz";

function fizzbuzz() {
  for (let i = 1; i <= 100; i++) {
    switcher(i);
  }
  console.table(list);
}

function switcher(i) {
  if (i % (3 * 5) === 0) {
    pusher(f + b);
  } else if (i % 3 === 0) {
    pusher(f);
  } else if (i % 5 === 0) {
    pusher(b);
  } else {
    pusher(i);
  }
}

function pusher(x) {
  list.push(x);
}
 