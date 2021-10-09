import React, { useState, useEffect } from 'react'
import axios from './axios'
import "./rrow.css"
import { Link } from 'react-router-dom'
const base_url = "https://images.tmdb.org/t/p/original/";


function Row(props) {
    const [movies, setMovies] = useState([]);
    useEffect(() => {
        async function fetchData() {
            const req = await axios.get(props.fetchUrl);
            //console.log(req.data.results);
            setMovies(req.data.results);
            return req;
        }
        fetchData();
    }, [props.fetchUrl]);
    //console.log(movies);
    function mt(res) {
        if (res.media_type === "tv") {
            return "/Tvshow/"
        }
        else {
            if (props.net === "true")
                return "/Tvshow/"
            else
                return "/Movie/"
        }
    }

    return (
        <>
            <div className="row">
                <h3 className="colo">{props.title}</h3>
                <div className="row_posters">
                    {movies.map(movie => (
                        <Link to={`${mt(movie)}${movie.id}`} className="row_poster">
                            < img className="dd"
                                key={movie.id}
                                src={`${base_url}${movie.poster_path}`} alt={movie.name}
                            />
                        </Link>
                    ))
                    }
                </div>
            </div>
        </>
    )
}

export default Row
/*
<Link className="row_poster" to="/Open" style={{

}}

*/