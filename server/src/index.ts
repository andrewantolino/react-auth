import express from 'express';
import cors from 'cors';

const app = express();
const port = process.env.PORT || 8080;

app.use(cors());

app.use('/login', (req, res) => {
  res.send({
    token: 'test123',
  });
});

app.listen(port, () => {
  console.log(`API server listening on ${port}`);
});
