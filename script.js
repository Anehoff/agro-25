let acertos = 0;
let total = 0;

function checkAnswer(button, correto) {
  if (button.classList.contains("respondido")) return;

  total++;
  button.classList.add("respondido");

  if (correto) {
    button.style.backgroundColor = "#388e3c";
    acertos++;
  } else {
    button.style.backgroundColor = "#d32f2f";
  }

  if (total === 2) {
    const resultado = document.getElementById("resultado");
    resultado.innerText = `Você acertou ${acertos} de 2 perguntas!`;
  }
}
