import express from 'express';
import cors from 'cors';
import morgan from 'morgan'

const app = express()


//middlewares
app.use(express.json());
app.use(cors());
app.use(morgan('tiny'));

// less hackers know about our stack
app.disable('x-powered-by')

const port = 8000;

// HTTP GET request
app.get('/', (req, res)=>{
    res.status(201).json("Home GET request");
});

// Start server only when we have valid connection


// Start server
app.listen(port, ()=>{
    console.log(`Server is running on http://localhost:${port}`);
})

