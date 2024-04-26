import { fetchSearchedMovies } from '../helpers/helpers.js';

export const getSearchedMovies = async(request, response) => {
    try{
        const { title, page } = request.query;
        let data;
        if(page){
           data = await fetchSearchedMovies(title, page)
        }else{
           data = await fetchSearchedMovies(title)
        }
        if(!data){
            return response.status(400).json({
                status: `error`,
                message: data.message
            })
        }
        return response.status(200).json({
            status: `success`,
            message: `Movie successfully fetched`,
            data
        })
    }catch(error){
        console.log(error.message)
        return response.status(500).json({
            status: `error`,
            message: `Internal Server Error`,
            method: request.method
        })
    }
}