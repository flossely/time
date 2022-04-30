$(document).ready(function()
{
   setInterval(serverTime, 1000);
   setInterval(clientTime, 1000);
});
function serverTime()
{
  $.ajax({
    url: 'time.php',
    success: function(data) {
       $('#serverTime').val(data);
    },
  });
}
function clientTime() {
  var now = new Date();
  var hour = now.getHours();
  var minute = now.getMinutes();
  var second = now.getSeconds();
  var datetime = hour + ':' + minute + ':' + second;
  document.getElementById('clientTime').innerText = datetime;
}