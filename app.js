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
