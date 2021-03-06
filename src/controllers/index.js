const placesModel = require("../model/terrenos");
const userModel = require("../model/user");
const jwt = require('jsonwebtoken');

//login
const login = async(req, res) => {
    const user = {
        "username": req.body.username,
        "password": req.body.password
    };
    const dbUser = await userModel.findOne({user: user.username, password: user.password});
    if(dbUser){
        const token = jwt.sign({user}, process.env.JWT_KEY);
        res.json({
            token
        });
    }else {
        res.status(401)
        res.send("Login incorrect")
    }
}

//get places
const getPlaces =  (req, res) => {
    placesModel
        .find()
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error}));
};

//create Terreno
const createTerreno = async(req, res) => {
    console.log(req.body)
    const data = {
        'name': req.body.name,
        'area': parseFloat(req.body.area),
        'precio': parseFloat(req.body.precio),
        'contacto': req.body.contacto,
        'geometry': [parseFloat(req.body.longitud),parseFloat(req.body.latitud)]
    }
    console.log(data)
    const terreno = placesModel(data);
    await terreno.save()
    res.send('terreno creado')
}

const apiStatus = (req, res) => {
    res.send('ok')
}
module.exports = {
    getPlaces,
    createTerreno,
    login,
    apiStatus
} 
