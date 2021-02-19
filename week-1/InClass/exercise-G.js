const numberOfStudents= 15;
const numberOfMentors=8;
const Total= numberOfStudents+numberOfMentors;
const PercentageStudents= (numberOfStudents*100)/Total;
const PercentageMentors=(numberOfMentors*100)/Total;
const Students= Math.round(PercentageStudents);
const Mentors= Math.round(PercentageMentors);
console.log("Percentege Students is: " + Students+"%");
console.log("Percentage Mentors is: " +Mentors+"%");
