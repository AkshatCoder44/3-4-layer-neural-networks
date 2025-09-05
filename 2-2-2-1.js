function sig(x) {
  return 1 / (1 + Math.exp(-x));
}

function sigD(x) {
  let s = sig(x);
  return s * (1 - s);
}

let w1 = Math.random();
let w2 = Math.random();
let b1 = Math.random();

let w3 = Math.random();
let w4 = Math.random();
let b2 = Math.random();

let w5 = Math.random();
let w6 = Math.random();
let b3 = Math.random();

let w7 = Math.random();
let w8 = Math.random();
let b4 = Math.random();

let wo1 = Math.random();
let wo2 = Math.random();
let bo = Math.random();

let input1 = 0.2;
let input2 = 0.3;
let target = 1;
let lr = 0.1;
let e = 10000;

for(let i = 0; e > i; i++) {
  let z1 = w1 * input1 + w2 * input2 + b1;
  let z2 = w3 * input1 + w4 * input2 + b2;
  let h1 = sig(z1);
  let h2 = sig(z2);
  
  let z3 = w5 * h1 + w6 * h2 + b3;
  let z4 = w7 * h1 + w8 * h2 + b4;
  let h3 = sig(z3);
  let h4 = sig(z4);
  
  let zo = wo1 * h3 + wo2 * h4 + bo;
  let output = sig(zo);
  
  let error = output - target;
  let dout = error * sigD(zo);
  
  let dh3 = dout * wo1 * sigD(z3);
  let dh4 = dout * wo2 * sigD(z4);
  
  let dh1 = (dh3 * w5 + dh4 * w7) * sigD(z1);
  let dh2 = (dh3 * w6 + dh4 * w8) * sigD(z2);
  
  wo1 -= lr * dout * h3;
  wo2 -= lr * dout * h4; 
  bo -= lr * dout;
  
  w8 -= lr * dh4 * h2;
  w7 -= lr * dh4 * h1;
  b4 -= lr * dh4;
  
  w6 -= lr * dh3 * h2;
  w5 -= lr * dh3 * h1;
  b3 -= lr * dh3;
  
  w4 -= lr * dh2 * input2;
  w3 -= lr * dh2 * input1;
  b2 -= lr * dh2;
  
  w2 -= lr * dh1 * input2;
  w1 -= lr * dh1 * input1;
  b1 -= lr * dh1; 
}

console.log(sig(wo1 * sig(w5 * sig(w1 * input1 + w2 * input2 + b1) + w6 * sig(w3 * input1 + w4 * input2 + b2) + b3) + wo2 * sig(w7 * sig(w1 * input1 + w2 * input2 + b1) + w8 * sig(w3 * input1 + w4 * input2 + b2) + b4) + bo).toFixed(2))
