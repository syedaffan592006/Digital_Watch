function updateClock() {
    var now = new Date();
    var hours = now.getHours();
    var minutes = now.getMinutes();
    var seconds = now.getSeconds();
    var clock = document.getElementById('clock');
    clock.innerHTML = hours + ':' + minutes + ':' + seconds;
  }
  updateClock();
  setInterval(updateClock, 1000);