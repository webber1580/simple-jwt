require('dotenv').config();
const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');

const PORT = process.env.PORT ?? 5001;
const app = express();

const start = () => {
    try {
        app.listen(PORT, () => console.log(`Server has started on PORT = ${PORT}`))
    } catch (e) {
        console.log(e);
    }
}

start();
