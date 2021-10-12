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

const robot = jokenbot();

function game(key, robotKey = robot) {
  if (jokenpo(key) === 0 && robotKey === 0) {
    return { message: 'Ops! Empate!' };
  }
}

module.exports = { jokenpo, jokenbot, game };
