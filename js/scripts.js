function romanNumerals(inputNumber) {
  const ROMAN = ["I", "V", "X", "L", "C", "D", "M"];
  const DECIMAL = [1, 5, 10, 50, 100, 500, 1000];
  var digits = inputNumber.split("");
  digits.reverse();
  for(var i=0; i<digits.length; i++) {
    digits[i] = parseInt(digits[i]);
  }
  var output = [];

  // for(var i=0; i<=digits[0]; i++) {
  //   // if(digits[i] + Math.pow(10, i) >= DECIMAL[i]) {
  //   //
  //   // }
  //   if(digits[0] >= DECIMAL[0]) {
  //     output.push(ROMAN[0]);
  //     digits[0] -= DECIMAL[0]
  //   }
  // }

  if(inputNumber === '0') {
    output.push(0);
  } else {
    while(digits[0] > 0) {
      output.push(ROMAN[0]);
      digits[0] -= DECIMAL[0];
    }
  }

  output = output.reverse().join("");

  return output;
}
