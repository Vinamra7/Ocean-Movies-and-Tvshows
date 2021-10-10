import React, { useState, useEffect } from 'react'
import axios from './../axios'
import requests from '../request';
import { Link } from 'react-router-dom'
import './banner.css'
function Banner() {
    const [movie, setMovie] = useState([]);
    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(requests.fetchTopRated);
            const ree = Math.floor((Math.random() * request.data.results.length) - 1);
            if (ree === request.data.results.length)
                ree = ree - 1;
            setMovie(
                request.data.results[
                ree
                ]
            );
            return requests;
        }
        fetchData();
    }, []);
    function trunate(str, n) {
        return str?.length > n ? str.substr(0, n - 1) + "..." : str;
    }
    return (
        <header className="banner" style={{
            backgroundSize: "cover",
            backgroundImage: `url("https://images.tmdb.org/t/p/w1280/${movie?.backdrop_path}")`,
            backgroundPosition: "center center",
        }}>
            <div className="banner_cont" >
                <h1 className="banner_title colo">
                    {movie?.title || movie?.name || movie?.original_name}
                </h1>
                <div className="banner_buttons">
                    <Link to={`/Movie/${movie?.id}`}>
                        <button type="button" className="btn btn-dark banner_button">Visit</button>
                    </Link>
                </div>
                <h1 className="banner_dis">
                    {trunate(movie?.overview, 150)}
                </h1>
            </div>

            <div className="bottom" />
        </header>
    )
}

export default Banner
