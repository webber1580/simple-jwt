import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';

dotenv.config();
const PORT = process.env.PORT ?? 5001;

const app: Express = express();
app.get('/', (req: Request, res: Response) => {
    res.send('Hello World!');
});

const start = () => {
    try {
        app.listen(PORT, () => console.log(`Server has started on PORT = ${PORT}`));
    } catch (e) {
        console.log(e);
    }
};

start();
