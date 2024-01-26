import express from "express";
import { getSearchedMovies } from "../controllers/getSearchedMovies";
import { getSingleMovieDetails } from "../controllers/getSingleMovieDetails";
// import { getFast } from "../controllers/getFast";


const router = express.Router();


router.get("/searched", getSearchedMovies)
router.get("/single_movie", getSingleMovieDetails)
// router.get("/fast", getFast)


export default router;