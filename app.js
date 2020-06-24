import 'dotenv/config';
import cors from 'cors';
import express from 'express';

const app = express();
app.use(cors());

app.disable('x-powered-by');

app.get('/', (req, res) => {
  res.send(`Hello, i'm API`);
});

app.post('/data', (req, res) => {
  res.json({
    project: {
      author: 'Gabriel Rabelo <gabrielrab>',
      github: 'https://github.com/gabrielrab/back-and-client-app',
    },
  });
});

app.listen(process.env.PORT || 3000, () => {
  console.log(`🚀 Server running on port: ${process.env.PORT}`);
});
