import React, { useState, useEffect } from 'react'
import axios from './../axios'
import './open.css'
import YouTube from 'react-youtube';

function Opent({ match }) {
    const url2 = `tv/${match.params.id}?api_key=17c423324c9d705b0a6f986149de595d&language=en-US`;
    const base_url = "https://images.tmdb.org/t/p/w200/";
    const t1 = `tv/${match.params.id}/videos?api_key=17c423324c9d705b0a6f986149de595d&language=en-US`;
    const [ttv, sttv] = useState("");
    const [play, setPlay] = useState(false);
    const [tv, setTV] = useState({});
    useEffect(() => {

        async function fetchData() {
            const request = await axios.get(url2);
            setTV(request.data);
            return request;
        }
        fetchData();
    }, [url2]);
    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(t1);
            if (request.data.results[request.data.results.length - 1] === undefined) { }
            else { sttv(request.data.results[request.data.results.length - 1].key); }
            console.log(request.data);
            return request;
        }
        fetchData();
    }, [t1]);
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
                backgroundImage: `url("https://images.tmdb.org/t/p/w1280/${tv?.backdrop_path}")`,
                backgroundPosition: "center",
            }}>
                <img
                    className="poster"
                    src={`${base_url}${tv?.poster_path}`}
                    key={tv.id}
                />
                <div className="info_cont" >
                    <h1 className="info_title">
                        {tv?.name || tv?.original_name}
                    </h1>
                    <div className="rat">
                        <div className=" headline rr">Ratings:</div>
                        <div className=" headline rv">{tv?.vote_average}</div>
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
                {play && <YouTube className="yt" videoId={ttv} opts={optss} />}
            </header>
            <h1 className="des">Description</h1>
            <h1 className=" headline">
                {trunate(tv?.overview, 350)}
            </h1>
        </div>
    )
}

export default Opent
