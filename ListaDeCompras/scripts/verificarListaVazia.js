const mensagemListaVazia = document.querySelector(".mensagem-lista-vazia");

export function verificarListaVazia(listaTarefas) {
  const itensDaLista = listaTarefas.querySelectorAll("li");
  if (itensDaLista.length === 0) {
    mensagemListaVazia.style.display = "block";
  } else {
    mensagemListaVazia.style.display = "none";
  }
}
