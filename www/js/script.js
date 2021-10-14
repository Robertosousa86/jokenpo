function rock() {
  const value = 0;
  $.ajax({
    type: 'post',
    url: '/',
    data: JSON.stringify({ key: value }),
    contentType: 'application/json; charset=utf-8',
    success: function (data) {
      if (data.result === 1) {
        swal({
          title: data.message,
          text: 'Você fez a jogada certa!',
          icon: 'success',
        });
      } else if (data.result === 0) {
        swal({
          title: data.message,
          text: 'Mais sorte da proxima vez!',
          icon: 'error',
        });
      } else {
        swal({
          title: data.message,
          text: 'Equilíbrio de Nash pode ser uma ótima estratégia...',
          icon: 'warning',
        });
      }

      score(data);
    },
  });
}

function paper() {
  const value = 1;
  $.ajax({
    type: 'post',
    url: '/',
    data: JSON.stringify({ key: value }),
    contentType: 'application/json; charset=utf-8',
    success: function (data) {
      if (data.result === 1) {
        swal({
          title: data.message,
          text: 'Você fez a jogada certa!',
          icon: 'success',
        });
      } else if (data.result === 0) {
        swal({
          title: data.message,
          text: 'Mais sorte da proxima vez!',
          icon: 'error',
        });
      } else {
        swal({
          title: data.message,
          text: 'Equilíbrio de Nash pode ser uma ótima estratégia...',
          icon: 'warning',
        });
      }

      score(data);
    },
  });
}

function scissor() {
  const value = 2;
  $.ajax({
    type: 'post',
    url: '/',
    data: JSON.stringify({ key: value }),
    contentType: 'application/json; charset=utf-8',
    success: function (data) {
      if (data.result === 1) {
        swal({
          title: data.message,
          text: 'Você fez a jogada certa!',
          icon: 'success',
        });
      } else if (data.result === 0) {
        swal({
          title: data.message,
          text: 'Mais sorte da proxima vez!',
          icon: 'error',
        });
      } else {
        swal({
          title: data.message,
          text: 'Equilíbrio de Nash pode ser uma ótima estratégia...',
          icon: 'warning',
        });
      }

      score(data);
    },
  });
}

let player = 0;
let robot = 0;

$('#player').append(player);
$('#robot').append(robot);

function score(data) {
  if (data.message === 'Wow! Você venceu!') {
    player++;
    $('#player').html('');
    $('#player').append(player);
  } else if (data.message === 'Heyta... Robot venceu!') {
    robot++;
    $('#robot').html('');
    $('#robot').append(robot);
  }

  function cleaner() {
    if (player === 3 || robot === 3) {
      $('#player').html('');
      $('#robot').html('');
      $('#player').append(0);
      $('#robot').append(0);

      alert('Alguém vez 3 pontos! Os juizes estão checando o resultado...');

      player = 0;
      robot = 0;
    }
  }
  cleaner();
}
