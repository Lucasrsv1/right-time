# Trabalho Prático de Redes de Computadores I

Aplicação de exibição da hora certa em qualquer fuso horário.

Este site e API são parte do trabalho prático de Redes de Computadores I sobre **serviços web seguros** que deverão ser publicados na Internet de forma segura.

## Instalação

1) Instale o Node.js (versão homologada: v18.12.1).

2) Clone este repositório com o GIT e execute os seguintes comandos dentro da pasta clonada para instalar as dependências do projeto:

```ps
npm i
cd ..\front-end\
npm i
```

3) Após isso, inicialize o servidor da aplicação com o seguinte comando:

```ps
npm start
```

4) Por fim, abra um terminal na pasta `.\front-end` do projeto e execute o seguinte comando para iniciar a aplicação:

```ps
npm start
```

## Construindo Aplicação de Produção

1) Para gerar uma versão de distribuição para produção, abra um terminal na pasta `.\front-end` do projeto e execute o seguinte comando para enviar o front-end da aplicação para a pasta `.\public`:

```ps
npm run publish
```

2) Edite o arquivo `.env` alterando a variável `NODE_ENV` para o valor `production` e a variável `PORT` para a porta que deseja utilizar para o servidor web (a porta `80` é a padrão para HTTP e a `443` é a padrão para HTTPS).

3) Após isso, abra um terminal na pasta do projeto e inicialize a aplicação com o seguinte comando:

```ps
npm start
```

4) Em seu navegador de internet favorito, abra a página da aplicação na porta escolhida usando o IP da máquina (servidor).
