# 👥 Cadastro de Usuários (Front-end)

Aplicação web para **cadastrar, listar e excluir usuários**, com avatares coloridos gerados automaticamente e avisos visuais de sucesso e erro.

🔗 **Acesse o projeto no ar:** [front-cadastro-usuarios-alpha.vercel.app](https://front-cadastro-usuarios-alpha.vercel.app/)

> ⏳ **Atenção:** o back-end está hospedado no plano gratuito do Render, que "dorme" após alguns minutos sem uso. Na primeira vez que abrir o site, a lista de usuários pode levar de 30 a 50 segundos para carregar. Depois disso, funciona normalmente.

---

## ✨ Funcionalidades

- Cadastro de usuários com nome, idade e e-mail
- Validação de campos vazios antes de enviar
- Bloqueio de e-mails repetidos, com aviso na tela
- Listagem de todos os usuários cadastrados
- Exclusão de usuários
- Avatar gerado a partir do nome, com cor pastel fixa para cada usuário
- Balões de aviso (sucesso, erro e alerta) com `react-toastify`

---

## 🛠️ Tecnologias

**Front-end (este repositório)**

- [React](https://react.dev/) com [Vite](https://vite.dev/)
- [React Router](https://reactrouter.com/) para a navegação entre páginas
- [Axios](https://axios-http.com/) para as requisições ao back-end
- [styled-components](https://styled-components.com/) para a estilização
- [React Toastify](https://fkhadra.github.io/react-toastify/) para os avisos
- [UI Avatars](https://ui-avatars.com/) para gerar os avatares

**Back-end (repositório separado)**

- Node.js + Express
- Prisma ORM
- MongoDB Atlas
- Hospedagem no Render

🔗 Repositório do back-end: [back-cadastro-usuarios](https://github.com/fabriciabarbisan/back-cadastro-usuarios)

---

## 🚀 Como rodar o projeto localmente

### Pré-requisitos

- [Node.js](https://nodejs.org/) instalado
- O [back-end](https://github.com/fabriciabarbisan/back-cadastro-usuarios) rodando localmente (porta `3000`) ou o endereço de um back-end publicado

### Passo a passo

1. Clone o repositório:

```bash
git clone https://github.com/fabriciabarbisan/front-cadastro-usuarios.git
```

2. Entre na pasta do projeto:

```bash
cd front-cadastro-usuarios
```

3. Instale as dependências:

```bash
npm install
```

4. (Opcional) Para usar um back-end diferente do `localhost:3000`, crie um arquivo `.env` na raiz do projeto:

```
VITE_API_URL=https://endereco-do-seu-back-end.com
```

5. Inicie o projeto:

```bash
npm run dev
```

6. Abra o endereço que aparecer no terminal (normalmente `http://localhost:5173`).

---

## 📁 Estrutura do projeto

```
src/
├── assets/        # imagens e ícones
├── components/    # componentes reutilizáveis (Button, Title, TopBackground)
├── pages/
│   ├── Home/      # tela de cadastro de usuários
│   └── ListUsers/ # tela de listagem e exclusão
├── services/      # configuração do Axios (api.js)
├── styles/        # estilos globais
├── routes.jsx     # rotas da aplicação
└── main.jsx       # ponto de entrada
```

---

## 🌐 Deploy

- **Front-end:** [Vercel](https://vercel.com/)
- **Back-end:** [Render](https://render.com/)
- **Banco de dados:** [MongoDB Atlas](https://www.mongodb.com/atlas)

A variável de ambiente `VITE_API_URL` aponta para o endereço do back-end publicado.

---

## 👩‍💻 Autora

**Fabrícia Barbisan Camargo**

Desenvolvedora Front-end em transição de carreira, vinda da Arquitetura e Urbanismo.

- GitHub: [@fabriciabarbisan](https://github.com/fabriciabarbisan)
- LinkedIn: [fabriciabarbisan](https://www.linkedin.com/in/fabriciabarbisan)
