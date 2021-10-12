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
  } else if (jokenpo(key) === 0 && robotKey === 2) {
    return { message: 'Wow! Você venceu!' };
  } else if (jokenpo(key) === 0 && robotKey === 1) {
    return { message: 'Heyta... Robot venceu!' };
  }

  if (jokenpo(key) === 1 && robotKey === 1) {
    return { message: 'Empate' };
  } else if (jokenpo(key) === 1 && robotKey === 0) {
    return { message: 'Wow! Você venceu!' };
  } else if (jokenpo(key) === 1 && robotKey === 2) {
    return { message: 'Heyta... Robot venceu!' };
  }

  if (jokenpo(key) === 2 && robotKey === 2) {
    return { message: 'Empate' };
  } else if (jokenpo(key) === 2 && robotKey === 1) {
    return { message: 'Wow! Você venceu!' };
  } else if (jokenpo(key) === 2 && robotKey === 0) {
    return { message: 'Heyta... Robot venceu!' };
  }
}

module.exports = { jokenpo, jokenbot, game };
