function sig(x) {
  return 1/(1 + Math.exp(-x));
}

function sigD(x) {
  let s = sig(x);
  return s * (1 - s);
}

let w1 = Math.random();
let b1 = Math.random();

let w2 = Math.random();
let b2 = Math.random();

let w3 = Math.random();
let b3 = Math.random();

let input = 1;
let target = 0.9;
let lr = 0.1;
let e = 10000;

for(let i = 0; e > i; i++) {
  let z1 = w1 * input + b1;
  let h1 = sig(z1);
  
  let zo = w2 * h1 + b2;
  let output0 = sig(zo);
  let h2 = w3 * output0 + b3;
  let output = sig(h2);
  let error = output - target;
  let dout = error * sigD(h2);
  
  w3 -= lr * dout * output0;
  b3 -= lr * dout;
  
  let dh1 = dout * w3 * sigD(zo);
  w2 -= lr * dh1 * h1;
  b2 -= lr * dh1;
  
  let dh2 = dout * w3 * sigD(zo) * w2 * sigD(z1);;
  w1 -= lr * dh2 * input;
  b1 -= lr * dh2;
}

console.log(sig(w3 * sig(w2 * sig(w1 * input + b1) + b2) + b3));
