const JokenpoService = require('../src/controller/JokenpoService');

describe('JokenpoService', () => {
  it('should be return `pedra` if the value of key is 0', () => {
    expect(JokenpoService.jokenpo(0)).toBe('pedra');
  });

  it('should be return `papel` if the value of key is 1', () => {
    expect(JokenpoService.jokenpo(1)).toBe('papel');
  });

  it('should be return `tesoura` if the value of key is 2', () => {
    expect(JokenpoService.jokenpo(2)).toBe('tesoura');
  });

  it('should be return a random number between 0 and 2', () => {
    const possibleNumber = [0, 1, 2];

    const mock = JokenpoService.jokenpoRobot();

    expect(possibleNumber.includes(mock)).toBe(true);
  });
});
