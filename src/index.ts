import express, {Express, Request, Response} from 'express';
import dotenv from 'dotenv';
dotenv.config();

const app:Express = express();
const PORT = process.env.SERVERPORT;

app.get('/', (req:Request, res:Response)=>{
    res.send('Hi there from Server!')
})

app.listen(PORT, ()=>console.log(`⚡️[server]: Server is running at https://localhost:${PORT}` ))