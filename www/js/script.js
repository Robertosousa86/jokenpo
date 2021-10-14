function rock() {
  const value = 0;
  console.log(value);
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
    },
  });
}

function paper() {
  const value = 1;
  console.log(value);
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
    },
  });
}

function scissor() {
  const value = 2;
  console.log(value);
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
    },
  });
}
