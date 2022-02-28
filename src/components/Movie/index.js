import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import LikeHeart from "./LikeHeart";
import MoviePoster from "./MoviePoster";
import MovieInfo from "./MovieInfo";
import { favoritesStateContext } from "../../contexts/favorites";
import { useLike } from "../../hooks/useLike";
import styled from "styled-components";

const MovieLink = styled(Link)`
    display: block;
    position: relative;
    overflow: hidden;
    &:hover .MovieInfo {
        visibility: visible;
        transform: translateY(0);
    }
`;

const Movie = ({movie}) => {
    const { title, original_title : originalTitle, poster_path : poster, id, vote_average: rating} = movie;
    const favoriteMovies = useContext(favoritesStateContext);
    const { like, setLike, onLike } = useLike(false, movie);

    useEffect(() => {
        favoriteMovies.forEach(movie => movie.id === id && setLike(true));
    }, []);
    return (
        <li className="Movie">
            <MovieLink to={`/movie/${id}`}>
                <LikeHeart like={like} onLike={onLike}/>
                <MoviePoster poster={poster}/>
                <MovieInfo title={title} originalTitle={originalTitle} year={parseInt(movie.release_date)} rating={rating}/>
            </MovieLink>
        </li>
    );
}

export default Movie;