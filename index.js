var hour = document.getElementById("hour");
var minute = document.getElementById("min");
var second = document.getElementById("sec");

var dy = document.getElementById("day");
var dat = document.getElementById("datee");
var vishal = document.getElementById("bishu");

function dateandtime()
{
  var dateObj = new Date();
  var hours = dateObj.getHours();
  var minutes = dateObj.getMinutes();
  var seconds = dateObj.getSeconds();
  var weekDay = dateObj.getDay();
  var year = dateObj.getFullYear();
  var month = dateObj.getMonth();
  var date = dateObj.getDate();

  hour.textContent = Bahubali(hours);
  minute.textContent = Bahubali(minutes);
  second.textContent = Bahubali(seconds);

  dy.textContent = theDay(weekDay);
  dat.textContent = Bahubali(date) + "/" + Bahubali(month+1) + "/" + year;
  vishal.textContent = hours<12 ? "AM":"PM";

}

function theDay(n)
{
  Haftekanaam = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  return Haftekanaam[n];
}

var Bahubali = (n) => (n < 10 ? "0" + n : n);
setInterval(dateandtime, 1000);