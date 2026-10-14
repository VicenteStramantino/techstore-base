export function formatarPreco(valor) {
  if (Number.isNaN(Number(valor))) {
    return 'Preço indisponivel'
  }
  return Number(valor).toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  })
}
