import {GET_MOVIES_BY_NAME, GET_MOVIE_BY_ID, GET_MOVIE_ERROR, GET_MOVIE_COMPLETE, GET_MOVIE_BY_ID_ERROR, GET_MOVIE_BY_ID_COMPLETE} from '../actions/types';
import {get} from 'lodash';

const initialState ={};

export default function(state = initialState, action){
    switch(action.type){
        case GET_MOVIES_BY_NAME:{
            return {...state, isLoading: true};
        }

        case GET_MOVIE_BY_ID :{
            return {...state, isLoading: true, movieResult: null};
        }

        case GET_MOVIE_BY_ID_ERROR :{
            return {...state, isLoading: false, movieResult: null};
        }
        case GET_MOVIE_BY_ID_COMPLETE :{
            return {...state, isLoading: false, movieResult: action.movie.data};
        }

        case GET_MOVIE_ERROR:{
            return {...state, isLoading: false, movies:null};
        }

        case GET_MOVIE_COMPLETE:{
            return {...state, isLoading: false, movieResults: action.results.data};
        }

        default:
            return {...state};

    }
}