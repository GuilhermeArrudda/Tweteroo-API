import express, { json } from 'express';
import cors from 'cors'

const app = express();

app.use(json());
app.use(cors())

const users = []

app.get("/test", (req, res) => {
  res.send(users);
});

app.post("/sign-up", (req, res) => {
    const user = req.body;
    users.push(user)
  
    res.send("Ok");
});

app.listen(5000, () => {
    console.log ('Running app in http://localhost:5000')
}); 