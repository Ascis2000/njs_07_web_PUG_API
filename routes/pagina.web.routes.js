
const paginaController = require('../controllers/pagina.web.controller');
const router = require('express').Router();

// GET http://localhost:3000/
router.get("/", paginaController.getHome);

// GET http://localhost:3000/about
router.get("/about", paginaController.getAbout);

// GET http://localhost:3000/location
router.get("/location", paginaController.getLocation);

// GET http://localhost:3000/location
router.get("/mission", paginaController.getMission);

// GET http://localhost:3000/location
router.get("/contact", paginaController.getContact);

module.exports = router;