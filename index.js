function sig(x) {
  return 1/(1 + Math.exp(-x));
}

function sigD(x) {
  let s = sig(x);
  return s * (1 - s);
}
//1-1-1-1 neural network
let w1 = Math.random();
let b1 = Math.random();

let w2 = Math.random();
let b2 = Math.random();

let w3 = Math.random();
let b3 = Math.random();

let input = 0.6;
let target = 1.0;
let lr = 0.1;
let e = 10000;

for(let i = 0; e > i; i++) {
  let z1 = w1 * input + b1;
  let h1 = sig(z1);
  
  let z2 = w2 * h1 + b2;
  let h2 = sig(z2);
  let z3 = w3 * h2 + b3;
  let output = sig(z3);
  let error = output - target;
  let dout = error * sigD(z3);
  
  w3 -= lr * dout * h2;
  b3 -= lr * dout;
  
  let dh2 = dout * w3 * sigD(z2);
  w2 -= lr * dh2 * h1;
  b2 -= lr * dh2;
  
  let dh1 = dh2 * w2 * sigD(z1);;
  w1 -= lr * dh1 * input;
  b1 -= lr * dh1;
}

console.log(sig(w3 * sig(w2 * sig(w1 * input + b1) + b2) + b3).toFixed(2));
