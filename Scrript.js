document.getElementById("marksForm").addEventListener("submit", function(e) {
  e.preventDefault();
  const name = document.getElementById("name").value;
  const marks = parseInt(document.getElementById("marks").value);
  const grade = marks >= 75 ? "A" : marks >= 60 ? "B" : marks >= 40 ? "C" : "F";
  const row = `<tr><td>${name}</td><td>${marks}</td><td>${grade}</td></tr>`;
  document.getElementById("studentList").innerHTML += row;
  this.reset();
});
