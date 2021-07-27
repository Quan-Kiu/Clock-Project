const hour = document.getElementById("hour"),
  minutes = document.getElementById("minutes"),
  seconds = document.getElementById("seconds"),
  timestext = document.getElementById("times-text"),
  datetext = document.getElementById("date-text"),
  sun = document.getElementById("sun"),
  moon = document.getElementById("moon");

let date = new Date();

day = date.getDate();

month = date.getMonth();

daytext = date.getDay();

let dateMonth = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

let dateDay = ["Sun", "Mon", "Tue", "Wed", "Thur", "Fri", "Sat"];

month = "" + dateMonth[month] + "";

daytext = "" + dateDay[daytext] + "";

year = date.getFullYear();

hh = date.getHours();

datetext.innerHTML = "" + daytext + ", " + day + " " + month + ", " + year + "";

if (hh >= 5 && hh < 18) {
  sun.style.display = "block";
} else {
  moon.style.display = "block";
}

clock();

function clock() {
  date = new Date();

  (hh = date.getHours() * 30),
    (mm = date.getMinutes() * 6),
    (ss = date.getSeconds() * 6);

  hour.style.transform =
    "translateX(-50%) rotate(" + (hh + mm / 12 + 180) + "deg)";

  minutes.style.transform = "translateX(-50%) rotate(" + (mm + 180) + "deg)";

  seconds.style.transform = "translateX(-50%) rotate(" + (ss + 180) + "deg)";

  hh /= 30;

  mm /= 6;

  if (mm < 10) {
    mm = "0" + mm;
  }

  if (hh < 10) {
    hh = "0" + hh;
  }

  timestext.innerHTML = "" + hh + ":" + mm + "";

  setTimeout(clock, 1000);
}
