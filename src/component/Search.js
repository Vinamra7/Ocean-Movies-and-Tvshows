import React, { useState, useEffect } from 'react'
import './search.css'
import axios from './../axios'
import { Link } from 'react-router-dom'
function Search({ match }) {

    var aa = match.params.key;
    const keyword = aa.replace(/[ ,]+/g, "%20");
    const url = `search/multi?api_key=17c423324c9d705b0a6f986149de595d&language=en-US&query=${keyword}&page=1&include_adult=false`;
    const [search, setSearch] = useState([]);
    const base_url = "https://images.tmdb.org/t/p/original/";
    useEffect(() => {
        async function fetchData() {
            const req = await axios.get(url);
            //console.log(req.data.results);
            setSearch(req.data.results);
            return req;
        }
        fetchData();
    }, [url]);

    function mt(res) {
        if (res.media_type === "movie")
            return "/Movie/"
        else
            return "/Tvshow/"
    }

    return (
        <div>
            <h2 className="he">{`Top results Matching ${aa}`}</h2>
            <div className="mainro">
                {search.map(res => (
                    <div className="rowws" key={res.id}>
                        <Link to={`${mt(res)}${res.id}`} style={{ textDecoration: 'none' }} >
                            <img className="pos"
                                key={res.id}
                                src={`${base_url}${res.poster_path}`} alt={res.name} />
                            <h3 key={res.id} className="titl">{res.title || res.name || res.original_name}</h3>
                            <h5 key={res.id} className="date">Release date: {res.release_date || res.first_air_date}</h5>
                            <h4 className="over">{res.overview}</h4>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Search
