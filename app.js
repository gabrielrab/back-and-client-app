import 'dotenv/config';
import cors from 'cors';
import express from 'express';
import path from 'path';

const app = express();
app.use(cors());

app.disable('x-powered-by');

app.get('/api/hello', (req, res) => {
  res.send(`Hello, i'm API`);
});

app.post('/api/data', (req, res) => {
  res.json({
    project: {
      author: 'Gabriel Rabelo <gabrielrab>',
      github: 'https://github.com/gabrielrab/back-and-client-app',
    },
  });
});

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, 'client/build')));

  app.get('*', function (req, res) {
    res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
  });
}

app.listen(process.env.PORT || 3000, () => {
  console.log(`🚀 Server running on port: ${process.env.PORT}`);
});
