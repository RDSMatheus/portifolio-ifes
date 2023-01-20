const galeria = document.querySelectorAll("#galeria div img");
const imgPrincipal = document.querySelector("#principal");

galeria.forEach(function (img, i) {
  img.addEventListener("click", function (event) {
    const clicou = event.currentTarget;
    const texto = document.querySelectorAll(".galeria-conteudo div");
    imgPrincipal.src = clicou.src;
    imgPrincipal.classList.add("ativo")
    galeria.forEach(function (img) {
      img.classList.remove("borda");
    });
    galeria[i].classList.add("borda");
    texto.forEach(function (txt) {
      txt.classList.remove("ativo");
    });
    texto[i].classList.add("ativo");
  });
});
