
const LocalStrategy=require('passport-local').Strategy

const User = require("./models/user")
module.exports= (passport)=>{
    passport.use(new LocalStrategy(async(username,password,done)=>{
     try{   const user=await User.findOne({username})
                if(!user){
                    return done(null, false)
                }
                if(user.password!==password) return done(null,false)
                return done(null, user)
            }
            catch(error){
                error=>console.log(error)
            }
            }))
            // .catch(err=>console.log(err))
        
    
    passport.serializeUser((user,done)=>{
        done(null,user.id)
    });
    passport.deserializeUser((id,done)=>{
        User.findById(id, (err,user)=>{
            done(err,user)
        })
    });
}


// exports.isLoggedIn=(req, res, next)=>{
// 	if(req.user){
// 		return next();
// 	}
//     console.log("notAuth")
// 	req.flash("error","You need to be logged in to do that ");
// 	res.redirect("/login");
// }