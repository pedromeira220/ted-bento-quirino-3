import { adicionarNaFila, criarFila, removerDaFila } from "./fila.js"

const fila = criarFila(4)

console.log("> Fila", fila);

adicionarNaFila(fila, "item1")
adicionarNaFila(fila, "item2")
adicionarNaFila(fila, "item3")

console.log("> Fila", fila);

removerDaFila(fila)
removerDaFila(fila)
removerDaFila(fila)

console.log("> Fila", fila);