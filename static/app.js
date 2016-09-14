$(document).ready(function() {
  $.ajax({dataType: "json", url: GLOBAL_SERVICE_URL1})
  .then(function (resp) {
    document.querySelectorAll('#api1')[0].innerHTML = JSON.stringify(resp);
  });

  $.ajax({dataType: "json", url: GLOBAL_SERVICE_URL2})
  .then(function (resp) {
    document.querySelectorAll('#api2')[0].innerHTML = JSON.stringify(resp);
  });
});