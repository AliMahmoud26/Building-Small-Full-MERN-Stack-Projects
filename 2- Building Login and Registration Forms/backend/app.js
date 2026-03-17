import express from 'express';
import dotenv from 'dotenv';

const app = express();

app.get('/', (req, res) => {
    res.send("This is the Home Page");
});

const port = process.env.PORT || 5000;

app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});