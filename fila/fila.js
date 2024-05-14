export const criarFila = (tamanhoDaFila = 5) => {
  return [...new Array(tamanhoDaFila)]
}

export const adicionarNaFila = (fila = [], item) => {
  const indiceDoPrimeiroEspacoVazio = fila.indexOf(undefined)

  if(indiceDoPrimeiroEspacoVazio !== -1) { // Se tiver espaço na fila
    fila[indiceDoPrimeiroEspacoVazio] = item
    return
  }

  console.log("> A fila está cheia");
}

export const removerDaFila = (fila = []) => {
  
  const itemRemovido = fila[0]

  fila[0] = undefined

  for(let i = 0; i < fila.length; i++) {
    fila[i] = fila[i + 1]
  }

  return itemRemovido

}
