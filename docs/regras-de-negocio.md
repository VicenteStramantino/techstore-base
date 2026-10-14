# Regras de negócio

Última atualização: outubro de 2026

## Frete grátis

Produtos com preço acima de R$ 100 têm frete grátis e exibem o selo "Frete grátis".

## Cupons

| Cupom | Desconto | Quem pode usar |
|---|---|---|
| `PRIMEIRACOMPRA` | 10% sobre o total | Qualquer cliente |

O cupom não diferencia letras maiúsculas e minúsculas.

## Promoções

Produtos em promoção exibem o preço original riscado ao lado do preço atual.

## Disponibilidade do produto

Produtos com estoque igual a zero devem ser identificados como esgotados. Nessa situação, a ação de adicionar ao carrinho deve ser bloqueada e o botão deve mostrar a mensagem "Produto esgotado, Avise me quando chegar!".

## Preços indisponíveis

Quando o preço do produto for inválido, nulo ou `NaN`, o sistema deve exibir a mensagem "Preço indisponivel" e impedir a compra. Isso evita cálculos inconsistentes no carrinho e na tela de detalhes do produto.

## Regras de compra

- Produtos indisponíveis para compra não podem ser adicionados ao carrinho.
- Produtos com estoque zerado não podem entrar no fluxo de compra.
- O carrinho deve considerar somente valores numéricos válidos para o cálculo do total.
