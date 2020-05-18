import {GET_MOVIES_BY_NAME, GET_MOVIE_BY_ID} from './types';

export const getMoviesByName = (payload) =>({
    type:GET_MOVIES_BY_NAME,
    payload
});

export const getMovieById = (payload) =>({
    type:GET_MOVIE_BY_ID,
    payload
});
