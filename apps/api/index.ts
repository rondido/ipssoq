import express from 'express';
import cors from 'cors';

const app = express();
app.use(cors());

app.get('/user', (req, res) => {
  const user = {
    id: '1',
    username: 'admin',
    email: 'admin@example.com',
  };
  res.json(user);
});

app.listen(3001, () => console.log('API running on port 3001'));
