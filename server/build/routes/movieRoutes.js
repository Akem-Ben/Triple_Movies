"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const getSearchedMovies_1 = require("../controllers/getSearchedMovies");
const getSingleMovieDetails_1 = require("../controllers/getSingleMovieDetails");
// import { getFast } from "../controllers/getFast";
const router = express_1.default.Router();
router.get("/searched", getSearchedMovies_1.getSearchedMovies);
router.get("/single_movie", getSingleMovieDetails_1.getSingleMovieDetails);
// router.get("/fast", getFast)
exports.default = router;
