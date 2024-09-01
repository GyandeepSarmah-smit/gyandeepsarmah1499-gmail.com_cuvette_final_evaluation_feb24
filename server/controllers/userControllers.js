const User = require('./../models/user');
const generateToken = require('./../utils/generateToken');
const tokenExpiry = require('./../utils/tokenExpiry');

const userForm = async(req,res,next,toRegister,msg) => {
    const {name: userName,password,email} = req.body;
    console.log(toRegister)
    try {
        const user = toRegister ? await User.register({userName,password,email}): await User.login({email,password});
        console.log(user._id)
        const token = generateToken(user._id);
        const expiry = tokenExpiry(token);
        console.log(token,expiry)
        res.status(201).json({msg, token, exp: expiry});
    } catch(err) {
        next(err);
    }
}

const register = async (req,res,next) => {
    userForm(req,res,next,true,'User registered successfully');
}

const login = async (req,res,next) => {
    userForm(req,res,next,false,'User logged in successfully');
}




module.exports = {register, login}