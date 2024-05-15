import { create, dequeue, enqueue, isEmpty, isFull, peek } from "./fila";
import { Aluno, Fileira } from "./types";

// Array de alunos nas fileiras
const alunos = [
  "João",
  "Felipe",
  "Maria",
  "José",
  "Ana",
  "Carlos",
  "Pedro",
  "Paulo",
  "Lucas",
  "Mariana",
  "Juliana",
  "Fernanda",
  "Rafael",
  "Ricardo",
  "Jorge",
  "Miguel",
];

// Cada fileira pode ter NO MÁXIMO 5 alunos

const MAX_ALUNOS_POR_FILEIRA = 5
const qtdAlunos = alunos.length
const qtdFileiras = Math.ceil(qtdAlunos / MAX_ALUNOS_POR_FILEIRA)

const salaDeAula = create(qtdFileiras)

for(let i = 0; i < qtdFileiras; i++) {
  const fileira: Fileira = {
    numeroDaFileira: i,
    alunos: create(MAX_ALUNOS_POR_FILEIRA)
  }
  
// Inserindo/populando 5 alunos por fileira
  alunos.forEach(nomeDoAluno => {

    if(isFull(fileira.alunos)) {
      return
    }

    const aluno: Aluno = {
      nome: nomeDoAluno
    }
  
    enqueue(fileira.alunos, aluno)

  })

  alunos.splice(0, MAX_ALUNOS_POR_FILEIRA)

  enqueue(salaDeAula, fileira.alunos)
}

console.log(salaDeAula);


main()

// Função main
function main() {
  // Função que chama retira todos alunos da fileira e "da tchau" para eles
  
  // Função que chama a fileira
  for(let i = 0; i < qtdFileiras; i++) {
    const fileiraAtual: Fileira = {
      alunos: peek(salaDeAula),
      numeroDaFileira: i
    }

    console.log(`Fileira ${fileiraAtual.numeroDaFileira + 1}`);
  
    // Para cada aluno da fileira, remove-o da fileira e "da tchau"
    for(let j = 0; j < MAX_ALUNOS_POR_FILEIRA; j++) {

      if(isEmpty(fileiraAtual.alunos)) {
        return
      }

      const alunoAtual = dequeue(fileiraAtual.alunos)

      console.log(`${alunoAtual.nome} se levantou da cadeira ${j + 1}`);
      console.log(`Tchau ${alunoAtual.nome}!`);
      console.log("-------------------------------");
    }
    
    console.log("\n");

    dequeue(salaDeAula)
  }
}