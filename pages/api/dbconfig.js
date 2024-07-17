const sql = require('mssql');

const config = {
  user: 'YOUR-DATABASE',
  password: 'YOUR-DATABASE',
  server: 'YOUR-SERVER',
  database: 'YOUR-DATABASE',
  options: {
    encrypt: true,  
    trustServerCertificate: true,  
  },
};
