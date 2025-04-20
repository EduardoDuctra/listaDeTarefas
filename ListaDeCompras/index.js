import { criarItemLista } from "./scripts/criarItemLista.js";
import { verificarListaVazia } from "./scripts/verificarListaVazia.js";

const listaDeTarefas = document.getElementById("lista-de-tarefas");

const botaoAdicionar = document.getElementById("adicionar-item");

// Adiciona um ouvinte de evento para o clique no botão "Adicionar"
botaoAdicionar.addEventListener("click", function (evento) {
  evento.preventDefault(); //evita recarregar a página
  const itemDaLista = criarItemLista(); //chama a função criarItemLista
  listaDeTarefas.appendChild(itemDaLista);

  verificarListaVazia(listaDeTarefas);
});

verificarListaVazia(listaDeTarefas);
