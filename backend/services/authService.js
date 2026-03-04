const { json } = require('express');
const User = require('../models/user');
const bcrypt = require('bcrypt');


const login = async () =>{
    
}
const signup = async (username, email, password) => {
    const exist = await User.findOne({ email }) || await User.findOne({ username });
    if (exist) {
        throw new Error("Account already exists")
    }
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(password, salt);

    const user = await User.create({ username, email, password: hash });
    return user;
}

module.exports = {
    signup,
    login
}