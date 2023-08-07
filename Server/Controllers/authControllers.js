const User = require('../models/User');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken')
const { error,success } = require('../Utils/responseWrapper');
const signupController = async (req,res) =>{
    try{
        const{name,email,password} = req.body;
        if(!email|| !name||!password){
            return res.status(400).send("all fileds are required");
        }
        const oldUser = await User.findOne({email});
            if(oldUser){
                // return res.status(409).send('User is already registred');
return res.send(error(409,"User is already registered"))
            }
            const hashedPassword =  await bcrypt.hash(password,10);
            const user =await User.create({
                name,
                email,
                password:hashedPassword
            })
            // return res.status(201).send('user create sucessfully')
            return res.send(success(201,"User create succesfully"))
        }catch(e){
            return res.send(e.message);
    
    
        }
        }
        const loginController = async (req,res)=>{
            try{
                const {email,password} = req.body;
                if(!email || !password){
                    // return res.status(400).send('All fields are required')
                    return res.send(error(400,"all fields are required"))
                }
                const user = await User.findOne({email}).select('+password');
                if(!user){
                    // return res.status(404).send('User is not registered');
                       return res.send(error(409,"User is not registred"))
                }
                const matched =await bcrypt.compare(password,user.password);
                if(!matched){
                    // return res.status(403).send("Incorrect password");
                 return res.send(error(401,"Incorrect password"))
                }
        const accessToken = generateAcessToken({
            _id:user._id,
        })
        const referceToken = generateRefreshToken({
            _id:user._id,
        })
        res.cookie('jwt',referceToken,{
            httpOnly:true,
            secure:true
        })
// return res.status(200).send({accessToken});
return res.send(success(200,{accessToken}))
            }catch(e){
                return res.send(error(401,'invalid acessToken'))
            }
        };
        const referehAccessTokenController = async(req,res) =>{
            const cookies = req.cookies;
            if(!cookies.jwt){
                return res.status(401).send('Refresh Token in cookie is required');

            }
            const referceToken = cookies.jwt;
            console.log('refresh',referceToken);
            try{
                const decoded = jwt.verify(
                    referceToken,"shi898"
                );
                const _id = decoded._id;
                const accessToken = generateAcessToken({_id})
                return res.status(200).send({accessToken});
            }catch(e){
          console.log(e.message);
        //   return res.send("invlid refrence token");
        return res.send(error(401,"Invalid refresh Token"))
            }
        }
        const logoutController = async(req,res)=>{
            try{
                req.clearCookie('jwt',{
                    httpOnly:true,
                    secure:true,
                })
                return res.send(success(200,'user loogout succesfully'))
            }catch(e){
                return res.send(error(500,e.message));
            }
        }
        const generateAcessToken =(data) =>{
            try{
                const token = jwt.sign(data, "shib7878", {
                    expiresIn: "1y",
                });
                console.log(token);
                return token;
            } catch (e) {
                console.log(e.message);
            }
        }
        const generateRefreshToken =(data) =>{
            try {
                const token = jwt.sign(data, 'shi898', {
                    expiresIn: "1d",
                });
                console.log(token);
                return token;
            } catch (e){        console.log(e.message);
            }  
        };
        module.exports = {
            signupController,
            loginController,
            referehAccessTokenController,
            logoutController

        };
