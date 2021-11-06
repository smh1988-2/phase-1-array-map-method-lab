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

const titleCased = (arr) => {
  return tutorials.map(str => str.split(" ").map(w => w[0].toUpperCase() + w.substr(1)).join(" ") );
};

titleCased();
console.log(titleCased());








// const students = ["harry", "ron", "hermione", "ginevra"];
// const teachers = ["dumbledore", "hagrid", "mcgonagall"]
// const robots = [
//   { name: 'Johnny 5', modes: 5, isActivated: false, },
//   { name: 'C3PO', modes: 3, isActivated: false, },
//   { name: 'Sonny', modes: 2.5, isActivated: false, },
//   { name: 'Baymax', modes: 1.5, isActivated: false, },
// ];

// // for (student of students) {
// //   rollCall.push(student.toUpperCase() + " was created by a TERF :(");
// // }

// const tellTheTruth = (arr) => arr.map(name => name.toUpperCase() + " was created by a TERF")

// console.log(tellTheTruth(students));
// console.log(tellTheTruth(teachers));