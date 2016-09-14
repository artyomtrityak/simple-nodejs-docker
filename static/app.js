$(document).ready(function() {
  $.ajax({dataType: "json", url: 'https://jsonplaceholder.typicode.com/posts/1'})
  .then(function (resp) {
    document.querySelectorAll('#api1')[0].innerHTML = JSON.stringify(resp);
  });

  $.ajax({dataType: "json", url: 'https://jsonplaceholder.typicode.com/posts/1'})
  .then(function (resp) {
    document.querySelectorAll('#api2')[0].innerHTML = JSON.stringify(resp);
  });
});