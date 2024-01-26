import axios from './axiosSettings';

export const getFastMovies = async(title, page)=>{
  try {
    const response = await axios.get(`movies/searched?title=${title}&page=${page}`);
    return response;
  } catch (err) {
    return err.response;
  }
}

export const getSingleMovieDetails = async(code)=>{
    try {
      const response = await axios.get(`movies/single_movie?code=${code}`);
      return response;
    } catch (err) {
      return err.response;
    }
}