import axios from './axiosSettings';

export const getFastMovies = async(title, page)=>{
  try {
      // const response = await axios.get(`/api/movies/Search/${title}`);
    const response = await axios.get(`/movies/searched?title=${title}&page=${page}`,{
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      }
    });
    return response;
  } catch (err) {
    return err.response;
  }
}

// export const changePage = async(title, page)=>{
  //   try {
    //       const response = await axios.get(`/api/movies/Search/${title}?pageNumber=${page}`);
    //     // const response = await axios.get(`movies/searched?title=${title}&page=${page}`);
    //     return response;
    //   } catch (err) {
      //     return err.response;
      //   }
      // }
      
      export const getSingleMovieDetails = async(code)=>{
        try {
          const response = await axios.get(`/movies/single_movie?code=${code}`);
          return response;
        } catch (err) {
          return err.response;
        }
      }
      // const response = await axios.get(`/api/movies/Search/${title}`);
  // const response = await axios.get(`/api/movies/${code}`)