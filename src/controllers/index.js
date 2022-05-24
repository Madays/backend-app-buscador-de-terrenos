const placesModel = require("../model/terrenos")
const jwt = require('jsonwebtoken');

//login
// const login = (req, res) => {
//     const user = {
//         "email": req.body.email,
//         "password": req.body.password
//     };
//     if(user.email && user.password){
//         const token = jwt.sign({user}, process.env.JWT_KEY);
//         res.json({
//             token
//         });
//     }else {
//         res.send("Login incorrect")
//     }
// }

//get favs
const getPlaces =  (req, res) => {
    placesModel
        .find()
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error}));
};



module.exports = {
    getPlaces
} 
