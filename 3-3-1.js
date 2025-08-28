function sig(x) {
  return 1 / (1 + Math.exp(-x));
}

function sigD(x) {
  let s = sig(x);
  return s * (1 - s);
}

let w1 = Math.random();
let w2 = Math.random();
let w3 = Math.random();
let b1 = Math.random();

let w4 = Math.random();
let w5 = Math.random();
let w6 = Math.random();
let b2 = Math.random();
let b3 = Math.random();

let w7 = Math.random();
let w8 = Math.random();
let w9 = Math.random();

let wo1 = Math.random();
let wo2 = Math.random();
let wo3 = Math.random();

let bo = Math.random();

let input1 = 0.5;
let input2 = 0.2;
let input3 = 0.3;
let target = 1.0;
let lr = 0.1;
let e = 1000000;

for(let i = 0; e > i; i++) {
  let z1 = w1 * input1 + w2 * input2 + w7 * input3 + b1;
  let z2 = w3 * input1 + w4 * input2 + w8 * input3 + b2;
  let z3 = w5 * input1 + w6 * input2 + w9 * input3 + b3;
  
  let h1 = sig(z1);
  let h2 = sig(z2);
  let h3 = sig(z3);
  
  let zo = wo1 * h1 + wo2 * h2 + wo3 * h3 + bo;
  let output = sig(zo);
  
  let error = output - target;
  let dout = error * sigD(zo);
  let owo1 = wo1;
  let owo2 = wo2;
  let owo3 = wo3;
  
  wo1 -= lr * dout * h1;
  wo2 -= lr * dout * h2;
  wo3 -= lr * dout * h3;
  bo -= lr * dout;
  
  let dh1 = dout * owo1 * sigD(z1);
  let dh2 = dout * owo2 * sigD(z2);
  let dh3 = dout * owo3 * sigD(z3);
  
  w1 -= lr * dh1 * input1;
  w2 -= lr * dh1 * input2;
  w7 -= lr * dh1 * input3;
  b1 -= lr * dh1;
  
  w3 -= lr * dh2 * input1;
  w4 -= lr * dh2 * input2;
  w8 -= lr * dh2 * input3;
  b2 -= lr * dh2;

  w5 -= lr * dh3 * input1;
  w6 -= lr * dh3 * input2;
  w9 -= lr * dh3 * input3;
  b3 -= lr * dh3;  
}

console.log(sig(wo1 * sig(w1 * input1 + w2 * input2 + w7 * input3 + b1) + wo2 * sig(w3 * input1 + w4 * input2 + w8 * input3 + b2) + wo3 * sig(w5 * input1 + w6 * input2 + w9 * input3 + b3) + bo))
