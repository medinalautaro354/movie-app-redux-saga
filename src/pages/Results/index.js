import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import queryString from "query-string";
import { Container, CircularProgress } from "@material-ui/core";

import { getMoviesByName } from "../../redux/actions/movieActions";
import { movieResults, isSearchLoading } from "../../redux/selectors";

import CardResult from "../../components/CardResult/index";

const Result = ({ location }) => {
  const dispatch = useDispatch();
  const movies = useSelector((state) => movieResults(state));
  const isLoading = useSelector((state) => isSearchLoading(state));
  const [isLooked, setIsLooked] = useState(false);

  useEffect(() => {
    const { movieName } = queryString.parse(location.search);
    if (movieName && !isLooked) {
      setIsLooked(true);
      dispatch(getMoviesByName({ movieName }));
    }
  });

  const renderMovies = () => {
    if (movies) {
      return movies.map((value, index) => (
        <CardResult key={index} {...value} />
      ));
    } else if (isLoading) {
      return <CircularProgress size={100} color="primary" />;
    } else {
      return <div></div>;
    }
  };

  return <Container>{renderMovies()}</Container>;
};

export default Result;
