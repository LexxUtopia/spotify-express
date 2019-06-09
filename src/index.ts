import express from 'express';

const app = express();
const port = 3030;

app.get('/', (req, res) => res.send('Hello w'));

app.listen(port, () => console.log('Test'));