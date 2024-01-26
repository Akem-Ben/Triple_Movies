"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getSearchedMovies = void 0;
const helpers_1 = require("../helpers/helpers");
const getSearchedMovies = async (request, response) => {
    try {
        const { title, page } = request.query;
        let data;
        if (page) {
            data = await (0, helpers_1.fetchSearchedMovies)(title, page);
        }
        else {
            data = await (0, helpers_1.fetchSearchedMovies)(title);
        }
        if (!data) {
            return response.status(400).json({
                status: `error`,
                message: data.message
            });
        }
        return response.status(200).json({
            status: `success`,
            message: `Movie successfully fetched`,
            data
        });
    }
    catch (error) {
        console.log(error.message);
        return response.status(500).json({
            status: `error`,
            message: `Internal Server Error`,
            method: request.method
        });
    }
};
exports.getSearchedMovies = getSearchedMovies;
