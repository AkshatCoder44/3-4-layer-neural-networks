function sig(x) {
  return 1 / (1 + Math.exp(-x));
  // return Math.max(0, x); for relu
}

function sigD(x) {
  let s = sig(x);
  return s * (1 - s);
  // return x > 0 ? 1 : 0; for reluD
}

let w1 = Math.random();
let w2 = Math.random();
let b1 = Math.random();

let w3 = Math.random();
let w4 = Math.random();
let b2 = Math.random();

let wo1 = Math.random();
let wo2 = Math.random();
let bo1 = Math.random();

let wo3 = Math.random();
let wo4 = Math.random();
let bo2 = Math.random();

let input1 = 0.2;
let input2 = 0.5;
let target1 = 1.0;
let target2 = 0.0;
let lr = 0.1;
let e = 10000;

for(let i = 0; e > i; i++) {
  let z1 = w1 * input1 + w2 * input2 + b1;
  let h1 = sig(z1);
  
  let z2 = w3 * input1 + w4 * input2 + b2;
  let h2 = sig(z2);
  
  let zo1 = wo1 * h1 + wo2 * h2 + bo1;
  let output1 = sig(zo1);
  
  let zo2 = wo3 * h1 + wo4 * h2 + bo2;
  let output2 = sig(zo2);
  
  let error1 = output1 - target1;
  let error2 = output2 - target2;
  
  let dout1 = error1 * sigD(zo1);
  let dout2 = error2 * sigD(zo2);
  
  wo1 -= lr * dout1 * h1;
  wo2 -= lr * dout1 * h2;
  bo1 -= lr * dout1;
  
  wo3 -= lr * dout2 * h1;
  wo4 -= lr * dout2 * h2;
  bo2 -= lr * dout2;
  
  let dh1 = (dout1 * wo1 + dout2 * wo3) * sigD(z1);
  w1 -= lr * dh1 * input1;
  w2 -= lr * dh1 * input2;
  b1 -= lr * dh1;
  
  let dh2 = (dout1 * wo2 + dout2 * wo4) * sigD(z2);
  w3 -= lr * dh2 * input1;
  w4 -= lr * dh2 * input2;
  b2 -= lr * dh2;
}

let output = `[${sig(wo1 * sig(w1 * input1 + w2 * input2 + b1) + wo2 * sig(w3 * input1 + w4 * input2 + b2) + bo1).toFixed(2)}, ${sig(wo3 * sig(w1 * input1 + w2 * input2 + b1) + wo4 * sig(w3 * input1 + w4 * input2 + b2) + bo2).toFixed(2)}]`;
console.log(JSON.parse(output));
