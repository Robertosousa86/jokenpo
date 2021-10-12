const JokenpoService = require('../src/controller/JokenpoService');

describe('JokenpoService', () => {
  it('should be return 0 when the key is 0', () => {
    expect(JokenpoService.jokenpo(0)).toBe(0);
  });

  it('should be return 1 when the key is 1', () => {
    expect(JokenpoService.jokenpo(1)).toBe(1);
  });

  it('should be return 2 when the key is 2', () => {
    expect(JokenpoService.jokenpo(2)).toBe(2);
  });

  it('should be constains a random number between 0 and 2', () => {
    const possibleNumber = [0, 1, 2];
    const mock = JokenpoService.jokenbot();

    expect(possibleNumber.includes(mock)).toBe(true);
  });

  it('should be return `Empate` if the number of key are the same', () => {
    const mock = 0;

    expect(JokenpoService.game(0, 0)).toEqual({ message: 'Ops! Empate!' });
  });
});
