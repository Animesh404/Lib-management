// if(process.env.NODE_ENV !== 'production'){
//     require('dotenv').config()
// }


const express=require('express')
const app=express()
const passport = require('passport')
const bodyParser 	= require("body-parser")
const LocalStrategy = require("passport-local")
const flash=require("express-flash")
const methodOverride=require('method-override')
const User = require("./models/user")
const mongoose=require("mongoose")
// const { isLoggedIn } = require('./passportConfig')s
const { json } = require('body-parser')
// const { collection } = require('./models/user')

require('./passportConfig')(passport)

//mongoDB setup
mongoose.connect('mongodb://localhost:27017/mydb').then(()=>{
  console.log("Connected to the DB!");
}).catch(err =>{
  console.log("ERROR!: ", err.message);
});

 //Fix For Deprecation Warning
// mongoose.set('useFindAndModify', false); //Fix For Deprecation Warning
// mongoose.set('useCreateIndex', true); //Fix For Deprecation Warning
// mongoose.set('useUnifiedTopology', true);




app.use(express.static(__dirname + "/public"));
app.use(require("express-session")({
	secret: "secret!!!",
	resave: false,
	saveUninitialized: false
}));

app.set('view-engine','ejs')
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(flash())
urlencodedParser=bodyParser.urlencoded({extended: false})




app.use(passport.initialize());
app.use(passport.session());
// passport.use(new LocalStrategy(User.authenticate()));

app.use(methodOverride('_method'))

app.use((req, res, next)=>{
	res.locals.currentUser = req.user;
  	res.locals.error =  req.flash("error");
  	res.locals.success =  req.flash("success");
	next();
});

app.get('/', isLoggedIn, (req,res)=>{
    res.render('index.ejs')
})

app.get('/login', (req,res)=>{
    res.render('login.ejs')
})

app.post('/login', (passport.authenticate('local', {
    successRedirect: '/',
    failureRedirect: '/login',
    failureFlash: true
})))

app.get('/register',  (req,res)=>{
    // res.render('register.ejs')
    res.render('login.ejs')
})




app.post("/register",urlencodedParser, async(req, res)=>{   
    
	console.log(req.body.username)     
    //     User.register(new User({username: req.body.name1}), req.body.password1, (err, user)=>{
    //         if(err){
    //             console.log(err);
    //             req.flash("error",err.message);
    //             res.redirect('/login');
    //         }else{
    //             passport.authenticate("local")(req, res, ()=>{
    //                 // req.flash("success", "Welcome to LibX " + user.name);
    //                   console.log(user.username)  
    //                     res.redirect("/");
    //                 });

    //         }
            
	// });
    const user=await User.findOne({username: req.body.username})
    if(user) return res.status(400).send("User already exists")
    else{
        User
          .create({
            username: req.body.username,
            password: req.body.password
          })
          .then((user) =>{
            // res.status(201).json(user) 
            res.redirect("/")
        })
        .catch((error) => {
          console.error(error);
          res.status(500).send('Error: ' + error);
        })
    }
    
});

app.delete('/logout', (req, res, next)=>{
    req.logOut((e)=>{
        if(e){return next(e)}
    })
    res.redirect('/login')
})
app.get("/logout", (req, res)=>{
	req.logOut((e)=>{
        if(e){return next(e)}
    })
	req.flash("success", "Logged you out!");
	res.redirect("/login");
});

function isLoggedIn(req, res, next){
	if(req.isAuthenticated()){
		return next();
	}
    console.log("notAuth")
	req.flash("error","You need to be logged in to do that ");
	res.redirect("/login");
}

app.listen( process.env.PORT||8000 , process.env.IP, ()=>{
	console.log("app is running!")
})