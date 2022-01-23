import express, { json } from 'express';
import cors from 'cors'

const app = express();

app.use(json());
app.use(cors())

const users = [];
const tweets = [];

function lastTenTweets(n){
  let list = [];

  for (let i = 0; i < n; i++) {
    if(i > tweets.length -1){
      return list
    }
    let userTweet = {
      "username": tweets[tweets.length -1 -i].username,
      "avatar": users.find(e => e.username === tweets[tweets.length -1 -i].username).avatar,
      "tweet": tweets[tweets.length -1 -i].tweet
    }
    list.push(userTweet)
  }
  return list
}

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

app.get("/tweets", (req, res) => {
  res.send(lastTenTweets(10));
})

app.listen(5000, () => {
    console.log ('Running app in http://localhost:5000')
}); 