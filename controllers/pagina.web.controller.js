
const getHome = (req, res) => {
    try {
        res.status(200).render("init.pug", 
        { 
            page: '',
            msj: 'soy la página Home',
        });
    }
    catch (error) {
        console.log(`ERROR: ${error.stack}`);
        res.status(400).json({msj:`ERROR: ${error.stack}`});
    }
}

const getAbout = (req, res) => {
    try {
        res.status(200).render("init.pug", 
        { 
            page: 'about', 
            msj: 'soy la página About'
        });
    }
    catch (error) {
        console.log(`ERROR: ${error.stack}`);
        res.status(400).json({msj:`ERROR: ${error.stack}`});
    }
}

const getLocation = (req, res) => {
    try {
        res.status(200).render("init.pug", 
        { 
            page: 'location', 
            msj: 'soy la página Location'
        });
    }
    catch (error) {
        console.log(`ERROR: ${error.stack}`);
        res.status(400).json({msj:`ERROR: ${error.stack}`});
    }
}

const getMission = (req, res) => {
    try {
        res.status(200).render("init.pug", 
        { 
            page: 'mission', 
            msj: 'soy la página Mission'
        });
    }
    catch (error) {
        console.log(`ERROR: ${error.stack}`);
        res.status(400).json({msj:`ERROR: ${error.stack}`});
    }
}

const getContact = (req, res) => {
    try {
        res.status(200).render("init.pug", 
        { 
            page: 'contact', 
            msj: 'soy la página Contact'
        });
    }
    catch (error) {
        console.log(`ERROR: ${error.stack}`);
        res.status(400).json({msj:`ERROR: ${error.stack}`});
    }
}

module.exports = {
    getHome,
    getAbout,
    getLocation,
    getMission,
    getContact
}