# Usando a imagem mais recente do Node.js
FROM node:20-alpine

# Definindo diretório de trabalho
WORKDIR /backend

# Copiando os arquivos package.json e package-lock.json para o contêiner
COPY package.json package-lock.json ./

# Instalando dependências do Node.js
RUN npm install

# Copiando o restante dos arquivos do projeto
COPY . .

# Expondo a porta que o servidor vai usar (exemplo: 5000)
EXPOSE 5000

# Rodando a aplicação (seu arquivo de entrada é o 'server.js')
CMD ["node", "server.js"]
