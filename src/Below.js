import React from 'react'
import './App.css';
import Row from './Row';
import requests from './request';
import Banner from './component/Banner'
function Below() {
    return (
        <div>
            <Banner />
            <Row title="Netflix Originals" fetchUrl={requests.fetchNetflixOriginals} net="true" />
            <Row title="Trending" fetchUrl={requests.fetchTrending} />
            <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
            <Row title="Action" fetchUrl={requests.fetchActionMovies} />
            <Row title="Horror" fetchUrl={requests.fetchHorrorMovies} />
            <Row title="Comedy" fetchUrl={requests.fetchComedyMovies} />
            <Row title="Romance" fetchUrl={requests.fetchRomanceMovies} />
        </div>
    )
}

export default Below
