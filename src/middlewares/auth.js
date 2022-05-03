const user = 'Camila';
const pass = '123'
const auth = (req,res, next) => {
    U
    if (req.header('username') != user || req.header('password') != pass){
        return res.status(401).send()
    }else {
        return res. status(403).send()
    }

}
module.exports = auth;