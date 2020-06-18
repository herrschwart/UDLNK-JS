// Main Typed Words
var typed = new Typed(".typed-words", {
strings: ["Frontend-разработчики", "Дизайнеры", "Маркетологи", "Копирайтеры", "Сейлзы", "SMM-менеджеры", "Backend-разработчики", "Редакторы", "DevOps"],
typeSpeed: 75,
backSpeed: 50,
backDelay: 800,
startDelay: 500,
loop: true,
showCursor: false,
cursorChar: "|",
attr: null,
});

// Tippy JS Settings
tippy('#test-link', {
  animation: 'scale',
  duration: 200,
  arrow: true,
  delay: [0, 50],
  arrowType: 'round',
  maxWidth: 350,
})

// Jobs Counter
jobNumber = $('.collection-job-item').length;
$('.job-count').text(jobNumber);
