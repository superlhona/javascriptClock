function renderTime() {
  var currentTime = new Date ();
  var diem = "AM";
  var h = currentTime.getHours();
  var m = currentTime.getMinutes();
  var s = currentTime.getSeconds();
  var clockSize = {small: '30px', medium: '45px', large: '60px', xLarge: '75px'};

  if (h == 0){
    h = 12;
  } else if (h > 12) {
    h = h - 12;
    diem = "PM";
  }

  if (h < 10) {
    h = "0" + h;
  }

  if (m < 10) {
    m = "0" + m;
  }

  if (s < 10) {
    s = "0" + s;

  }

  
  // to change color every odd and even second
  if (s == 1) {
    document.getElementById("clockDisplay").style.color = "red";
  } else if (s == 3) { 
    document.getElementById("clockDisplay").style.color = "red";
  } else if (s == 5) { 
    document.getElementById("clockDisplay").style.color = "red";
  } else if (s == 7) { 
    document.getElementById("clockDisplay").style.color = "red";
  } else if (s == 9) { 
    document.getElementById("clockDisplay").style.color = "red";
  } else if (s == 11) { 
    document.getElementById("clockDisplay").style.color = "red";
  } else if (s == 13) { 
    document.getElementById("clockDisplay").style.color = "red";
  } else if (s == 15) { 
    document.getElementById("clockDisplay").style.color = "red";
  } else if (s == 17) { 
    document.getElementById("clockDisplay").style.color = "red";
  } else if (s == 19) { 
    document.getElementById("clockDisplay").style.color = "red";
  } else if (s == 21) { 
    document.getElementById("clockDisplay").style.color = "red";
  } else if (s == 23) { 
    document.getElementById("clockDisplay").style.color = "red";
  } else if (s == 25) { 
    document.getElementById("clockDisplay").style.color = "red";
  } else if (s == 27) { 
    document.getElementById("clockDisplay").style.color = "red";
  } else if (s == 29) { 
    document.getElementById("clockDisplay").style.color = "red";
  } else if (s == 31) { 
    document.getElementById("clockDisplay").style.color = "red";
  } else if (s == 33) { 
    document.getElementById("clockDisplay").style.color = "red";
  } else if (s == 35) { 
    document.getElementById("clockDisplay").style.color = "red";
  } else if (s == 37) { 
    document.getElementById("clockDisplay").style.color = "red";
  } else if (s == 39) { 
    document.getElementById("clockDisplay").style.color = "red";
  } else if (s == 41) { 
    document.getElementById("clockDisplay").style.color = "red";
  } else if (s == 43) { 
    document.getElementById("clockDisplay").style.color = "red";
  } else if (s == 45) { 
    document.getElementById("clockDisplay").style.color = "red";
  } else if (s == 47) { 
    document.getElementById("clockDisplay").style.color = "red";
  } else if (s == 49) { 
    document.getElementById("clockDisplay").style.color = "red";
  } else if (s == 51) { 
    document.getElementById("clockDisplay").style.color = "red";
  } else if (s == 53) { 
    document.getElementById("clockDisplay").style.color = "red";
  } else if (s == 55) { 
    document.getElementById("clockDisplay").style.color = "red";
  } else if (s == 57) { 
    document.getElementById("clockDisplay").style.color = "red";
  } else if (s == 59) { 
    document.getElementById("clockDisplay").style.color = "red";
  } 
  else {
    document.getElementById("clockDisplay").style.color = "green";
  }

  // to change the background color every 5 min
  if (m > 0 & m < 6) {
    document.getElementById("clockDisplay").style.backgroundColor = "brown";
  } else if (m > 10 & m < 16){
    document.getElementById("clockDisplay").style.backgroundColor = "brown";
  } else if (m > 20 & m < 26){
    document.getElementById("clockDisplay").style.backgroundColor = "brown";
  } else if (m > 30 & m < 36){
    document.getElementById("clockDisplay").style.backgroundColor = "brown";
  } else if (m > 40 & m < 46){
    document.getElementById("clockDisplay").style.backgroundColor = "brown";
  } else if (m > 50 & m < 56){
    document.getElementById("clockDisplay").style.backgroundColor = "brown";
  } else {
    document.getElementById("clockDisplay").style.backgroundColor = "yellow";
  }


  // to change the background color every 5 min to random color
  // ...

  // to change font size every hour
  if (h == 1) {
    document.getElementById("clockDisplay").style.fontSize = (clockSize.small);
  } else if (h == 2) {
    document.getElementById("clockDisplay").style.fontSize = (clockSize.medium);
  } else if (h == 3) {
    document.getElementById("clockDisplay").style.fontSize = (clockSize.large);
  } else if (h == 5) {
    document.getElementById("clockDisplay").style.fontSize = (clockSize.large);
  } else if (h == 6) {
    document.getElementById("clockDisplay").style.fontSize = (clockSize.medium);
  } else if (h == 7) {
    document.getElementById("clockDisplay").style.fontSize = (clockSize.small);
  } else if (h == 8) {
    document.getElementById("clockDisplay").style.fontSize = (clockSize.medium);
  } else if (h == 10) {
    document.getElementById("clockDisplay").style.fontSize = (clockSize.large);
  } else if (h == 12) {
    document.getElementById("clockDisplay").style.fontSize = (clockSize.medium);
  }
  else {
    document.getElementById("clockDisplay").style.fontSize = (clockSize.xLarge);
  }


  var myClock = document.getElementById("clockDisplay");
  myClock.textContent = h + ":" + m + ":" + s + " " + diem;
  myClock.innerText = h + ":" + m + ":" + s + " " + diem;
  setTimeout("renderTime()",1000);
}

renderTime() ;