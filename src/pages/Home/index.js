import React from 'react';
import {Container} from '@material-ui/core';
import SearchCard from '../../components/Card';

const Home = ()=>{
    return(
        <Container>
            <SearchCard
                title='Bienvenido'
                labelInput='Pelicula a buscar.'
            />
        </Container>
    )
}

export default Home;