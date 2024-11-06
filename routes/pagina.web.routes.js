
const paginaController = require('../controllers/pagina.web.controller');
const router = require('express').Router();

// GET http://localhost:3000/
router.get("/", paginaController.getHome);

// GET http://localhost:3000/film
router.get("/film", paginaController.getFilms);

// GET http://localhost:3000/film/batman
router.get("/film/:title", paginaController.getFilmByTitle);

// GET http://localhost:3000/film
router.post("/film", paginaController.postFilmByTitle);

module.exports = router;