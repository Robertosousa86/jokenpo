const jokenpo = require('../src/controller/JokenpoService');

describe('JokenpoService', () => {
  it('should be return `pedra` if the value of key is 0', () => {
    expect(jokenpo(0)).toBe('pedra');
  });

  it('should be return `papel` if the value of key is 1', () => {
    expect(jokenpo(1)).toBe('papel');
  });

  it('should be return `tesoura` if the value of key is 2', () => {
    expect(jokenpo(2)).toBe('tesoura');
  });
});
