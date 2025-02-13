import axios from "axios";

// Base da url https://api.themoviedb.org/3/
// Url da API /movie/now_playing?api_key=077d9d68010148f611e664bfee144bfe&language=pt-BR

const api = axios.create({
    baseURL: 'https://api.themoviedb.org/3/'
})

export default api;