const express = require('express');
const cors = require('cors');
const app = express();
const port = 4000;

app.use(cors());
app.use(express.json());
app.use(express.static('public'));

app.use('/api/ventas', require('./routes/ventas'));
app.use('/api/mantenimiento', require('./routes/mantenimiento'));

app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});