// Custom select
customSelect('.timezone-select');


// Calendar
const days = document.querySelectorAll(".day__heading");
let dayCheck = document.querySelector(".day__heading_active");
for (let i = 0; i < days.length; i++) {
  days[i].addEventListener("click", () => {
    if (dayCheck) {dayCheck.classList.remove("day__heading_active")};
  	days[i].classList.toggle("day__heading_active");
    dayCheck = days[i];
  });
};

// Week switch
const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December' ];
let date = new Date();
let year = date.getFullYear();
let month = date.getMonth();
let day = date.getDate();
let dayIndex = date.getDay();
let start;
for (let i = 0; i < 7; i++) {
  if(dayIndex === i) {
    start = day - i;
    break;
  }
};

function print(inValue) {
  let beginMonth = months[new Date(year, month, inValue).getMonth()];
  let endMonth = months[new Date(year, month, inValue + 6).getMonth()];
  let firstDay = new Date(year, month, inValue).getDate();
  let lastDay = new Date(year, month, inValue + 6).getDate();
  document.querySelector('.schedule__week').textContent = `${beginMonth} ${firstDay} - ${endMonth}  ${lastDay}`;
  const numbers = document.querySelectorAll(".day__number");
  for (let j = 0; j < numbers.length; j++) {
    numbers[j].textContent = new Date(year, month, inValue).getDate();
    inValue++;
  }
};
document.addEventListener("DOMContentLoaded", () => { 
  print(start);
  document.querySelector('.schedule__switch-before').addEventListener('click', () => {
    start = start - 7;
    print(start);
  });
  document.querySelector('.schedule__switch-next').addEventListener('click', () => {
    start = start + 7;
    print(start);
  });   
});


// Show new blocks in .info <div>
  const trialEl = document.querySelector(".tutor__trial");
  const videoEl = document.querySelector(".tutor__intro");
  const trialElCopy = trialEl.cloneNode(true);
  trialElCopy.classList.add("tutor__trial_small");
  const socialIcons = document.querySelector(".bottom-icons").cloneNode(true);
  trialElCopy.append(socialIcons);
  const videoElCopy = videoEl.cloneNode(true);
  videoElCopy.classList.add("tutor__video_small");
  const targetEl = document.querySelector("#main-block");

  window.onresize = function() {
    if (window.innerWidth < 992) {
      targetEl.prepend(videoElCopy);
      targetEl.appendChild(trialElCopy);
    }
      else {
        trialElCopy.remove();
        videoElCopy.remove();
      }
  };
  
// Select for resume on mobile
  const tutorArr = ['Sunderland BSc Hons', ['Philadelphia College', ' Tutorify'], 'Art degree'];
  const yearArray = ['2010-2015', ['2015-2017', ' 2016-current'], '2017'];
  const drop = document.querySelector(".resume__select");
  const info = document.querySelector(".info--mobile");
  const resYear = document.querySelector(".year--mobile");
  info.innerHTML = tutorArr[0];
  resYear.innerHTML = yearArray[0];
  drop.onchange = function() {
  let dropIndex = drop.selectedIndex;
  info.innerHTML = tutorArr[dropIndex];
  resYear.innerHTML = yearArray[dropIndex];
};




