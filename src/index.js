function updateTime() {
  //los angeles

  let losAngelesElement = document.querySelector("#los-angeles");
  let losAngelesDateElement = losAngelesElement.querySelector(".date");
  let losAngelesTimeElement = losAngelesElement.querySelector(".time");
  let losAngelesTime = moment();

  losAngelesDateElement.innerHTML = losAngelesTime.format("ddd Do MMMM YYYY");
  losAngelesTimeElement.innerHTML = losAngelesTime
    .tz("America/Los_Angeles")
    .format("h:mm:ss [<small>]A[</small>]");

  //paris
  let parisElement = document.querySelector("#paris");
  let parisDateElement = parisElement.querySelector(".date");
  let parisTimeElement = parisElement.querySelector(".time");
  let parisTime = moment();

  parisDateElement.innerHTML = parisTime.format("ddd Do MMMM YYYY");
  parisTimeElement.innerHTML = parisTime
    .tz("Europe/Paris")
    .format("h:mm:ss [<small>]A[</small>]");
}

updateTime();

setInterval(updateTime, 1000);
