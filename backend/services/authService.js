const { json } = require('express');
const User = require('../models/user');
const bcrypt = require('bcrypt');


const login = async (credentials, password) =>{
    const exist = await User.findOne({$or : [{email: credentials}, {username: credentials}]})
    if (!exist){
        throw new Error('User not found')
    }
    if (exist){
        const verify = await bcrypt.compare(password, exist.password)

        if (!verify) {
            throw new Error("Invalid Credentials");
        }
        
        return exist
    }

    return exist;
    
}
const signup = async (username, email, password) => {
    const exist = await User.findOne({$or : [{email: email}, {username: username}]})
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