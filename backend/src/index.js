import express, { json } from 'express';
import cors from 'cors'

const app = express();

app.use(json());
app.use(cors())

const users = [];

const tweets = [];

app.get("/test", (req, res) => {
  res.send(users);
});

app.post("/sign-up", (req, res) => {
    const user = req.body;
    users.push(user)
  
    res.send("Ok");
});

app.post("/tweets", (req, res) => {
  const userTweet = req.body;
  tweets.push(userTweet)

  res.send("OK");
});

app.listen(5000, () => {
    console.log ('Running app in http://localhost:5000')
}); 