exports.viewProject = function(req, res) { 
  // controller code goes here 
  var name = req.params.name; 
  if(name === undefined) {
  	name = "Blank project";
  }
  res.render("project", {
  	'projectName' : name
  });
};