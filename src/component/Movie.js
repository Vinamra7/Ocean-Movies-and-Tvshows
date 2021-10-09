import React, { useState, useEffect } from 'react'
import axios from './../axios'
import './movie.css'
import { Link } from 'react-router-dom'
const url1 = "/discover/movie?api_key=17c423324c9d705b0a6f986149de595d&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate";
const url2 = "https://api.themoviedb.org/3/discover/movie?api_key=17c423324c9d705b0a6f986149de595d&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=2&with_watch_monetization_types=flatrate"
const url3 = "https://api.themoviedb.org/3/discover/movie?api_key=17c423324c9d705b0a6f986149de595d&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=3&with_watch_monetization_types=flatrate"
const url4 = "https://api.themoviedb.org/3/discover/movie?api_key=17c423324c9d705b0a6f986149de595d&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=4&with_watch_monetization_types=flatrate"

const base_url = "https://images.tmdb.org/t/p/original/";
function Movie() {
    const [movies, setMovies] = useState([]);
    const [movies2, setMovies2] = useState([]);
    const [movies3, setMovies3] = useState([]);
    const [movies4, setMovies4] = useState([]);
    useEffect(() => {
        async function fetchData() {
            const req = await axios.get(url1);
            //console.log(req.data.results);
            setMovies(req.data.results);
            return req;
        }
        fetchData();
    }, [url1]);
    useEffect(() => {
        async function fetchData() {
            const req = await axios.get(url2);
            //console.log(req.data.results);
            setMovies2(req.data.results);
            return req;
        }
        fetchData();
    }, [url2]);
    useEffect(() => {
        async function fetchData() {
            const req = await axios.get(url3);
            //console.log(req.data.results);
            setMovies3(req.data.results);
            return req;
        }
        fetchData();
    }, [url3]);
    useEffect(() => {
        async function fetchData() {
            const req = await axios.get(url4);
            //console.log(req.data.results);
            setMovies4(req.data.results);
            return req;
        }
        fetchData();
    }, [url4]);
    return (
        <>
            <div className="roww">
                <h3 className="coloo">Top Movies</h3>
                <div className="row_posterss">
                    {movies.map(movie => (
                        <Link to={`/Movie/${movie.id}`} className="row_posterr">
                            < img className="dd"
                                key={movie.id}
                                src={`${base_url}${movie.poster_path}`} alt={movie.name}
                            />
                        </Link>
                    ))}
                    {movies2.map(movie => (
                        <Link to={`/Movie/${movie.id}`} className="row_posterr">
                            < img className="dd"
                                key={movie.id}
                                src={`${base_url}${movie.poster_path}`} alt={movie.name}
                            />
                        </Link>
                    ))}
                    {movies3.map(movie => (
                        <Link to={`/Movie/${movie.id}`} className="row_posterr">
                            < img className="dd"
                                key={movie.id}
                                src={`${base_url}${movie.poster_path}`} alt={movie.name}
                            />
                        </Link>
                    ))}
                    {movies4.map(movie => (
                        <Link to={`/Movie/${movie.id}`} className="row_posterr">
                            < img className="dd"
                                key={movie.id}
                                src={`${base_url}${movie.poster_path}`} alt={movie.name}
                            />
                        </Link>
                    ))}
                </div>
            </div>
        </>
    )
}

export default Movie
