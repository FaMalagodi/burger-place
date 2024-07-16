const sql = require('mssql');

const config = {
  user: 'BD23313',
  password: 'BD23313',
  server: 'regulus.cotuca.unicamp.br',
  database: 'BD23313',
  options: {
    encrypt: true,  // Se estiver usando a criptografia
    trustServerCertificate: true,  // Desativa a verificação do certificado
  },
};