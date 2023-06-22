const lessons = [
  'English language',
  'Japanese language',
  'Spanish language',
  'Italian language',
  'Arabic classes',
  'Swedish language',
  'Chinese language',
  'Greek language',
  'German language',
  'Polish language',
  'Turkish language',
  'Estonian language',
  'Hindi language',
  'Russian language',
  'French language',
  'Korean language'
]

const names = [
'Gaylord Balcom',
'Hosea Jack',
'Vera Fuselier',
'Kacy Poplar',
'Scottie Wallen',
'Deeanna Soukup',
'Brant Dipaola',
'Jeffie Parnell',
'Monte Heilig',
'Terrell Metzer',
'Annelle Ziolkowski',
'Lucila Tiger',
'Marybelle Ensign',
'Carmen Caylor',
'Coretta Harriss',
'Melida Waiters',
'Darlene Mund',
'Minta Lofton',
'Roxie Galyean',
'Theressa Hoaglin',
'Amara Novik',
'Joshua Hallstrick',
'Jason Hamsford',
'Elena Duty',
'Ezra Miantkovsky'
]

window.addEventListener('DOMContentLoaded', function() {
  // header search area handling
    const searchOptionsDiv = document.querySelector('.options');
    searchOptionsDiv.onclick = function(event) {
      let el = event.target;
      el.classList.toggle('options__item--orange');
    };
    searchOptionsDiv.onmouseover = function(event) {
      event.target.classList.add("light");
    }
    searchOptionsDiv.onmouseout = function(event) {
      event.target.classList.remove("light");
    }
    // tutor switchers
    const header = document.querySelectorAll(".tutor_right .top");
    for (let i = 0; i < header.length; i++) {
      header[i].addEventListener("click", function(event) {
          let active = header[i].querySelector(".active");
          if(active) {
            active.classList.remove("active")
          };
          event.target.classList.add("active");
      });
    };
  // Lessons select
    const autoCompleteLessonTop = new autoComplete({
      selector: '#idLessons',
      placeHolder: 'Lesson Name',
      data: {
        src: lessons,
        cache: true,
      },
        resultItem: {
        highlight: true,
      },
        events: {
        input: {
          selection: (event) => {
            const selection = event.detail.selection.value;
            autoCompleteLessonTop.input.value = selection;
          },
        },
      },
      resultsList: {
        maxResults: 15,
      },
    });
    // Tutors select
    const autoCompleteTeacherTop = new autoComplete({
      selector: '#idTutor',
      placeHolder: 'Tutor Name',
      data: {
        src: names,
        cache: true,
      },
        resultItem: {
        highlight: true,
      },
        events: {
        input: {
          selection: (event) => {
            const selection = event.detail.selection.value;
            autoCompleteTeacherTop.input.value = selection;
          },
        },
      },
      resultsList: {
        maxResults: 15,
      },
    });
    // Custom select
    customSelect('.search-block__select');
});


