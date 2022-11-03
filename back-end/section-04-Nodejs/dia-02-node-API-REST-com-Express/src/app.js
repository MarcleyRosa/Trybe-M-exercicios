const express = require('express');

const app = express();
const path = require('path');
const fs = require('fs').promises;

const readmovies = path.resolve(__dirname, './movies.json');

const requis = async () => {
  const response = await fs.readFile(readmovies, 'utf-8');
  console.log(response);
};

app.get('/', (req, res) => res.status(200).json({ message: 'Olá Mundo!' }));
requis();

module.exports = app;

// const express = require('express');

// const teams = [
//   {
//     id: 1,
//     name: 'São Paulo Futebol Clube',
//     initials: 'SPF',
//   },
//   {
//     id: 2,
//     name: 'Clube Atlético Mineiro',
//     initials: 'CAM',
//   },
// ];
