function revelar() {

  // Imagem
  const img = document.getElementById("foto-jogador");
  img.src = "_vinicius_junior.png";

  // Nome
  document.getElementById("nome").textContent =
    "Vinícius José Paixão de Oliveira Júnior";

  // Nascimento
  document.getElementById("nascimento").textContent =
    "12/07/2000 (25 anos)";

  // Altura
  document.getElementById("altura").textContent =
    "1,76 m";

  // Posição
  document.getElementById("posicao").textContent =
    "Ponta-esquerda / Atacante";

  // Rank
  document.getElementById("rank").textContent =
    "9,5";

  // Remover placeholder e aplicar estilo final
  const elementos = document.querySelectorAll(".placeholder-text");

  elementos.forEach(el => {
    el.classList.remove("placeholder-text");
    el.classList.add("card-text");
  });

}
