module.exports = {
    isUserAuthenticated: function(req, res, next){
		//you can check anything heref like req.url ,session ect.
		//so let's check if user session exists
		if(req.session && req.session.login_user){
		//user logged in
		return next();
		}
		//user not authenticated redirect them to login page or anywhere you want
		res.redirect("/login");
	}
}
