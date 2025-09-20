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

let w9 = Math.random();
let w10 = Math.random();
let b5 = Math.random();

let w11 = Math.random();
let w12 = Math.random();
let b6 = Math.random();

let w13 = Math.random();
let w14 = Math.random();
let b7 = Math.random();

let w15 = Math.random();
let w16 = Math.random();
let b8 = Math.random();

let w17 = Math.random();
let w18 = Math.random();
let b9 = Math.random();

let w19 = Math.random();
let w20 = Math.random();
let b10 = Math.random();

let w21 = Math.random();
let w22 = Math.random();
let b11 = Math.random();

let w23 = Math.random();
let w24 = Math.random();
let b12 = Math.random();

let w25 = Math.random();
let w26 = Math.random();
let b13 = Math.random();

let w27 = Math.random();
let w28 = Math.random();
let b14 = Math.random();

let w29 = Math.random();
let w30 = Math.random();
let b15 = Math.random();

let wo1 = Math.random();
let wo2 = Math.random();
let wo3 = Math.random();
let wo4 = Math.random();
let wo5 = Math.random();
let wo6 = Math.random();
let wo7 = Math.random();
let wo8 = Math.random();
let wo9 = Math.random();
let wo10 = Math.random();
let wo11 = Math.random();
let wo12 = Math.random();
let wo13 = Math.random();
let wo14 = Math.random();
let wo15 = Math.random();
let bo = Math.random();

const data = [];
for (let a = 1; a <= 99; a++) {
  for (let b_ = 1; b_ <= 99; b_++) {
    const product = a * b_;
    if (product <= 100) { // keep outputs within scale
      data.push([a / 100, b_ / 100, product / 100]);
    }
  }
}

let lr = 0.1;
let e = 1000;

