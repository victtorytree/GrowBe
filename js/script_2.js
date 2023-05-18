document.querySelector('.options').onclick = function(event) {
	let target = event.target;
	target.classList.toggle('options__item--active');
}

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

const autoCompleteJS = new autoComplete({
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
        autoCompleteJS.input.value = selection;
      },
    },
  },
  resultsList: {
    maxResults: 15,
  },
});

const autoCompleteJS2 = new autoComplete({
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
        const selection2 = event.detail.selection.value;
        autoCompleteJS2.input.value = selection2;
      },
    },
  },
  resultsList: {
    maxResults: 15,
  },
});

// Custom select
customSelect('.search-block__select');
