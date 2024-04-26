import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";
import logger from "morgan";
import bodyParser from "body-parser";
import movieRouter from './routes/movieRoutes.js'

const app = express();

dotenv.config();

app.use(bodyParser.json());
dotenv.config();
app.use(bodyParser.json());

const corsOptions = {
  origin: 'https://main--triple-movies.netlify.app/'
};

app.use(cors(corsOptions));

app.use(logger("dev"));
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

app.use("/movies", movieRouter)


app.listen(process.env.PORT, () => {
  console.log(`server running on ${process.env.PORT}`);
});

export default app;
