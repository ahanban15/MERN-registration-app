import express from 'express';
import cors from 'cors';
import morgan from 'morgan'
import connect from './database/conn.js';
import router from './router/route.js'

const app = express()

//middlewares
app.use(express.json());
app.use(cors());
app.use(morgan('tiny'));

// less hackers know about our stack
app.disable('x-powered-by')

const port = 8080;

// HTTP GET request
app.get('/', (req, res)=>{
    res.status(201).json("Home GET request");
});

// API Routes
app.use('/api', router);

// Start server only when we have valid connection
connect().then(()=>{
    try{
        app.listen(port, ()=>{
            console.log(`Server is running on http://localhost:${port}`);
        })
    }catch(error){
        console.log("Cannot connect to database...!");
    }
}).catch(error =>{
    console.log("Invalid database connection...!");
})



