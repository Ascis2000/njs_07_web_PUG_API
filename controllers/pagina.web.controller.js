
// const url = `https://www.omdbapi.com/?apikey=${API_KEY}&t=${titulo}`;
// https://www.omdbapi.com/?apikey=${process.env.API_KEY}&s=batman&page=1;

const getHome = (req, res) => {
    try {
        res.status(200).render("init.pug", 
        { 
            page: 'home',
        });
    }
    catch (error) {
        console.log(`ERROR: ${error.stack}`);
        res.status(400).json({msj:`ERROR: ${error.stack}`});
    }
}

const getFilms = async (req, res) => {
    try {

        res.status(404).render("init.pug", {
            page: 'error',
            msj: 'No se ha contemplado este tipo de solicitud',
            films: null
        });
    }
    catch (error) {
        console.log(`ERROR: ${error.stack}`);
        res.status(400).json({msj:`ERROR: ${error.stack}`});
    }
}

const getFilmByTitle = async (req, res) => {

    try {

        let titleFilm = req.params.title;
        doFetchAPI(titleFilm, req, res);

    } catch (error) {
        console.log(`ERROR: ${error.stack}`);
        res.status(400).json({ msj: `ERROR: ${error.stack}` });
    }
}

const postFilmByTitle = async (req, res) => {

    try {
        let titleFilm = req.body.film;
        doFetchAPI(titleFilm, req, res);

    } catch (error) {
        console.log(`ERROR: ${error.stack}`);
        res.status(400).json({ msj: `ERROR: ${error.stack}` });
    }
}

const doFetchAPI = async (film, req, res) => {
    const currentPage = parseInt(req.query.page, 10) || 1; // 1 por defecto

    const API_KEY = process.env.API_KEY;
    let url = `https://www.omdbapi.com/?apikey=${API_KEY}&s=${film}`;
    
    // hacemos la solicitud a la API
    const response = await fetch(url);
    const data = await response.json();

    if (data.Response === "True") {

        const totalResults = parseInt(data.totalResults); // total de resultados
        const resultsPerPage = 10; // peliculas que se muestran por pagina

        // total de páginas de las que habría que hacer paginacion
        const totalPages = Math.ceil(totalResults / resultsPerPage);

        res.status(200).render("init.pug", {
            page: 'film',
            busqueda: film,
            totalPages,
            currentPage,
            films: data.Search
        });
    } else {
        res.status(404).render("init.pug", {
            page: 'error',
            msj: 'No se encontraron resultados para la búsqueda',
            films: null
        });
    }
}

module.exports = {
    getHome,
    getFilms,
    getFilmByTitle,
    postFilmByTitle
}