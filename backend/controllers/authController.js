const authService = require("../services/authService");
const jwt = require("jsonwebtoken");

const createToken = (_id) => {
  return jwt.sign({ _id }, process.env.SECRET_KEY, { expiresIn: "3d" });
};
const loginUser = async (req, res) => {
  try {
    const { credentials, password } = req.body;
    const result = await authService.login(credentials, password);
    if (result) {
      const token = createToken(result._id);
      return res.status(200).json({
        message: result.username + " login successfully",
        token,
        result: {
          _id: result._id,
          username: result.username,
          email: result.email,
        },
      });
    }
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
};

const signupUser = async (req, res) => {
  try {
    const { username, email, password } = req.body;
    const result = await authService.signup(username, email, password);
    const token = createToken(result._id);
    return res
      .status(200)
      .json({ message: result.username + " account created", token, result });
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
};

module.exports = { loginUser, signupUser };
