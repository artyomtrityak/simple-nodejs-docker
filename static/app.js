$(document).ready(function() {
  $.ajax({dataType: "json", url: '/proxy?url=' + GLOBAL_SERVICE_URL1})
  .then(function (resp) {
    document.querySelectorAll('#api1')[0].innerHTML = JSON.stringify(resp);
  });

  $.ajax({dataType: "json", url: '/proxy?url=' + GLOBAL_SERVICE_URL2})
  .then(function (resp) {
    document.querySelectorAll('#api2')[0].innerHTML = JSON.stringify(resp);
  });

  $("#create_user").on('click', function () {
    $.ajax({
      dataType: "json",
      data: {
        url: GLOBAL_API_ADDR + 'user/save?name=' + $('#create_user_name').val() + '&email=' + $('#create_user_email').val()
      },
      url: '/proxy'
    })
    .then(function (resp) {
      document.querySelectorAll('#create-user-response')[0].innerHTML = JSON.stringify(resp);
    });
  });

  $("#get_user").on('click', function () {
    $.ajax({
      dataType: "json",
      url: '/proxy?url=' + GLOBAL_API_ADDR + '/user/get-by-email?email=' + $('#get_user_email').val()
    })
    .then(function (resp) {
      document.querySelectorAll('#get-user-response')[0].innerHTML = JSON.stringify(resp);
    });
  });
});