import axios from './axiosSettings';

export const getFastMovies = async(title, page)=>{
  try {
    const response = await axios.get(`movies/searched?title=${title}&page=${page}`);
    return response;
  } catch (err) {
    return err.response;
  }
}

export const getToNextPage = async(name)=>{
    try {
      const response = await axios.get("movies/next_page", name);
      return response;
    } catch (err) {
      return err.response;
    }
}