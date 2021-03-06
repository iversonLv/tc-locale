var button = document.createElement('button');
button.innerHTML = 'Use local date format';
button.className += ' convert-dates';
button.setAttribute("id", "convertDatesBtn");
button.addEventListener('click', function() { convertDates(); });
document.getElementsByTagName('body')[0].appendChild(button);

function convertDates(){
  document.getElementById("convertDatesBtn").remove();
  var tbody = document.getElementsByClassName('rtTable')[0].children[0];

  for(var i=1; i<tbody.children.length; i++){
    if(tbody.children[i].children[2].innerHTML !== '&nbsp;'){
      tbody.children[i].children[2].children[0].innerHTML = tbody.children[i].children[2].children[0].innerHTML.trim().split('at').join('');
      tbody.children[i].children[2].children[0].innerHTML = getDate(new Date(tbody.children[i].children[2].children[0].innerHTML));
    }
  }
}

function getDate(date) {
  var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  var days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  return days[date.getDay()] + ', ' + months[date.getMonth()] + ' ' + date.getDate() + ' '
  + date.getFullYear() + ' at ' + twoDigitNum(date.getHours()) + ':' + twoDigitNum(date.getMinutes()) + " (Local time)";
}

function twoDigitNum(num){
  return num > 9 ? num : '0'+num;
}
