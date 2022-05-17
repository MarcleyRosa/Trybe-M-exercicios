let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

for (let index = 1; index < numbers.length; index += 1) {
    for (let ind = 0; ind < index; ind += 1) {
      if (numbers[index] < numbers[ind]) {
        let position = numbers[index];
        numbers[index] = numbers[ind];
        numbers[ind] = position;
      }
    }
  }
  console.log(numbers);