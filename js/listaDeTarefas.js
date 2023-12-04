const listaDeTarefas = [
  {
    nome: "Responder Bea no Discord",
    status: "Não concluída"
  },
  {
    nome: "Sofrer pelo Santa Cruz",
    status: "Não concluída"
  },
  {
    nome: "Mudar algo no boilerplate (pela 1782683729 vez)",
    status: "Não concluída"
  }
];

function exibirListaDeTarefas(lista) {
  console.log("Lista Mágica de Tarefas da Titi");

  lista.forEach((tarefa, index) => {
    console.log(`${index + 1}. ${tarefa.nome}`);
    console.log(`Status: ${tarefa.status}\n`);
  });
}

exibirListaDeTarefas(listaDeTarefas);