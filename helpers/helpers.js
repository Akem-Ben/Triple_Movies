import axios from 'axios';
import dotenv from 'dotenv';

dotenv.config()

export const fetchSearchedMovies = async (title, page) =>{
    if(!page){
        page = 1
    }
    const movies = await axios.get(`http://www.omdbapi.com/?s=${title}&apikey=d77386b0&page=${page}`)
    return movies.data
}

export const fetchSingleMovieDetails = async(imdb_code)=>{
    const movies = await axios.get(`http://www.omdbapi.com/?i=${imdb_code}&apikey=d77386b0`)
    return movies.data
}

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