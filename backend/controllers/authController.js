const authService = require('../services/authService')
const loginUser = async (req, res) => {
    try {
        
    } catch (error) {
        return res.status(400).json({error: error.message})
    }
}

const signupUser = async (req, res) => {
    try {
        const { username, email, password } = req.body;
        const result = await authService.signup(username, email, password)
        return res.status(200).json({message: result.username + " account created"})
    } catch (error) {
        return res.status(400).json({error: error.message})
    }
}

module.exports = { loginUser, signupUser };