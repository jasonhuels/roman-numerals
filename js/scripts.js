
function romanNumerals (input) {
  var ones = ["I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"];
  var tens = ["X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC"];
  var cent = ["C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM"];
  var kilo = ["M", "MM", "MMM"];
  var rn = [ones, tens, cent, kilo];

  var digits = input.split("");
  digits.reverse();
  for(var i=0; i<digits.length; i++) {
    digits[i] = parseInt(digits[i]);
  }
  var output = [];

  if(parseInt(input) <= 3999) {
    for(var i=0; i<digits.length; i++) {
      output.push(rn[i][digits[i]-1]);
    }
  } else {
    return "Roman Numerals only go up to 3,999."
  }

  output = output.reverse().join("");
  return output;
}
