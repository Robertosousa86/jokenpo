const jokenpo = (key) => {
  const itens = {
    0: 'pedra',
    1: 'papel',
    2: 'tesoura',
  };

  return itens[key];
};

const jokenpoRobot = () => {
  return Math.floor(Math.random() * 3);
};

module.exports = { jokenpo, jokenpoRobot };
