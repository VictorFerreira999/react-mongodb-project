const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const PORT = 5000;

app.use(cors());
app.use(bodyParser.json());

mongoose.connect('mongodb://mongo-container:27017/react-mongodb')
  .then(() => console.log('Conexão ao MongoDB estabelecida com sucesso!'))
  .catch((error) => console.error('Erro ao conectar ao MongoDB:', error));


const userRoutes = require('./routes/userRoutes');
app.use('/api/users', userRoutes);

app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));
