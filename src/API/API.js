import axios from "axios";


axios.defaults.baseURL = `https://api.themoviedb.org/3`;
axios.defaults.params = {
  api_key: `703a3fe5b183eb2cb4ee32aa4163bb8d`,
  include_adult: false,
};

export async function getPopularMovies(page = 1) {   
  const response = await axios.get("/trending/movie/day", {params: {page}});
    return response.data;
};

