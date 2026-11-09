# Café da Ladeira

Página web responsiva de uma cafeteria fictícia, desenvolvida com **Bootstrap 5** para a atividade da disciplina do curso de Engenharia de Software (UCSal).

**Aluno(a):** (preencha seu nome)

## Componentes

| Componente | Uso na página |
|---|---|
| Navbar | Menu principal, com hambúrguer em telas pequenas |
| Carrossel | Destaques da cafeteria, com setas, indicadores e auto-play |
| Cards | Produtos, em grid de 1 coluna no celular e 3 a partir do tablet |
| Tabela | Cardápio com preços, listrada e responsiva |
| Formulário | Reserva de mesa, com validação HTML5 |
| Modal | Horários de funcionamento e confirmação da reserva |

## Estrutura

```text
index.html       Estrutura da página e componentes
css/estilo.css   Tamanho dos slides do carrossel
js/script.js     Envio do formulário e modal de confirmação
```

## Como executar no GitHub Codespaces

1. Clique em **Code → Codespaces → Create codespace on main**.
2. No terminal, execute o comando abaixo:

```bash
python3 -m http.server 8000
```

3. Abra o endereço indicado na aba **Portas**.

O Bootstrap é carregado via CDN, então não é preciso instalar nada, mas a página precisa de internet.
