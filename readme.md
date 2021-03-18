## API PROJETO FILMES

### Sobre API
##### API para gerenciamento de filmes.

API é responsavel por:
- [x] 01 - Cadastrar, Editar e Excluir(desativar) usuário admin
- [x] 02 - Cadastrar, Editar e Excluir(desativar) usuário normal
- [x] 03 - Cadastrar e listar diretor de cinema
- [x] 04 - Cadastrar e listar genero do filme
- [x] 05 - Cadastrar filmes
- [x] 06 - Curtir os filmes

Nesse projeto foi adotado o padrão de projeto **Model-View-Controlle**.

Para desenvolvimento do sistema foi utilizado a tecnologias:

- [x] NODE na versão v12.13.1
- [x] banco de dados PostgreSQL
- [x] Yarn

Bibliotecas utilizadas no projeto:

     "dependencies": {
    "babel-jest": "^26.6.3",
    "bcryptjs": "^2.4.3",
    "cors": "^2.8.5",
    "date-fns": "^2.0.0-beta.5",
    "dotenv": "^8.2.0",
    "express-async-errors": "^3.1.1",
    "helmet": "^4.4.1",
    "jsonwebtoken": "^8.5.1",
    "pg": "^8.5.1",
    "pg-hstore": "^2.3.3",
    "sequelize": "^6.5.0",
    "swagger-ui-express": "^4.1.6",
    "youch": "^2.1.1",
    "yup": "^0.32.9"
  },


### onfigurações e instalação

**Instalação do projeto:**

- [x] Clone o projeto para sua máquina
- [x] certifique-se que seu NODE está na versão v12.13.1.
- [x] certifique-se que o Yarn está instalado no seu ambiente.
- [x] certifique-se que banco de dados utilizado no seu ambiente é PostgreSQL.

após verificar seu ambiente entre na pasta do seu projeto e execute o comando:

```yarn```

esses comandos é utilizado para instalação da pasta node_modules e seus componentes

```yarn dev```

esses comandos é utilizado para rodar a API

```yarn sequelize db:migrate```

esses comandos é utilizado para gerar as tabelas no banco de dados

OBS: certifique-se que você passou as informações de acesso ao banco de dados para o arquivo .env

#### ESTRUTURA DE PASTAS DO PROJETO

```
├──Project
 ├──── app
      ├──── controllers
      ├──── middlewares
      ├──── models
      └──── validators
 ├──── config
 ├──── database
      └────migrations
 ├──── docs
```


