function forEach(numbers, func) {
  for (let i = 0; i < numbers.length; i++) {
    func(numbers[i], i);
  }
}

module.exports = { forEach };