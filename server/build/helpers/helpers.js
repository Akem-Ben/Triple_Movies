"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.fetchSingleMovieDetails = exports.fetchSearchedMovies = void 0;
const axios_1 = __importDefault(require("axios"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const fetchSearchedMovies = async (title, page) => {
    if (!page) {
        page = 1;
    }
    const movies = await axios_1.default.get(`http://www.omdbapi.com/?s=${title}&apikey=${process.env.API_KEY}&page=${page}`);
    return movies.data;
};
exports.fetchSearchedMovies = fetchSearchedMovies;
const fetchSingleMovieDetails = async (imdb_code) => {
    const movies = await axios_1.default.get(`http://www.omdbapi.com/?i=${imdb_code}&apikey=${process.env.API_KEY}`);
    return movies.data;
};
exports.fetchSingleMovieDetails = fetchSingleMovieDetails;
// export const getNextPage = async(name:any, page:any)=>{
//     // let page = 1
//     const movies = await axios.get(`https://www.omdbapi.com/?apikey=[${process.env.API_KEY}]&s=${name}&page=${page += 1}`)
//     return movies.data
// }
// export const getPreviousPage = async(page:any)=>{
//     if(page > 1){
//     const movies = await axios.get(`https://www.omdbapi.com/?apikey=[${process.env.API_KEY}]&s=${name}&page=${page-=1}`)
//     return movies.data
//     }else{
//         null
//     }
// }
// https://www.omdbapi.com/?apikey=[YOUR-KEY]&s=${name}&page=${page}
