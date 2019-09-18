const path = require('path');

const express = require('express');

const app = express();

const { PORT = 4200, HOST = '0.0.0.0' } = process.env;

const pubDir = path.join(__dirname, 'dist/MedicSoft-App');

app.use(express.static(pubDir));

app.get('*/', (req, res, next) => {
  res.sendFile(pubDir + '/index.html');
});

app.listen(PORT, HOST, (err) => {
  if (err) throw err;

  console.log(`Webclient Running on http://${HOST}:${PORT}`);
});