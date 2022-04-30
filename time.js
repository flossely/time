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
    },
  });
}
function clienttime() {
  var now = new Date();
  var hour = now.getHours();
  var minute = now.getMinutes();
  var second = now.getSeconds();
  var datetime = hour + ':' + minute + ':' + second;
  document.getElementById('clienttime').innerText = datetime;
}