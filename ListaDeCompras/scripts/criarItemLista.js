import { gerarDiaDaSemana } from "./gerarDiaDaSemana.js";

const inputItem = document.getElementById("input-item");

// contador para gerar IDs únicos para os checkboxes
let contador = 0;

// função que cria um novo item na lista
export function criarItemLista() {
  if (inputItem.value === "") {
    alert("Insira um valor válido");
    return;
  }

  //cria elementos
  const itemDaLista = document.createElement("li");
  const containerItemLista = document.createElement("div");
  containerItemLista.classList.add("lista-item-container");

  // cria o checkbox
  const inputCheckBox = document.createElement("input");
  inputCheckBox.type = "checkbox";
  inputCheckBox.id = "checkbox-" + contador++;

  //cria o elemento que vai conter o nome do item
  const nomeItem = document.createElement("p");
  nomeItem.innerText = inputItem.value;

  // Adiciona um evento de clique no checkbox para riscar ou desriscar o texto
  inputCheckBox.addEventListener("click", function () {
    if (inputCheckBox.checked) {
      nomeItem.style.textDecoration = "line-through";
    } else {
      nomeItem.style.textDecoration = "none";
    }
  });

  containerItemLista.appendChild(inputCheckBox);
  containerItemLista.appendChild(nomeItem);

  itemDaLista.appendChild(containerItemLista);

  const dataCompleta = gerarDiaDaSemana();
  const itemData = document.createElement("p");
  itemData.innerText = dataCompleta;
  itemData.classList.add("texto-data");

  itemDaLista.appendChild(itemData);

  return itemDaLista;
}
