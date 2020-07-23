// Part 1

var today = new Date();
var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
var dateTime = date+' '+time;

let displaytime = () => {
  console.log('Date and Time now is : '+ dateTime)
  // alert(dateTime);
}

setTimeout(displaytime, 5000);

// Part 2

let $ = require('jquery');

let timeoutID;

$('#setTimeout').click(()=>{
  timeoutID = setTimeout(()=>{
    alert('Date and Time now is : '+ dateTime);
    console.log('Display was clicked');
  }, 5000);
});

$('#cancelTimeout').click(()=>{
  clearTimeout(timeoutID);
  clearInterval(timeoutID2);
  console.log('Cancel was clicked');
});

// Part 3
let displaytm = () => {
  var d = new Date();
  var t = d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds();
  console.log('Time now is : '+ t)
  // alert(dateTime);
}

let timeoutID2 = setInterval(displaytm, 2000);
// clearInterval(timeoutID2);
$('#stopconsoleop').click(()=>{
  clearInterval(timeoutID2);
  console.log('Stop Console Output Button was clicked');
});
