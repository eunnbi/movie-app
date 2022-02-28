import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import MoviesTitle from "../components/MoviesTitle";
import MovieList from "../components/MovieList";
import Pagination from "../components/Pagination";
import { moviesContext } from "../contexts/movies";
import { useScroll } from "../hooks";
import styled from "styled-components";



const MoviesMain = styled.main`
    width: 90vw;
    max-width: 1170px;
    margin: 110px auto;
    padding: 3rem 0;
`;

const Movies = () => {
    const { type } = useParams();
    const { movies } = useContext(moviesContext);
    const data = movies[type];
    const [page, setPage] = useState(1);
    const limit = 12;
    const offset = (page - 1) * limit;
    useScroll([page]);

    return (
        <MoviesMain className="movies__main">
            {type && 
                <MoviesTitle type={type}/>
            }
            {data &&
                <>
                    <MovieList movies={data.slice(offset, offset + limit)}/>
                    <Pagination total={data.length} limit={limit} page={page} setPage={setPage}/>
                </>
            }
        </MoviesMain>
    );
}

export default Movies;