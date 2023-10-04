const bcrypt = require('bcrypt')

const hashPass = async (password) =>{
    try {
        const hashPassword = await bcrypt.hash(password, 10);
        return hashPassword;
    } catch (error) {
        console.log(error)
    }
};

const compararPassword = async (password, hashPassword) =>{
    return bcrypt.compare(password, hashPassword);
};

module.exports = {
    compararPassword,
    hashPass
};