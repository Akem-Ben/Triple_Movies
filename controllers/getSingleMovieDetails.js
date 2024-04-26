import { fetchSingleMovieDetails } from '../helpers/helpers.js';

export const getSingleMovieDetails = async(request, response) => {
    try{
        const {code} = request.query
        const data = await fetchSingleMovieDetails(code)
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