document.querySelector(".calculate").addEventListener("click", function calc() {
  let x = document.querySelector(".inputx").value;
  let y = document.querySelector(".inputy").value;
  let answer = document.querySelector(".answer");

  if (x >= 1000 || y >= 1000) {
    alert("Error");
    return;
  }
  answer.innerHTML = Number(x) + Number(y);
});
