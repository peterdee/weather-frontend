const express = require('express');
const helmet = require('helmet');
const path = require('path');

const app = express();

app.use(helmet());
app.use(express.static(path.join(__dirname, 'dist')));

app.get('/*', (_, res) => res.sendFile(path.join(__dirname, 'dist', 'index.html')));

app.listen(Number(process.env.PORT) || 8080);
