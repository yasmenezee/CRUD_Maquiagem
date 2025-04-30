# Crud de Makes Simples em React

E aí! 👋

Esse aqui é um projetinho simples que nós fizemos pra praticar um pouco de React. A ideia era criar um CRUD (Create, Read, Update, Delete) básico pra gerenciar uns produtos de maquiagem.

## Como funciona?

É bem direto ao ponto:

* **Adicionar Produto:** Tem um formulário pra você cadastrar a marca, categoria, preço e data de validade do produto.
* **Listar Produtos:** Os produtos cadastrados aparecem numa tabelinha organizada.
* **Editar Produto:** Clicando no botão "Editar" de um produto, você pode alterar as informações dele no formulário e salvar as mudanças.
* **Excluir Produto:** Se precisar, tem um botão "Excluir" pra sumir com algum produto da lista (ele ainda pergunta se você tem certeza, pra não apagar sem querer 😉).

Os dados ficam salvos no seu navegador usando o `localStorage`, então se você fechar e abrir a página de novo, os produtos ainda estarão lá.

## Tecnologias Usadas

* **React:** A base de tudo.
* **Bootstrap:** Usamos pra dar uma estilizada rápida nos componentes e deixar responsivo.
* **CSS:** demos uns toques no visual pra deixar do meu jeito.

## Pra rodar na sua máquina

Se você quiser dar uma olhada:

1.  **Clona o repositório:**

    ```bash
    git clone [https://docs.github.com/articles/referencing-and-citing-content](https://docs.github.com/articles/referencing-and-citing-content)
    ```

2.  **Entra na pasta do projeto:**

    ```bash
    cd [CRUD_MAQUIAGEM]
    ```

3.  **Instala as dependências:**

    ```
    npm install
    ```

4.  **Roda o projeto:**

    ```
    npm start
    ```

Aí ele deve abrir no seu navegador em alguma porta tipo `http://localhost:3000`.

## Próximos Passos (Quem sabe um dia...)

Por enquanto tá assim, mas quem sabe no futuro eu não adiciono mais alguma coisa, tipo:

* Fazer um backend de verdade pra salvar os dados num banco.
