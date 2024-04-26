import express from "express";
import { getSearchedMovies } from "../controllers/getSearchedMovies.js";
import { getSingleMovieDetails } from "../controllers/getSingleMovieDetails.js";
// import { getFast } from "../controllers/getFast";


const router = express.Router();


router.get("/searched", getSearchedMovies)
router.get("/single_movie", getSingleMovieDetails)
// router.get("/fast", getFast)


export default router;