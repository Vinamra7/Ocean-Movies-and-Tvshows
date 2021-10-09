import React, { useState, useEffect } from 'react'
import axios from './../axios'
import './open.css'
import YouTube from 'react-youtube';

function Open({ match }) {
    const url1 = `movie/${match.params.id}?api_key=17c423324c9d705b0a6f986149de595d&language=en-US`;
    const base_url = "https://images.tmdb.org/t/p/original/";
    const m1 = `movie/${match.params.id}/videos?api_key=17c423324c9d705b0a6f986149de595d&language=en-US`;
    const [movie, setMovie] = useState({});
    const [trailer, setTrailer] = useState("");
    const [play, setPlay] = useState(false);
    useEffect(() => {

        async function fetchData() {
            const request = await axios.get(url1);
            setMovie(request.data);
            return request;
        }
        fetchData();
    }, [url1]);
    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(m1);
            if (request.data.results[request.data.results.length - 1] === undefined) { }
            else { setTrailer(request.data.results[request.data.results.length - 1].key) };
            console.log(request.data);
            return request;
        }
        fetchData();
    }, [m1]);

    function trunate(str, n) {
        return str?.length > n ? str.substr(0, n - 1) + "..." : str;
    }
    const optss = {
        height: "300px",
        width: "500px",
        marginLeft: "63%",
        marginTop: "-40%",
        playerVars: {
            autoplay: 1,
        }
    }

    return (
        <div>
            <header className="poster_back" style={{
                backgroundSize: "cover",
                backgroundImage: `url("https://images.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
                backgroundPosition: "center",
            }}>
                <img
                    className="poster"
                    src={`${base_url}${movie?.poster_path}`}
                    key={movie.id}
                />
                <div className="info_cont" >
                    <h1 className="info_title">
                        {movie?.name || movie?.original_name || movie?.original_title}
                    </h1>
                    <div className="rat">
                        <div className=" headline rr">Ratings:</div>
                        <div className=" headline rv">{movie?.vote_average}</div>
                    </div>
                    <div className="info_buttons">
                        <button type="button" onClick={() => {
                            if (play === false)
                                setPlay(true);
                            else
                                setPlay(false);
                        }}
                            className="btn btn-dark info_button">play</button>
                    </div>
                </div>
                <div className="bottomm"></div>
                {play && <YouTube className="yt" videoId={trailer} opts={optss} />}
            </header>
            <h1 className="des">Description</h1>
            <h1 className=" headline">
                {trunate(movie?.overview, 350)}
            </h1>


        </div>
    )
}

export default Open
