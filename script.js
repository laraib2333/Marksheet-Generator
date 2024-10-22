var marksObtained = 0;
var totalMarks = 300; 
var percentage = 0; 
function calculateTotalMarks() {
  var mathMarks = parseInt(document.getElementById("Math").value);
  var bussinessComMarks = parseInt(document.getElementById("BussinessCom").value);
  var javaMarks = parseInt(document.getElementById("Java").value);

  marksObtained = mathMarks + bussinessComMarks  + javaMarks;

  var result = "Marks Obtained: " + marksObtained + " out of " + totalMarks;

  document.getElementById("MarksObtained").innerHTML = result;
}

function calculatePercentage() {
  percentage = (marksObtained / totalMarks) * 100;

  var result = "Percentage: " + percentage.toFixed(2) + "%";

  document.getElementById("MarksObtained").innerHTML = result;
}

function calculateGrade() {
  var grade;

  if (percentage >= 90) {
    grade = "A+";
  } else if (percentage >= 80) {
    grade = "A";
  } else if (percentage >= 70) {
    grade = "B";
  } else if (percentage >= 60) {
    grade = "C";
  } else if (percentage >= 50) {
    grade = "D";
  } else {
    grade = "Fail";
  }

  var result = "Grade: " + grade;

  document.getElementById("MarksObtained").innerHTML = result;
}
function reset(){

 document.getElementById("Math").value="";
   document.getElementById("BussinessCom").value="";
document.getElementById("Java").value="";
document.getElementById("MarksObtained").innerHTML = "";
    }