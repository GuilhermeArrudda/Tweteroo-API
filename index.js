import express from 'express';

const app = express();

app.get("/test", (req, res) => {
  res.send('test');
});

app.listen(5000); 