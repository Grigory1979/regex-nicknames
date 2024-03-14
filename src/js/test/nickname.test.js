import Validator from '../nickname';

test.each([
  'grag-123m',
  'grag',
  'GRG',
  'grag123A',
  'grag_12axel',
  'grag-1-axel',
  'grag_a',
  'grag123_a',
  'grag123-a',
])('should validate number', (data) => {
  expect(Validator.validateUsername(data)).toBe(true);
});

test.each([
  'grag-1234',
  '1grag',
  '_GR',
  '-grag123',
  'grag12345grag',
  '@mgrg1',
  'grag!a',
  'grag123_',
  'grag123-',
  'Грэгор',
])('should not validate number', (data) => {
  expect(() => Validator.validateUsername(data)).toThrow();
});