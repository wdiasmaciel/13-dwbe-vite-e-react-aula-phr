# 13-dwbe-vite-e-react-aula-phr

Material:

https://app.notion.com/p/Cap-tulo-10-Consumindo-APIs-REST-com-Fetch-API-39644ced362580d68859ed102118d2b2

---

## Comandos

```bash
sudo apt update
```

```bash
sudo apt install -y nodejs
```

```bash
node -v
```

```bash
npm install -g npm@11.19.0
```

```bash
npm -v
```

```bash
npm create vite@latest
```

Ao apresentar a mensagem abaixo, pressione a tecla `y`:

```text
Need to install the following packages:
create-vite@9.3.4
Ok to proceed? (y) 
```

Em seguida, informe o nome do projeto. Exemplo:

```text
react-aula
```

Depois, selecione o framework:

```text 
React
```

Na sequência, selecione a linguagem de programação:

```text
JavaScript
```

Na pergunta seguinte, selecione o linter:

```text
ESLint
```
Na pergunta abaixo, pressione a tecla `<ENTER>`, confirmando o `Yes` para a instalação:

```text
◆  Install with npm and start now?
│  ● Yes / ○ No
```

Depois da instalação, entre na pasta do projeto:

```bash
cd react-aula
```

```bash
npm install
```

```bash
npm run dev
```

```bash
git add . && git commit -m "Exemplo" && git push
```

---

# Exercícios 

1. Explique a diferença entre uma aplicação React que utiliza dados simulados e outra que consome uma API REST.
2. Pesquise a diferença entre os métodos HTTP **PUT** e **PATCH** e apresente exemplos de uso.
3. Crie uma função `listarCategorias()` que consulte o endpoint `GET /categorias` utilizando a Fetch API.
4. Implemente uma tela que exiba uma mensagem de carregamento enquanto a requisição estiver em andamento.
5. Adicione tratamento para erros HTTP (404 e 500), exibindo mensagens apropriadas ao usuário.
6. Organize todas as chamadas da API em arquivos dentro da pasta `services`, separando responsabilidades.
7. Como desafio, adapte a aplicação para consumir uma API pública (por exemplo, de países, usuários ou livros), exibindo os dados em componentes React reutilizáveis.