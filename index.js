const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

// use map and for loop
const titleCased = () => {
  return tutorials.map((tutorial) => {
    const newTutorial = tutorial.split(' ');
    return newTutorial.map((title) => title[0].toUpperCase() + title.slice(1)).join(' ');
  });
};

titleCased(tutorials);
