const jokenpo = (key) => {
  const itens = {
    0: 0,
    1: 1,
    2: 2,
  };

  return itens[key];
};

const jokenbot = () => {
  return Math.floor(Math.random() * 3);
};

module.exports = { jokenpo, jokenbot };
