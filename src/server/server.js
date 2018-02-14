const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.json({ hello: 'World' });
});

app.get('/users/:id', (req, res) => {
  const users = {
    14: 'Francisco',
    15: 'Jose',
    16: 'Maria',
  };
  res.json({ name: users[req.params.id] });
});

app.get('/companies', (req, res) => {
  // parametros query. Ejemplo /companies?hola=true
  res.json({ name: req.query.name });
});

app.get('/alejandro', (req, res) => {
  res.json({ name: 'Mi nombre es Alejandro' });
});

app.get('/nombre/:name', (req, res) => {
  res.json({ name: `Mi nombre es ${req.params.name}` });
});

app.get('/name', (req, res) => {
  res.json({ name: `Mi nombre es ${req.query.name}` });
});

app.listen(3005, () => {
  console.log('Server running on port 3005');
});
