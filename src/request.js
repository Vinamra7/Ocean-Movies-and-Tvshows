const API = "17c423324c9d705b0a6f986149de595d";

const requests = {

    fetchTrending: "/trending/all/week?api_key=" + API + "&language=en-US&include_adult=false",
    fetchNetflixOriginals: "/discover/tv?api_key=" + API + "&with_network=213&include_adult=false",
    fetchTopRated: "/movie/top_rated?api_key=" + API + "&language=en-US&include_adult=false",
    fetchActionMovies: "/discover/movie?api_key=" + API + "&with_genres=28&include_adult=false",
    fetchComedyMovies: "/discover/movie?api_key=" + API + "&with_genres=35&include_adult=false",
    fetchHorrorMovies: "/discover/movie?api_key=" + API + "&with_genres=27&include_adult=false",
    fetchDocumentaries: "/discover/movie?api_key=" + API + "&include_adult=false&with_genres=99",
    fetchRomanceMovies: "/discover/movie?api_key=" + API + "&with_genres=10749&include_adult=false",
}
export default requests;

//https://api.themoviedb.org/3/trending/all/week?api_key=17c423324c9d705b0a6f986149de595d&language=en-US&include_adult=false
//https://api.themoviedb.org/3//discover/movie?api_key=17c423324c9d705b0a6f986149de595d&language=en-US&include_adult=false