for(let i = 0; e > i; i++) {
  for(let c = 0; data.length > c; c++) {
    let i1 = data[c][0];
    let i2 = data[c][1];
    let target = data[c][2];
    
    let z1 = w1 * i1 + w2 * i2 + b1;
    let z2 = w3 * i1 + w4 * i2 + b2; 
    let z3 = w5 * i1 + w6 * i2 + b3;
    let z4 = w7 * i1 + w8 * i2 + b4;
    let z5 = w9 * i1 + w10 * i2 + b5;
    let z6 = w11 * i1 + w12 * i2 + b6;
    let z7 = w13 * i1 + w14 * i2 + b7;
    let z8 = w15 * i1 + w16 * i2 + b8;
    let z9 = w17 * i1 + w18 * i2 + b9;
    let z10 = w19 * i1 + w20 * i2 + b10;
    let z11 = w21 * i1 + w22 * i2 + b11;
    let z12 = w23 * i1 + w24 * i2 + b12;
    let z13 = w25 * i1 + w26 * i2 + b13;
    let z14 = w27 * i1 + w28 * i2 + b14;
    let z15 = w29 * i1 + w30 * i2 + b15;
    
    let h1 = sig(z1);
    let h2 = sig(z2);
    let h3 = sig(z3);
    let h4 = sig(z4);
    let h5 = sig(z5);
    let h6 = sig(z6);
    let h7 = sig(z7);
    let h8 = sig(z8);
    let h9 = sig(z9);
    let h10 = sig(z10);
    let h11 = sig(z11);
    let h12 = sig(z12);
    let h13 = sig(z13);
    let h14 = sig(z14);
    let h15 = sig(z15);
    
    let zo = wo1 * h1 + wo2 * h2 + wo3 * h3 + wo4 * h4 + wo5 * h5 + wo6 * h6 + wo7 * h7 + wo8 * h8 + wo9 * h9 + wo10 * h10 + wo11 * h11 + wo12 * h12 + wo13 * h13 + wo14 * h14 + wo15 * h15 + bo;
    let out = sig(zo);
    
    let error = out - target;
    let dout = error * sigD(zo);
    let dh1 = dout * wo1 * sigD(z1);
    let dh2 = dout * wo2 * sigD(z2); 
    let dh3 = dout * wo3 * sigD(z3); 
    let dh4 = dout * wo4 * sigD(z4); 
    let dh5 = dout * wo5 * sigD(z5); 
    let dh6 = dout * wo6 * sigD(z6); 
    let dh7 = dout * wo7 * sigD(z7); 
    let dh8 = dout * wo8 * sigD(z8); 
    let dh9 = dout * wo9 * sigD(z9); 
    let dh10 = dout * wo10 * sigD(z10); 
    let dh11 = dout * wo11 * sigD(z11); 
    let dh12 = dout * wo12 * sigD(z12); 
    let dh13 = dout * wo13 * sigD(z13); 
    let dh14 = dout * wo14 * sigD(z14); 
    let dh15 = dout * wo15 * sigD(z15); 
    
    wo1 -= lr * dout * h1;
    wo2 -= lr * dout * h2; 
    wo3 -= lr * dout * h3;
    wo4 -= lr * dout * h4;
    wo5 -= lr * dout * h5;
    wo6 -= lr * dout * h6;
    wo7 -= lr * dout * h7;
    wo8 -= lr * dout * h8;
    wo9 -= lr * dout * h9;
    wo10 -= lr * dout * h10;
    wo11 -= lr * dout * h11;
    wo12 -= lr * dout * h12;
    wo13 -= lr * dout * h13;
    wo14 -= lr * dout * h14;
    wo15 -= lr * dout * h15;
    bo -= lr * dout;
    
    w1 -= lr * dh1 * i1;
    w2 -= lr * dh1 * i2;
    b1 -= lr * dh1;
    
    w3 -= lr * dh2 * i1;
    w4 -= lr * dh2 * i2;
    b2 -= lr * dh2;
    
    w5 -= lr * dh3 * i1;
    w6 -= lr * dh3 * i2;
    b3 -= lr * dh3;
    
    w7 -= lr * dh4 * i1;
    w8 -= lr * dh4 * i2;
    b4 -= lr * dh4;
    
    w9 -= lr * dh5 * i1;
    w10 -= lr * dh5 * i2;
    b5 -= lr * dh5;
    
    w11 -= lr * dh6 * i1;
    w12 -= lr * dh6 * i2;
    b6 -= lr * dh6;
    
    w13 -= lr * dh7 * i1;
    w14 -= lr * dh7 * i2;
    b7 -= lr * dh7;
    
    w15 -= lr * dh8 * i1;
    w16 -= lr * dh8 * i2;
    b8 -= lr * dh8;
    
    w17 -= lr * dh9 * i1;
    w18 -= lr * dh9 * i2;
    b9 -= lr * dh9;
    
    w19 -= lr * dh10 * i1;
    w20 -= lr * dh10 * i2;
    b10 -= lr * dh10;
    
    w21 -= lr * dh11 * i1;
    w22 -= lr * dh11 * i2;
    b11 -= lr * dh11;
    
    w23 -= lr * dh12 * i1;
    w24 -= lr * dh12 * i2;
    b12 -= lr * dh12;
    
    w25 -= lr * dh13 * i1;
    w26 -= lr * dh13 * i2;
    b13 -= lr * dh13;
    
    w27 -= lr * dh14 * i1;
    w28 -= lr * dh14 * i2;
    b14 -= lr * dh14;
    
    w29 -= lr * dh15 * i1;
    w30 -= lr * dh15 * i2;
    b15 -= lr * dh15;
  }
}

let l1 = 0.02;
let l2 = 0.03;

let output = sig(
  wo1 * sig(
    w1 * l1 + w2 * l2 + b1
  ) 
  + wo2 * sig(
    w3 * l1 + w4 * l2 + b2
  ) 
  + wo3 * sig(
    w5 * l1 + w6 * l2 + b3
  )
  + wo4 * sig(
    w7 * l1 + w8 * l2 + b4
  ) 
  + wo5 * sig(
    w9 * l1 + w10 * l2 + b5
  ) 
  + wo6 * sig(
    w11 * l1 + w12 * l2 + b6
  ) 
  + wo7 * sig(
    w13 * l1 + w14 * l2 + b7
  ) 
  + wo8 * sig(
    w15 * l1 + w16 * l2 + b8
  ) 
  + wo9 * sig(
    w17 * l1 + w18 * l2 + b9
  ) 
  + wo10 * sig(
    w19 * l1 + w20 * l2 + b10
  )
  + wo11 * sig(
    w21 * l1 + w22 * l2 + b11
  ) 
  + wo12 * sig(
    w23 * l1 + w24 * l2 + b12
  ) 
  + wo13 * sig(
    w25 * l1 + w26 * l2 + b13
  ) 
  + wo14 * sig(
    w27 * l1 + w28 * l2 + b14
  ) 
  + wo15 * sig(
    w29 * l1 + w30 * l2 + b15
  )+ bo
);

console.log(output);
