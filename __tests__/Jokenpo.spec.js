const jokenpo = require('../src/controller/JokenpoService');

describe('JokenpoService', () => {
  it('should be return `pedra` if the key is 0', () => {
    expect(jokenpo(0)).toBe('pedra');
  });
});
