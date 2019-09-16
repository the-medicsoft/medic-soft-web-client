const path = require('path');

const express = require('express');

const app = express();

const { PORT = 4200, HOST = '0.0.0.0' } = process.env;

const dirToServe = path.join(__dirname, 'dist/MedicSoft-App');

app.use(express.static(dirToServe));

app.get('*/', (req, res, next) => {
  res.sendFile(dirToServe + '/index.html');
});

app.listen(PORT, HOST, (err) => {
  if (err) throw err;

  console.log(`Webclient Running on http://${HOST}:${PORT}`);
});