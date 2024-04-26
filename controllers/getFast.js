// import {Request, Response} from 'express';
// import { fetchSearchedMovies } from '../helpers/helpers';

// export const getFast = async(request:Request, response:Response) => {
//     try{
//         const data = await fetchSearchedMovies("fast")
//         if(!data){
//             return response.status(400).json({
//                 status: `error`,
//                 message: data.message
//             })
//         }
//         return response.status(200).json({
//             status: `success`,
//             message: `Movie successfully fetched`,
//             data
//         })
//     }catch(error:any){
//         console.log(error.message)
//         return response.status(500).json({
//             status: `error`,
//             message: `Internal Server Error`,
//             method: request.method
//         })
//     }
// }