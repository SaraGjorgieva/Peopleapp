function toggleClock() {
  var myClock = document.getElementById('box_edit');
  var displaySetting = myClock.style.display;
  var clockButton = document.getElementById('clockButton');
  
  if (displaySetting == 'none') {
    myClock.style.display = 'block';
    clockButton.innerHTML = '<i class="fa-solid fa-pen"></i>';
  }
  else {
    myClock.style.display = 'none';
    clockButton.innerHTML = '<i class="fa-solid fa-check"></i>';
  }
}

function toggleClock() {
  var myClock = document.getElementById('box_edit2');
  var displaySetting = myClock.style.display;
  var clockButton = document.getElementById('clockButton');
  
  if (displaySetting == 'block') {
    myClock.style.display = 'none';
    clockButton.innerHTML = '<i class="fa-solid fa-pen"></i>';
  }
  else {
    myClock.style.display = 'block';
    clockButton.innerHTML = '<i class="fa-solid fa-check"></i>';
  }
}
