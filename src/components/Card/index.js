import React, { useState } from "react";
import {Card, Grid, Typography,Container, TextField, Button } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import MovieIcon from '@material-ui/icons/Movie';
import history from '../../history';

import styles from "../../pages/Home/style";
import { Link } from "react-router-dom";

const SearchCard = (props) => {
  const [searchText, setSearchText] = useState("");
  const classes = styles();
  const handleSetSearchText = (e) => {
    setSearchText(e.target.value);
  };

  return (
    <Container className={classes.container}>
      <Card className={classes.cardContainer}>
        <Grid container className={classes.titleGridContainer}>
          <Grid>
            <Typography className={classes.title}>{props.title}</Typography>
          </Grid>
          <Grid>
            <MovieIcon className={classes.movieIcon}/>
          </Grid>
        </Grid>
        <TextField 
          className={classes.textFieldSearch}
          value={searchText}
          placeholder={props.labelInput}
          onChange={handleSetSearchText}
        />
        <Grid className={classes.buttonsContainer}>
          <Button variant='contained' color='primary' size='large'  className={classes.searchButton}
          component={Link}
          to={`/results?movieName=${searchText}`}
          >Buscar</Button>
        </Grid>
      </Card>
    </Container>
  );
};

export default SearchCard;
