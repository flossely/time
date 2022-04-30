$(document).ready(function()
{
   setInterval(servertime, 1000);
   setInterval(clienttime, 1000);
});
function servertime()
{
  $.ajax({
    url: 'time.php',
    success: function(data) {
       $('#servertime').val(data);
       document.getElementById('servertime').innerText = data;
    },
  });
}
function clienttime() {
  var now = new Date();
  var hour = now.getHours();
  var minute = now.getMinutes();
  var second = now.getSeconds();
  if (hour.length > 1) {
    hours = '0' + hour;
  } else {
    hours = hour;
  }
  if (minute.length > 1) {
    minutes = '0' + minute;
  } else {
    minutes = minute;
  }
  if (second.length > 1) {
    seconds = '0' + second;
  } else {
    seconds = minute;
  }
  var datetime = hours + ':' + minutes + ':' + seconds;
  document.getElementById('clienttime').innerText = datetime;
}