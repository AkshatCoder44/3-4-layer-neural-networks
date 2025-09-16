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

let w7 = Math.random();
let w8 = Math.random();
let w9 = Math.random();
let b3 = Math.random();

let w10 = Math.random();
let w11 = Math.random();
let w12 = Math.random();
let b4 = Math.random();

let w13 = Math.random();
let w14 = Math.random();
let w15 = Math.random();
let w16 = Math.random();
let b5 = Math.random();

let w17 = Math.random();
let w18 = Math.random();
let w19 = Math.random();
let w20 = Math.random();
let b6 = Math.random();

let w21 = Math.random();
let w22 = Math.random();
let w23 = Math.random();
let w24 = Math.random();
let b7 = Math.random();

let wo1 = Math.random();
let wo2 = Math.random();
let wo3 = Math.random();
let bo1 = Math.random();

let wo4 = Math.random();
let wo5 = Math.random();
let wo6 = Math.random();
let bo2 = Math.random();

let i1 = 0.2;
let i2 = 0.3;
let i3 = 0.4;
let target1 = 0.5;
let target2 = 0.6;
let lr = 0.1;
let e = 100000;

for(let i = 0; e > i; i++) {
  let z1 = w1 * i1 + w2 * i2 + w3 * i3 + b1;
  let z2 = w4 * i1 + w5 * i2 + w6 * i3 + b2; 
  let z3 = w7 * i1 + w8 * i2 + w9 * i3 + b3;
  let z4 = w10 * i1 + w11 * i2 + w12 * i3 + b4;
  
  let h1 = sig(z1);
  let h2 = sig(z2);
  let h3 = sig(z3);
  let h4 = sig(z4);
  
  let z5 = w13 * h1 + w14 * h2 + w15 * h3 + w16 * h4 + b5;
  let z6 = w17 * h1 + w18 * h2 + w19 * h3 + w20 * h4 + b6;
  let z7 = w21 * h1 + w22 * h2 + w23 * h3 + w24 * h4 + b7;
  
  let h5 = sig(z5);
  let h6 = sig(z6);
  let h7 = sig(z7);
  
  let zo1 = wo1 * h5 + wo2 * h6 + wo3 * h7 + bo1;
  let zo2 = wo4 * h5 + wo5 * h6 + wo6 * h7 + bo2;
  
  let out1 = sig(zo1);
  let out2 = sig(zo2);
  
  let err1 = out1 - target1;
  let err2 = out2 - target2;
  
  let dout1 = err1 * sigD(zo1);
  let dout2 = err2 * sigD(zo2);
  
  let dh1 = (dout1 * wo1 + dout2 * wo4) * sigD(z5);
  let dh2 = (dout1 * wo2 + dout2 * wo5) * sigD(z6);
  let dh3 = (dout1 * wo3 + dout2 * wo6) * sigD(z7);
  
  let dh4 = (dh1 * w13 + dh2 * w17 + dh3 * w21) * sigD(z1);
  let dh5 = (dh1 * w14 + dh2 * w18 + dh3 * w22) * sigD(z2);
  let dh6 = (dh1 * w15 + dh2 * w19 + dh3 * w23) * sigD(z3); 
  let dh7 = (dh1 * w16 + dh2 * w20 + dh3 * w24) * sigD(z4);
  
  wo1 -= lr * dout1 * h5;
  wo2 -= lr * dout1 * h6;
  wo3 -= lr * dout1 * h7;
  bo1 -= lr * dout1;
  
  wo4 -= lr * dout2 * h5;
  wo5 -= lr * dout2 * h6;
  wo6 -= lr * dout2 * h7;
  bo2 -= lr * dout2;

  w21 -= lr * dh3 * h1;
  w22 -= lr * dh3 * h2;
  w23 -= lr * dh3 * h3;
  w24 -= lr * dh3 * h4;
  b7 -= lr * dh3;
  
  w17 -= lr * dh2 * h1;
  w18 -= lr * dh2 * h2;
  w19 -= lr * dh2 * h3;
  w20 -= lr * dh2 * h4;
  b6 -= lr * dh2;
  
  w13 -= lr * dh1 * h1;
  w14 -= lr * dh1 * h2;
  w15 -= lr * dh1 * h3;
  w16 -= lr * dh1 * h4;
  b5 -= lr * dh1;
  
  w12 -= lr *  dh7 * i3;
  w11 -= lr *  dh7 * i2;
  w10 -= lr *  dh7 * i1;
  b4 -= lr * dh7;
  
  w9 -= lr *  dh6 * i3;
  w8 -= lr *  dh6 * i2;
  w7 -= lr *  dh6 * i1;
  b3 -= lr * dh6;
  
  w6 -= lr *  dh5 * i3;
  w5 -= lr *  dh5 * i2;
  w4 -= lr *  dh5 * i1;
  b2 -= lr * dh5;
  
  w3 -= lr *  dh4 * i3;
  w2 -= lr *  dh4 * i2;
  w1 -= lr *  dh4 * i1;
  b1 -= lr * dh4;
}

