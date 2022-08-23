import express from 'express';
import { createServer } from 'http';
import { Server } from "socket.io";
//import { config as DotEnvConfig } from 'dotenv'
/*console.log(process.cwd())
DotEnvConfig({
    path: path.resolve('..')+'/.env'
})
console.log(process.env)*/
const app = express();
const server = createServer(app);
const io = new Server(server);
const port = process.env.PORT || 3000;
//const mongo = new MongoClient('mongodb://stumble:stumbleserver@localhost:27017/stumbleserver')
//mongo.connect()
app.post('/user/login', (req, res) => {
    console.log(res);
    console.log(req);
});
// start the server
app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});
