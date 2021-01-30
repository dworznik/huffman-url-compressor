const { createEncoder, encodeConfig, decodeConfig, getFrequency, encoderFromFrequency } = require('../utils.js')

test('encode', () => {
  const input = 'test data to encode';
  const encoder = createEncoder(input);
  const output = encodeConfig(input, encoder);
  const result = decodeConfig(output, encoder);
  expect(result).toBe(input);
});

test('decode using extracted frequencies', () => {
  const input = 'test data to encode';
  const encoder = createEncoder(input);
  const output = encodeConfig(input, encoder);

  const freq = getFrequency(input);
  const decoder = encoderFromFrequency(freq);
  const result = decodeConfig(output, decoder);
  expect(result).toBe(input);
});