let o1 = sig(
  wo1 * sig(
    w13 * sig(
      w1 * i1 + w2 * i2 + w3 * i3 + b1
    ) + 
    w14 * sig(
      w4 * i1 + w5 * i2 + w6 * i3 + b2
    ) + 
    w15 * sig(
      w7 * i1 + w8 * i2 + w9 * i3 + b3
    ) + 
    w16 * sig(
      w10 * i1 + w11 * i2 + w12 * i3 + b4
    ) + b5
  ) + 
  wo2 * sig(
    w17 * sig(
      w1 * i1 + w2 * i2 + w3 * i3 + b1
    ) + 
    w18 * sig(
      w4 * i1 + w5 * i2 + w6 * i3 + b2
    ) + 
    w19 * sig(
      w7 * i1 + w8 * i2 + w9 * i3 + b3
    ) + 
    w20 * sig(
      w10 * i1 + w11 * i2 + w12 * i3 + b4
    ) + b6
  ) + 
  wo3 * sig(
    w21 * sig(
      w1 * i1 + w2 * i2 + w3 * i3 + b1
    ) + 
    w22 * sig(
      w4 * i1 + w5 * i2 + w6 * i3 + b2
    ) + 
    w23 * sig(
      w7 * i1 + w8 * i2 + w9 * i3 + b3
    ) + 
    w24 * sig(
      w10 * i1 + w11 * i2 + w12 * i3 + b4
    ) + b7
  ) 
  + bo1
);

let o2 = sig(
  wo4 * sig(
    w13 * sig(
      w1 * i1 + w2 * i2 + w3 * i3 + b1
    ) + 
    w14 * sig(
      w4 * i1 + w5 * i2 + w6 * i3 + b2
    ) + 
    w15 * sig(
      w7 * i1 + w8 * i2 + w9 * i3 + b3
    ) + 
    w16 * sig(
      w10 * i1 + w11 * i2 + w12 * i3 + b4
    ) + b5
  ) + 
  wo5 * sig(
    w17 * sig(
      w1 * i1 + w2 * i2 + w3 * i3 + b1
    ) + 
    w18 * sig(
      w4 * i1 + w5 * i2 + w6 * i3 + b2
    ) + 
    w19 * sig(
      w7 * i1 + w8 * i2 + w9 * i3 + b3
    ) + 
    w20 * sig(
      w10 * i1 + w11 * i2 + w12 * i3 + b4
    ) + b6
  ) + 
  wo6 * sig(
    w21 * sig(
      w1 * i1 + w2 * i2 + w3 * i3 + b1
    ) + 
    w22 * sig(
      w4 * i1 + w5 * i2 + w6 * i3 + b2
    ) + 
    w23 * sig(
      w7 * i1 + w8 * i2 + w9 * i3 + b3
    ) + 
    w24 * sig(
      w10 * i1 + w11 * i2 + w12 * i3 + b4
    ) + b7
  ) 
  + bo2
);

console.log([Number(o1.toFixed(2)), Number(o2.toFixed(2))]);
