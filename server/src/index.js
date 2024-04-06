import express from 'express';
import axios from 'axios'
import router from './Routes/weatherRoutes.js';

const app = express();

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', 'http://localhost:3000');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
});

app.get('/', (req, res)=>{
    res.send("Hello World");   
});

app.use('/api/weather', router);

app.use((req, res, next) => {
    console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
    next();
});

app.listen(4000, ()=>{
    console.log("Server running on port", 4000)
})