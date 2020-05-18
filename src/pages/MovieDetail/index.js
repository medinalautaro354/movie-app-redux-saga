import React, {useEffect} from 'react';
import {Container, CircularProgress, Typography } from '@material-ui/core';
import { useDispatch, useSelector} from 'react-redux';
import {getMovieById} from '../../redux/actions/movieActions';
import {movieResult as movieResultSelector} from '../../redux/selectors';

const MovieDetail = ({match}) =>{
    const dispatch = useDispatch();
    const movieResult = useSelector(state => movieResultSelector(state));

    useEffect(() =>{
        const id = match.params.id;

        if(!movieResult || movieResult && movieResult.imdbID !== id){

            dispatch(getMovieById({id}));
        }
    })

    if(!movieResult){
        return <CircularProgress size={50} color='primary' />
    }else{

        return(
            <Container >
                <Typography variant='h3'>{movieResult.Title}</Typography>
                <img src={movieResult.Poster} alt={movieResult.Poster}/>
                <Typography><strong>Actores: </strong>{movieResult.Actors}</Typography>
                <Typography><strong>Director: </strong>{movieResult.Director}</Typography>
                <Typography><strong>Pais: </strong>{movieResult.Country}</Typography>
                <Typography><strong>Clasificacion: </strong>{movieResult.Rated}</Typography>
                <Typography><strong>Premios: </strong>{movieResult.Awards}</Typography>
                <Typography><strong>Sinopsis: </strong>{movieResult.Plot}</Typography>



            </Container>
        );
    }
}

export default MovieDetail;
