require('dotenv').config();

const mongoose = require('mongoose');
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT;

mongoose.set("strictQuery", false);
app.use(bodyParser.urlencoded({ extended: true }));

const authMiddleware = require('./middlewares/authMiddleware');
const cors = require('./middlewares/cors');

const appRouter = require('./routes/AppRouter');
const authRouter = require('./routes/AuthRouter');

app.use(cors);
app.use(express.json());



app.use('/api', authMiddleware.verifyToken, appRouter);
app.use('/auth', authRouter);

async function main() {
    try {
        await mongoose.connect(process.env.DB_CONNECTION, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });

        app.listen(port, () => {
            console.log(`Server has been started on port ${port}`);
        });
    } catch (err) {
        console.log(err);
    }
}

main();