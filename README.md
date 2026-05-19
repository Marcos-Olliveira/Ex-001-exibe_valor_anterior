# Antecessor de Número

Projeto simples em JavaScript que recebe um número digitado pelo usuário e exibe seu antecessor.

## Funcionalidade

- Captura um valor de um input HTML
- Converte o valor para número inteiro
- Verifica se é um número válido
- Exibe o antecessor do número informado
- Exibe mensagem de erro caso a entrada não seja válida

## Tecnologias utilizadas

- HTML
- CSS (básico ou opcional)
- JavaScript (DOM)

## Estrutura

- `index.html` → estrutura da página
- `script.js` → lógica do programa

## Lógica

1. Usuário digita um valor no input
2. Clique no botão chama a função `processar()`
3. O valor é capturado pelo DOM
4. Convertido com `parseInt`
5. Validado com `isNaN`
6. Se válido, subtrai 1 e exibe o resultado
7. Se inválido, exibe mensagem de erro

## Exemplo

Entrada: 10
Saida: 09
