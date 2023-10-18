var mongoose	= require("mongoose");
var passportLocalMongoose	= require("passport-local-mongoose");
var UserSchema	= new mongoose.Schema({
	username: String,
	password: String,
	day: Date,
	t1: String,
	t2: String,
	t3: String,
	t4: String,
	t5: String,
	a1: String,
	a2: String,
	a3: String,
	a4: String,
	a5: String,
	s1: String,
	s2: String,
	s3: String,
	s4: String,
	s5: String,

});


UserSchema.plugin(passportLocalMongoose);

module.exports	= mongoose.model("User", UserSchema);

