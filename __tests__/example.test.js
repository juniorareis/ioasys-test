function soma(a, b) {
  return a + b;
}

test('Espero que resultado da soma de 4 + 5 = 9', () => {
  const result = soma(4, 5);
  expect(result).toBe(9);
});
