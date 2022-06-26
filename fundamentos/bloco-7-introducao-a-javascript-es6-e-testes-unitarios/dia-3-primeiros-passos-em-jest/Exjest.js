function sum(a, b) {
    if (typeof a !== 'number' || typeof b !== 'number') {
      throw new Error('parameters must be numbers');
    }
    try {
    return a + b;
    } catch (error) {
        error.message
    }

}
function myRemove(arr, item) {
  let newArr = [];
  for (let index = 0; index < arr.length; index += 1) {
    if (item !== arr[index]) {
      newArr.push(arr[index]);
    }
  }
  return newArr;
}

function myFizzBuzz(num) {
  if (typeof num !== 'number') return false;
  if (num % 3 === 0 && num % 5 === 0) return 'fizzbuzz';
  if (num % 3 === 0) return 'fizz';
  if (num % 5 === 0) return 'buzz';
  return num;
}

function encode(vogais) {
  let num = ''
  for (let index = 0; index < vogais.length; index += 1) {
      if (vogais[index] === 'a') {
          num = num + '1';
      } else if (vogais[index] === 'e') {
          num = num + '2';
      } else if (vogais[index] === 'i') {
          num = num + '3';
      } else if (vogais[index] === 'o') {
          num = num + '4';
      } else if (vogais[index] === 'u') {
          num = num + '5'
      } else {
          num = num + vogais[index]
      }
   } 
return num
} 


function decode(vogais) {
  let num = ''
  for (let index = 0; index < vogais.length; index += 1) {
    if (vogais[index] === '1') {
        num = num + 'a';
    } else if (vogais[index] === '2') {
        num = num + 'e';
    } else if (vogais[index] === '3') {
        num = num + 'i';
    } else if (vogais[index] === '4') {
        num = num + 'o';
    } else if (vogais[index] === '5') {
        num = num + 'u'
    } else {
        num = num + vogais[index]
    }
}
return num
} 


module.exports = {myRemove, sum, myFizzBuzz, encode, decode}