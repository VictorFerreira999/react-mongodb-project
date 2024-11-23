# Etapa 1: Construir a aplicação
FROM node:20 AS build

# Definir o diretório de trabalho
WORKDIR /front

# Copiar os arquivos package.json e package-lock.json
COPY package.json package-lock.json ./

# Instalar as dependências do projeto
RUN npm install

# Copiar o restante dos arquivos do projeto
COPY . .

# Criar a versão de produção da aplicação
RUN npm run build

# Etapa 2: Servir a aplicação com Node.js
FROM node:20

# Instalar o servidor http-server para servir os arquivos estáticos
RUN npm install -g serve

# Definir o diretório de trabalho para os arquivos estáticos
WORKDIR /front

# Copiar os arquivos gerados no build para o contêiner
COPY --from=build /front/build /front/build

# Expor a porta 3000 para o frontend
EXPOSE 3000

# Iniciar o servidor
CMD ["serve", "-s", "build", "-l", "3000", "--single"]
